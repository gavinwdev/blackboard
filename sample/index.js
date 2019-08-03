(function (global) {
    'use strict';

    var blackboard = global.blackboard;

    blackboard.filter('filterTest', function (value) {
        return value + 'handled by filter';
    });

    blackboard.service('serviceTest', {
        props: {
            count: 100
        }
    });

    blackboard.component('say-hello2', {
        extends: 'say-hello',
        methods: {
            say: function () {
                alert(this.word);
            }
        }
    });

    blackboard.component('say-hello', {
        // template: '<input type="text" :value="input" @change="change($event)" />',
        templateUrl: './template.html',
        inject: {
            test: 'serviceTest'
        },
        props: {
            input: ''
        },
        events: ['inputChange'],
        methods: {
            say: function () {
                alert('Hello');
            },
            add: function () {
                this.a = 300;
            },
            change: function (e) {
                this.input = e.target.value;
                this.inputChange.fire({
                    newValue: e.target.value
                });
            }
        },
        onUpdate: function () {
            
        }
    });

    global.onload = function () {
        var scope = {
            props: {
                name: 'tag',
                color: 'red',
                css: 'width: 10px;height:20px;border:solid 1px red;',
                shown: false
            },
            methods: {
                sendMessage: function (e) {
                    this.name = 'detect';
                    this.color = 'green';
                    this.css = 'width: 10px;height:20px;border:solid 1px green;';
                    this.shown = !this.shown;
                },
                onInputChange: function (e, args) {
                    this.name = args.newValue;
                }
            }
        };

        blackboard.bootstrap('app', scope);
    };

})(window);