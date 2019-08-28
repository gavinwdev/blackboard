(function(global) {
    'use strict';

    var blackboard = global.blackboard,
        spaceName = 'app.note';

    blackboard.namespace(spaceName).component('test-embed', {
        template: '<div *b-embed></div>',
        props: {
            name: 'embed'
        },
        using: {
            b: 'blackboard'
        }
    });

    blackboard.namespace(spaceName).service('noteService', {
        props: {
            zIndex: 0,
            notes: []
        },
        methods: {
            nextZIndex: function() {
                return ++this.zIndex;
            },
            isMaxZIndex: function(zIndex) {
                return zIndex >= this.zIndex;
            },
            create: function(notes) {
                var newNote = {
                    content: 'new note',
                    position: {
                        x: 20,
                        y: 20
                    },
                    size: {
                        width: 180,
                        height: 180
                    },
                    zIndex: this.nextZIndex()
                };

                notes.push(newNote);

                return newNote;
            },
            getList: function() {
                return this.notes;
            },
            load: function() {
                var self = this,
                    json = localStorage.getItem('notes');
                if (json) {
                    this.notes = JSON.parse(json);
                    this.notes.forEach(function(note) {
                        if (note.zIndex > self.zIndex) {
                            self.zIndex = note.zIndex;
                        }
                    });
                }
            },
            save: function() {
                localStorage.setItem('notes', JSON.stringify(this.getList()));
            },
            removeAll: function(notes) {
                notes.length = 0;
            },
            remove: function(notes, note) {
                var index = this.notes.indexOf(note);

                if (index !== -1) {
                    notes.splice(index, 1);
                }
            }
        }
    });

    blackboard.namespace(spaceName).directive('note-pan', function(ele, binding) {
        var scope = binding.scope;
        var hammerTime = new Hammer(ele);

        var x, y;
        hammerTime.on('panstart', function() {
            x = scope.model.position.x;
            y = scope.model.position.y;
        });

        hammerTime.on('panmove', function(ev) {
            scope.proxy.model.position.x = x + ev.deltaX;
            scope.proxy.model.position.y = y + ev.deltaY;
        });
    });

    blackboard.namespace(spaceName).directive('note-resize', function(ele, binding) {
        var scope = binding.scope;
        var hammerTime = new Hammer(ele);

        var x, y;
        hammerTime.on('panstart', function() {
            x = scope.model.size.width;
            y = scope.model.size.height;
        });

        hammerTime.on('panmove', function(ev) {
            scope.proxy.model.size.width = x + ev.deltaX;
            scope.proxy.model.size.height = y + ev.deltaY;
        });
    });

    blackboard.namespace(spaceName).component('note', {
        templateUrl: './note.html',
        inject: {
            noteService: 'noteService'
        },
        events: ['destroy'],
        props: {
            model: {
                content: 'this is content',
                position: {
                    x: 20,
                    y: 20
                },
                zIndex: 0
            },
            test: null
        },
        methods: {
            onMouseDown: function() {
                if (!this.noteService.isMaxZIndex(this.model.zIndex)) {
                    this.proxy.model.zIndex = this.noteService.nextZIndex();
                }
            }
        },
        onInit: function() {
            var self = this;

            this.$watch(/^model\./, function () {
                self.noteService.save();
            }, true);
        },
        onDestroy: function () {
            this.destroy.fire();
        }
    });

    global.onload = function() {
        var scope = {
            inject: {
                noteService: 'noteService'
            },
            props: {
                notes: []
            },
            methods: {
                createNote: function() {
                    this.noteService.create(this.proxy.notes);
                    this.noteService.save();
                },
                saveNote: function() {
                    this.noteService.save();
                },
                clearNote: function() {
                    this.noteService.removeAll(this.proxy.notes);
                    this.noteService.save();
                },
                removeNote: function(note) {
                    this.noteService.remove(this.proxy.notes, note);
                    this.noteService.save();
                }
            },
            onInit: function() {
                this.noteService.load();
                this.notes = this.noteService.getList();
            }
        };

        blackboard.bootstrap('app', scope);
    };

})(window);