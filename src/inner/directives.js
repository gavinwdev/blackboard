import { directive } from '../view';
import {compute , compile} from '../parser';
import * as utils from '../utility';

directive('b-show', function (ele, binding) {
    ele.style.display = binding.compute() ? 'initial' : 'none';
});

directive('b-hide', function (el, binding) {
    el.style.display = binding.compute() ? 'none' : 'initial';
});

directive('b-if', {
    props: {
        comment: null
    },
    onInsert: function (ele, binding) {
        if (!binding.compute()) {
            this.comment = document.createComment(ele.outerHTML);
            utils.replace(ele, this.comment);
        }
    },
    onUpdate: function (ele, binding) {
        if (binding.compute()) {
            if (this.comment) {
                utils.replace(this.comment, ele);
                this.comment = null;
            }
        }
        else {
            if (!this.comment) {
                this.comment = document.createComment(ele.outerHTML);
                utils.replace(ele, this.comment);
            }
        }
    }
});

directive('b-bind', function(ele, binding){
    ele.innerText = binding.compute();
});

directive('b-attr', function (ele, binding) {
    var attr = binding.compute();
    if (attr) {
        ele.setAttribute(attr, '');
    }
    else {
        ele.removeAttribute(attr);
    }
});

directive('b-model', {
    onInsert: function (ele, binding, com) {
        this.$update(ele, com);

        if(com == null){
           ele.addEventListener('change', function(e){
                utils.setProperty(binding.scope, binding.text, e.target.value);
           });
        }
        else{
            if(utils.isMessenger(com.change)){
                com.change.on(function(e, args){
                    utils.setProperty(binding.scope, binding.text, args.newvalue);
                });
            }
            throw new Error('Compoent ' + com.$key + 'must define [change] event');
        }
    },
    onUpdate:function(ele, binding, com) {
        if (com == null) {
            ele.value = binding.compute();
        }
        else {
            com.value = binding.compute();
        }
    }
});

directive('b-repeat', {
    onCompile: function (node) {
        var arg = node.nodeValue2;
        var eleNode = node.parentNode;
        eleNode.removeChild(node);
        var tpl = eleNode.getOuterTpl();
        var custom = eleNode.createCustom('b-repeat', function () {
            var fragment = document.createDocumentFragment();
            this.start = document.createComment('start: b-repeat');
            this.end = document.createComment('end: b-repeat');
            fragment.appendChild(this.start);
            fragment.appendChild(this.end);
            return fragment;
        });
        eleNode.parentNode.replaceChild(eleNode, custom);

        var pattern = /^(\w+)\s+in\s+(\w+)$/i;
        var result = pattern.exec(arg);
        if (result == null) {
            throw new Error("b-repeat: parameter is not valid");
        }
        var itemExp = result[1];
        var itemsExp = result[2];
        var currentItems;

        custom.onInsert = function () {
            currentItems = compute(itemsExp, this.scope);
            build.call(this, currentItems);
        };

        custom.onDetect = function () {
            var items = compute(itemsExp, this.scope);
            if (currentItems !== items) {
                currentItems = items;
                build.call(this, currentItems);
            }
        };

        function build(items) {
            var self = this, fragment = document.createDocumentFragment();

            function ChildScope(value) {
                this[itemExp] = value;
            }

            ChildScope.prototype = self.scope;

            utils.forEach(items, function (key, value) {
                var childScope = new ChildScope(value);
                fragment.appendChild(compile(tpl)(childScope));
            });

            utils.removeBetween(this.start, this.end);
            this.end.parentNode.insertBefore(fragment, this.end);
        }
    }
});