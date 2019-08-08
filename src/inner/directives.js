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
    onCompile: function (attrNode, options) {
        var arg = attrNode.nodeValue;
        var eleNode = attrNode.ownerVElement;
        var pattern = /^(\w+)\s+in\s+(\w+)$/i;
        var result = pattern.exec(arg);

        if (result == null) {
            throw new Error("b-repeat: parameter is not valid");
        }

        var itemExp = result[1];
        var itemsExp = result[2];

        eleNode.removeAttribute(attrNode);

        var currentScope, currentItems, start, end, childScopes = [];
        var tpl = eleNode.getOuterTpl();
        var custom = eleNode.createCustom('b-repeat', function (scope) {
            var fragment = document.createDocumentFragment();
            currentScope = scope;
            setCurrentItems(compute(itemsExp, currentScope));
            start = document.createComment('start: b-repeat');
            end = document.createComment('end: b-repeat');
            fragment.appendChild(start);
            fragment.appendChild(end);
            return fragment;
        });

        eleNode.parentNode.replaceChild(eleNode, custom);

        custom.onInsert = function () {
            build(currentItems);
        };

        custom.onDetect = function () {
            var items = compute(itemsExp, currentScope);

            if (hasChange(currentItems, items)) {
                setCurrentItems(items);
                build(currentItems);
            }
            else {
                childScopes.forEach(function (childScope) {
                    childScope.$detect();
                });
            }
        };

        custom.onDestroy = function () {
            childScopes.forEach(function (childScope) {
                childScope.$destroy();
            });
            childScopes = null;
            eleNode = null;
            currentScope = null;
            currentItems = null;
            start = null;
            end = null;
            custom = null;
        };

        function hasChange(newArr, oldArr) {
            if (newArr.length !== oldArr.length) {
                return true;
            }

            return newArr.some(function (item, index) {
                item !== oldArr[index];
            });
        }

        function setCurrentItems(value) {
            if (utils.isArray(value)) {
                currentItems = value.slice(0);
            }
            else {
                currentItems = [];
            }
        }

        function build(items) {
            var fragment = document.createDocumentFragment();

            ChildScope.prototype = currentScope;
            function ChildScope(value) {
                this[itemExp] = value;
            }

            childScopes.forEach(function (childScope) {
                childScope.$destroy();
            });
            childScopes = [];
            utils.forEach(items, function (key, item) {
                var childScope = new ChildScope(item);
                var element = compile(tpl, options)(childScope);
                childScopes.push(childScope);
                fragment.appendChild(element);
            });

            utils.removeBetween(start, end);
            end.parentNode.insertBefore(fragment, end);
        }
    }
});

directive('b-embed', {
    onCompile: function (attrNode, options) {
        var embedTpl = options.getEmbedTpl();
        if(embedTpl){
            attrNode.ownerVElement.setInnerTpl(embedTpl);
        }
    }
});