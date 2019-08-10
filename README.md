# blackboard.js

blackboard.js lets you extend HTML’s syntax to express application’s __component__, it helps you structure HTML related code and improve the reusablity of user interface. It lets you write less code for view and focus on business logic.


# compatibility

It is designed to support all browsers that are __ES5-compliant__

# dependency

Currently it has dependency for axio.js to load remote template, but plan to remove it later.

# features

1. HTML style template syntax
2. Data binding and Event binding
3. Two-Way data binding
4. Build-in directives
5. Service injection
6. Custom diretive

# template syntax

> ***:*** data binding 

> ***@*** event binding 

> ***\**** directive 

# start up

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Syntax</title>
</head>

<body>
    <div id="app">
        <!--data binding-->
        <input type="text" :value="value">

        <!--event binding-->
        <input type="text" :value="value" @change="onchange()">

        <!--event binding, pass arguments-->
        <input type="text" :value="value" @change="onchange($event)">

        <!--two-way binding with directive-->
        <input type="text" *b-model="value">

        <!--using directive-->
        <div *b-bind="value"></div>

        <!--using component, pass arguments-->
        <note content="value"></note>

        <!--using component, pass arguments using data binding-->
        <note :content="value"></note>
    </div>
    <script src="../lib/axios.js"></script>
    <script src="../../dist/blackboard.js"></script>
    <script src="./index.js"></script>
</body>

</html>
```

```
window.onload = function(){

    blackboard.component('note', {
        template: '<div :b-bind="content"></div>',
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
```

# document
<a href="*" target="_blank">Component</a>
<a href="*" target="_blank">Directive</a>
<a href="*" target="_blank">Filter</a>
<a href="*" target="_blank">Service</a>