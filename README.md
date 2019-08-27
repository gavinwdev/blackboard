# blackboard.js

blackboard.js lets you extend HTML’s syntax to express application’s __component__, it helps you structure HTML related code and improve the reusablity of user interface. It also lets you write less code for view and focus on business logic.


# compatibility

It uses Proxy and Promise class defined in the ES6 standard, so it only works on browsers which support these feature.

# dependency

Currently it has dependency for axio.js to load remote template, but plan to remove it later.

# two-way binding

blackboard.js  uses Proxy object to detect property changed, there is no dirty data checking cycle or data hijacking ahead of time. 

blackboard.js is base on virtual node, virtual node would watch binding value changed and do respective view update while it detects change happening. 

In order to make two-way binding works, it is a must to use proxy object of component instance to update property value, for example

```
// update model property to 'new value'
this.proxy.model = 'new value';
```

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
```

# document
## common
The following configuration is common for component, directive, service and filter. blackboard would create certain constructor function according to configuration. The member of inject, props, events and methods would beccome members of respective instance, you can access it with "this" pointer in instance methods.
```
    // extends parent class definition, fill in parent name here
    extends: '',

    // the short names for using namespace
    using: {
        [shortName]: [namespace]
    },

    // service injection
    inject: {
        [propName]: [serviceName]
    },

    // class properties
    props: {
        [propName]: [serviceName]
    },

    // class events
    events: [
        'eventName'
    ],

    // class methods
    methods: {
        [methodName]: [methodFunction]
    }

```

## compoent
component encapsulates UI control and extends HTML tag to represent application component, the code below shows how to identify a component and explain its configuration.
#### configuration
```
{
    // template
    template: '',
    templateId: '',
    templateUrl: ''
    // the priority is from high to low

    props: {
        // properties defined here are reactive, the view would be updated while value is modified
    },

    // lifecycle hooks
    onCreating: function(){

    },
    onCreated: function(){

    },
    onUpdating: function(){

    },
    onUpdated: function(){

    },
    onMounting: function(){

    },
    onMounted: function(){

    },
    onDestroying: function(){

    },
    onDestroyed: function(){

    }
    // end of lifecycle callbacks
}
```

#### sample
```
// suppose to create a component named 'note'
blackboard.namespace('app').component('note, {
    template: '<div *b-bind="content"></div>',
    props: {
        content: ''
    },
    events: ['contentChanged']
});
```

use it in the template
```
<note content="this is content" @contentChanged="onContentChanged()"></note>
```

## directive
directive encapsulates view logic about operating virtual node or HTML DOM element
#### configuration
```
{
    // identify directive outputs value, most of directives input value.
    output: false,

    // lifecycle hooks
    onCreating: function(ele, binding, component){
        
    },
    onCreated: function(ele, binding, component){
        
    },
    onCompile: function(ele, binding, component){
        
    },
    onInsert: function(ele, binding, component){
        
    },
    onUpdate: function(ele, binding, component){
        
    },
    onDetect: function(ele, binding, component){
        
    },
    onDestroy: function(ele, binding, component){
        
    }
    // end of lifecycle hooks
}
```

#### sample
```
// suppose to create a directive to set inner text
blackboard.directive('bind-text' , {
    onInsert: function(ele, binding, component){
        ele.innerText = binding.compute();
    },
    onUpdate: function(ele, binding, component){
        ele.innerText = binding.compute();
    }
});
```

get input value
```
binding.compute();
```

shortening
```
blackboard.directive('bind-text' ,function(ele, binding){
    ele.innerText = binding.compute();
});
```

## service
Business service, can be injected to component or directive

## filter
The pipeline from model to view
