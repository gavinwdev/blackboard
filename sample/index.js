(function (global) {
    'use strict';

    var blackboard = global.blackboard;

    blackboard.component('font-weight', {
        template: ''
    });

    global.onload = function () {
        var scope = {
            props: {
                content: 'Hello Blackboard!',
                fontSizes: [
                    {
                        value: 100,
                        selected: false
                    },
                    {
                        value: 200,
                        selected: false
                    },
                    {
                        value: 300,
                        selected: true
                    },
                    {
                        value: 400,
                        selected: false
                    },
                    {
                        value: 500,
                        selected: false
                    }
                ]
            },
            methods: {
                onClick: function () {

                }
            }
        };

        blackboard.bootstrap('app', scope);
    };

})(window);