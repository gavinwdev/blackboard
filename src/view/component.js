import {isMessenger} from '../utility';
import * as utils from '../utility/utils';
import * as eleUtils from '../utility/ele-utils';
import { injector } from './injector';
import {compile} from '../parser';
import { validate, watch, watchCollection } from './watch';

export default function Component() {
    this.$$astNodes = [];
    this.$$ownerVNode = null;
    this.$$parent = null;
    this.$$childComponents = [];
    this.$$directives = [];
    this.$$detectTimeout = null;
    this.$$unwatches = [];
    this.$$element = null;
}

Component.prototype.$getTemplate = function () {
    var self = this;
    return new Promise(function (resolve) {
        if (utils.isString(self.$$def.template)) {
            resolve(self.$$def.template);
        }
        else if (utils.isString(self.$$def.templateUrl)) {
            injector.service('$templateCache').getTplByUrl(self.$$def.templateUrl).then(function (tpl) {
                resolve(tpl);
            });
        }
        else {
            resolve('');
        }
    });
};

Component.prototype.$renderSync = function(){
    var self = this;
    this.$$element = compile(self.$$def.template, {
        getEmbedTpl: function () {
            return self.$$ownerVNode.getInnerTpl();
        }
    })(self);
    return this.$$element;
};

Component.prototype.$render = function () {
    var self = this;
    return new Promise(function (resolve) {
        self.$getTemplate().then(function (html) {
            self.$$element = compile(html, {
                getEmbedTpl: function () {
                    return self.$$ownerVNode.getInnerTpl();
                }
            })(self);
            resolve(self.$$element);
        });
    });
};

Component.prototype.$unmount = function(){
    eleUtils.removeNode(this.$$element);
};

Component.prototype.$mount = function (idOrElement) {
    var self = this, element;

    if (utils.isString(idOrElement)) {
        element = document.getElementById(idOrElement);
    }
    else {
        element = idOrElement;
    }

    eleUtils.clearChildNodes(element);

    if(self.$$element){
        self.$onMounting();
        element.appendChild(self.$$element);
        self.$onMounted();
    }
    else{
        this.$render().then(function (ele) {
            self.$onMounting();
            element.appendChild(ele);
            self.$onMounted();
        });
    }
};

Component.prototype.$detect = function () {
    if (this.$$detectTimeout) {
        return;
    }

    var self = this;
    self.$$detectTimeout = setTimeout(function () {
        self.$$detectTimeout = null;
        self.$onUpdating();
        self.$$astNodes.forEach(function (astNode) {
            astNode.detect();
        });
        self.$onUpdated();
    });
};

Component.prototype.$destroy = function () {
    this.$onDestroying();
    this.$$astNodes.forEach(function (astNode) {
        astNode.destroy();
    });
    this.$onDestroyed();
};

Component.prototype.$update = function () {
    if (utils.isFunction(this.$$def.onUpdate)) {
        this.$$def.onUpdate.call(this);
    }
};

Component.prototype.$hasAttr = function (prop) {
    return utils.hasProperty(this.$$def.props, prop, true);
};

Component.prototype.$setAttr = function (prop, value) {
    utils.setProperty(this, prop, value, true);
};

Component.prototype.$hasEvent = function (e) {
    return utils.containsStr(this.$$def.events, e, true);
};

Component.prototype.$listen = function (e, fn) {
    var messenger = utils.getProperty(this, e, true);
    if (isMessenger(messenger)) {
        messenger.on(fn);
        return;
    }
    throw new Error(e + ' is not a event');
};

Component.prototype.$onCreating = function () {
    if (utils.isFunction(this.$$def.onCreating)) {
        this.$$def.onCreating.call(this);
    }
};

Component.prototype.$onCreated = function () {
    var self = this;
    if (utils.isObject(this.$$def.inject)) {
        utils.forEach(this.$$def.inject, function (key, value) {
            self[key] = injector.createService(value);
        });
    }
    if (utils.isFunction(this.$$def.onCreated)) {
        this.$$def.onCreated.call(this);
    }
};

Component.prototype.$onUpdating = function () {
    if (utils.isFunction(this.$$def.onUpdating)) {
        this.$$def.onUpdating.call(this);
    }
};

Component.prototype.$onUpdated = function () {
    if (utils.isFunction(this.$$def.onUpdated)) {
        this.$$def.onUpdated.call(this);
    }
};

Component.prototype.$onMounting = function () {
    if (utils.isFunction(this.$$def.onMounting)) {
        this.$$def.onMounting.call(this);
    }
};

Component.prototype.$onMounted = function () {
    if (utils.isFunction(this.$$def.onMounted)) {
        this.$$def.onMounted.call(this);
    }
};

Component.prototype.$onDestroying = function () {
    if (utils.isFunction(this.$$def.onDestroying)) {
        this.$$def.onDestroying.call(this);
    }
    if(this.$$detectTimeout){
        clearTimeout(this.$$detectTimeout);
    }
    var self = this;
    this.$$unwatches.forEach(function(unwatch){
        if(utils.isFunction(unwatch)){
            unwatch.call(self);
        }
    });
};

Component.prototype.$onDestroyed = function () {
    if (utils.isFunction(this.$$def.onDestroyed)) {
        this.$$def.onDestroyed.call(this);
    }
    this.$$astNodes = null;
    this.$$ownerVNode = null;
    this.$$parent = null;
    this.$$childComponents = null;
    this.$$directives = null;
    this.$$unwatches = null;
    this.$$element = null;
};

Component.prototype.$validate = function(prop, action){
    this.$$unwatches.push(validate(this, prop, action));
};

Component.prototype.$watch = function(prop, action){
    this.$$unwatches.push(watch(this, prop, action));
};

Component.prototype.$watchCollection = function(arr, action){
    this.$$unwatches.push(watchCollection(arr,action));
};

Component.prototype.$getElement = function(){
    return this.$$element;
};