(function (global) {
    'use strict';

    var blackboard = global.blackboard;

    blackboard.component('test-embed', {
        template: '<div *b-embed></div>',
        props: {
            name: 'embed'
        }
    });

    global.onload = function () {
        var scope = {
            props: {
                content: 'Hello Blackboard!',
                fontSizes: []
            },
            methods: {
                onClick: function () {
                    this.fontSizes.push({
                        value: 'new',
                        selected: false
                    });
                }
            },
            onCreated: function () {
                var count = 0;

                while(count < 100) {
                    this.fontSizes.push({
                        value: count,
                        selected: count === 10
                    });
                    count++;
                }
            }
        };

        blackboard.bootstrap('app', scope);
    };

})(window);