(function (global) {
    'use strict';

    var blackboard = global.blackboard;

    blackboard.component('font-size', {
        template: ''
    });

    global.onload = function () {
        var scope = {
            props: {
                content: 'Hello Blackboard!'
            },
            methods: {
                
            }
        };

        blackboard.bootstrap('app', scope);
    };

})(window);