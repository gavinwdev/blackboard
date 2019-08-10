window.onload = function(){

    blackboard.component('note', {
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