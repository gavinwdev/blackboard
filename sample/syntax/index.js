window.onload = function(){

    var demo = 'demo';

    blackboard.namespace(demo).component('note', {
        template: '<div *b-bind="content"></div>',
        props: {
            content: ''
        },
        methods: {
            onchange: function(){
                console.log('value changed')
            }
        }
    });

    var scope = {
        props: {
            value: 'text holder'
        }
    };

    blackboard.bootstrap('app', scope);

};
