(function (global) {
    'use strict';

    var blackboard = global.blackboard;

    blackboard.component('test-embed', {
        template: '<div *b-embed></div>',
        props: {
            name: 'embed'
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

    blackboard.component('note', {
        templateUrl: './note.html',
        props: {
            model: {
                content: 'this is content',
                position: {
                    x: 20,
                    y: 20
                }
            }
        }
    });

    global.onload = function () {
        var scope = {
            props: {
                notes: []
            },
            methods: {
                createNote: function () {
                    this.notes.push({
                        content: 'new note',
                        position: {
                            x: 20,
                            y: 20
                        }
                    });
                }
            },
            onCreated: function () {

            }
        };

        blackboard.bootstrap('app', scope);
    };

})(window);