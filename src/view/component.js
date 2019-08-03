import {isMessenger} from '../utility';
import * as utils from '../utility/utils';
import * as eleUtils from '../utility/ele-utils';
import { injector } from './injector';
import {compile} from '../parser';
import axios from 'axios';

export default function Component() {
    this.$astNodes = [];
    this.$parent = null;
    this.$children = [];
    this.$directives = [];
}

Component.prototype.$getTemplate = function () {
    var self = this;
    return new Promise(function (resolve) {
        if (utils.isString(self.$def.template)) {
            resolve(self.$def.template);
        }
        else if (utils.isString(self.$def.templateId)) {
            var tpl = document.getElementById(self.$def.templateId);

            if (tpl == null) {
                resolve('');
            }
            else {
                resolve(tpl.innerText);
            }
        }
        else if (utils.isString(self.$def.templateUrl)) {
            axios.get(self.$def.templateUrl).then(function (res) {
                resolve(res.data);
            });
        }
        else {
            resolve('');
        }
    });
};

Component.prototype.$render = function () {
    var self = this;
    return new Promise(function (resolve) {
        self.$getTemplate().then(function (html) {
            resolve(compile(html)(self));
        });
    });
};

Component.prototype.$mount = function (idOrElement) {
    var self = this, element;

    if (utils.isString(idOrElement)) {
        element = document.getElementById(idOrElement);
    }
    else {
        element = idOrElement;
    }

    eleUtils.empty(element);
    this.$render().then(function (ele) {
        self.$onMounting();
        element.appendChild(ele);
        self.$onMounted();
    });
};

Component.prototype.$detect = function () {
    this.$astNodes.forEach(function (astNode) {
        astNode.detect();
    });
};

Component.prototype.$destroy = function () {
    this.$onDestroying();
    this.$children.forEach(function (child) {
        child.$destroy();
    });
    this.$directives.forEach(function (child) {
        child.$destroy();
    });
    this.$onDestroyed();
};

Component.prototype.$update = function () {
    if (utils.isFunction(this.$def.onUpdate)) {
        this.$def.onUpdate.call(this);
    }
};

Component.prototype.$hasAttr = function (prop) {
    return utils.hasProperty(this.$def.props, prop, true);
};

Component.prototype.$setAttr = function (prop, value) {
    utils.setProperty(this, prop, value, true);
};

Component.prototype.$hasEvent = function (e) {
    return utils.containsStr(this.$def.events, e, true);
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
    if (utils.isFunction(this.$def.onCreating)) {
        this.$def.onCreating.call(this);
    }
};

Component.prototype.$onCreated = function () {
    var self = this;
    if (utils.isObject(this.$def.inject)) {
        utils.forEach(this.$def.inject, function (key, value) {
            self[key] = injector.createService(value);
        });
    }
    if (utils.isFunction(this.$def.onCreated)) {
        this.$def.onCreated.call(this);
    }
};

Component.prototype.$onUpdating = function () {

};

Component.prototype.$onUpdated = function () {

};

Component.prototype.$onMounting = function () {

};

Component.prototype.$onMounted = function () {
    this.$astNodes.forEach(function (item) {
        item.inserted();
    });
};

Component.prototype.$onDestroying = function () {

};

Component.prototype.$onDestroyed = function () {

};