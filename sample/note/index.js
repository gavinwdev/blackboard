(function (global) {
    'use strict';

    var blackboard = global.blackboard, spaceName = 'app.note';

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
            nextZIndex: function () {
                return ++this.zIndex;
            },
            isMaxZIndex: function (zIndex) {
                return zIndex >= this.zIndex;
            },
            create: function () {
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

                this.notes.push(newNote);

                return newNote;
            },
            getList: function () {
                return this.notes;
            },
            load: function () {
                var self = this, json = localStorage.getItem('notes');
                if (json) {
                    this.notes = JSON.parse(json);
                    this.notes.forEach(function (note) {
                        if (note.zIndex > self.zIndex) {
                            self.zIndex = note.zIndex;
                        }
                    });
                }
            },
            save: function () {
                localStorage.setItem('notes',  JSON.stringify(this.getList()));
            },
            removeAll: function () {
                this.notes.empty();
                this.save();
            },
            remove: function (dataItem) {
                var index = this.notes.indexOf(dataItem);

                if(index !== -1){
                    this.notes.splice(index, 1);
                }
            }
        }
    });

    blackboard.namespace(spaceName).directive('note-pan', function (ele, binding) {
        var scope = binding.scope;
        var hammerTime = new Hammer(ele);

        var x, y;
        hammerTime.on('panstart', function () {
            x = scope.model.position.x;
            y = scope.model.position.y;
        });

        hammerTime.on('panmove', function (ev) {
            scope.model.position.x = x + ev.deltaX;
            scope.model.position.y = y + ev.deltaY;
        });
    });

    blackboard.namespace(spaceName).directive('note-resize', function (ele, binding) {
        var scope = binding.scope;
        var hammerTime = new Hammer(ele);

        var x, y;
        hammerTime.on('panstart', function () {
            x = scope.model.size.width;
            y = scope.model.size.height;
        });

        hammerTime.on('panmove', function (ev) {
            scope.model.size.width = x + ev.deltaX;
            scope.model.size.height = y + ev.deltaY;
        });
    });

    blackboard.namespace(spaceName).component('note', {
        templateUrl: './note.html',
        inject: {
            noteService: 'noteService'
        },
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
            onMouseDown: function () {
                if (!this.noteService.isMaxZIndex(this.model.zIndex)) {
                    this.model.zIndex = this.noteService.nextZIndex();
                }
            },
            remove: function () {
                this.noteService.remove(this.model);
            }
        },
        onCreated: function(){
            
        }
    });

    global.onload = function () {
        var scope = {
            inject: {
                noteService: 'noteService'
            },
            props: {
                notes: []
            },
            methods: {
                createNote: function () {
                    this.noteService.create();
                },
                saveNote: function () {
                    this.noteService.save();
                },
                clearNote: function () {
                    this.noteService.removeAll();
                }
            },
            onCreated: function () {
                this.noteService.load();
                this.notes = this.noteService.getList();
            }
        };

        blackboard.bootstrap('app', scope);
    };

})(window);