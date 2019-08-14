(function (global) {
    'use strict';

    var blackboard = global.blackboard;

    blackboard.component('test-embed', {
        template: '<div *b-embed></div>',
        props: {
            name: 'embed'
        }
    });

    blackboard.service('noteService', {
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
            save: function () {

            },
            getList: function () {
                return this.notes;
            }
        }
    });

    blackboard.directive('note-pan', function (ele, binding) {
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

    blackboard.directive('note-resize', function (ele, binding) {
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

    blackboard.component('note', {
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
            }
        },
        methods: {
            onMouseDown: function () {
                if (!this.noteService.isMaxZIndex(this.model.zIndex)) {
                    this.model.zIndex = this.noteService.nextZIndex();
                }
            }
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
                    this.notes = this.noteService.getList();
                    this.$detect();
                }
            },
            onCreated: function () {
                this.notes = this.noteService.getList();
            }
        };

        blackboard.bootstrap('app', scope);
    };

})(window);