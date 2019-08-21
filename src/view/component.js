import {isMessenger} from '../utility';
import * as utils from '../utility/utils';
import * as eleUtils from '../utility/ele-utils';
import { injector } from './injector';
import {compile} from '../parser';
import { validate, watch, watchCollection, watchObject } from './watch';

export default function Component() {
    this.$$vnodes = null;
    this.$$ownerVNode = null;
    this.$$parentComponent = null;
    this.$$childComponents = [];
    this.$$childDirectives = [];
    this.$$detectTimeout = null;
    this.$$trackers = [];
}

Component.prototype.$getTemplate = function (sync) {
    var self = this;

    if(sync){
        return self.$$def.template || '';
    }

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

Component.prototype.$using = function (name) {
    var using = this.$$def.using,
        segments = name.split('.'),
        className = segments.pop(),
        spaceName = segments.join('.');

    if (spaceName && utils.isObject(using)) {
        utils.some(using, function (key, value) {
            if (key === spaceName) {
                name = value + '.' + className;
                return true;
            }
        });
    }

    return name;
};

Component.prototype.$makeCompileOptions = function () {
    var self = this;
    return {
        getEmbedTpl: function () {
            return this.$$ownerVNode.getInnerTpl();
        },
        containsComponent: function (name) {
            return injector.containsComponent(self.$using(name));
        },
        createComponent: function (name) {
            return injector.createComponent(self.$using(name));
        },
        containsDirective: function (name) {
            return injector.containsDirective(self.$using(name));
        },
        createDirective: function (name) {
            return injector.createDirective(self.$using(name));
        }
    };
};

Component.prototype.$hasVNodes = function () {
    return utils.isArray(this.$$vnodes);
};

Component.prototype.$fromVNodes = function () {
    var fragment = document.createDocumentFragment();

    this.$$vnodes.forEach(function (vnode) {
        fragment.appendChild(vnode.getDomElement());
    });

    return fragment;
};

Component.prototype.$clearVNodes = function () {
    if (!this.$hasVNodes()) {
        return;
    }
    this.$$vnodes.forEach(function (vnode) {
        vnode.destroy();
    });
    this.$$vnodes = null;
};

Component.prototype.$render = function (sync) {
    var self = this;

    if (sync) {
        if (this.$hasVNodes()) {
            return this.$fromVNodes();
        }

        var compileOptions = this.$makeCompileOptions();
        var fragment = compile(self.$getTemplate(sync), compileOptions)(self);
        return fragment;
    }

    return new Promise(function (resolve) {
        if (self.$hasVNodes()) {
            resolve(self.$fromVNodes());
        }
        else {
            self.$getTemplate().then(function (html) {
                var compileOptions = self.$makeCompileOptions();
                var fragment = compile(html, compileOptions)(self);
                resolve(fragment);
            });
        }
    });
};

Component.prototype.$rerender = function (sync) {
    this.$clearVNodes();
    this.$render(sync);

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

    this.$render().then(function (ele) {
        self.$onMounting();
        element.appendChild(ele);
        self.$onMounted();
    });
};

Component.prototype.$unmount = function () {
    if(this.$hasVNodes()) {
        this.$$vnodes.forEach(function (vnode) {
            vnode.removeDomElement();
        });
    }
};

Component.prototype.$detect = function () {
    if (this.$$detectTimeout || !this.$$vnodes) {
        return;
    }

    var self = this;
    self.$$detectTimeout = setTimeout(function () {
        self.$$detectTimeout = null;
        self.$onUpdating();
        self.$$vnodes.forEach(function (vnode) {
            vnode.detect();
        });
        self.$onUpdated();
    });
};

Component.prototype.$destroy = function () {
    this.$onDestroying();
    this.$clearVNodes();
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
    this.$$trackers.forEach(function(tracker){
        tracker.destroy();
    });
};

Component.prototype.$onDestroyed = function () {
    if (utils.isFunction(this.$$def.onDestroyed)) {
        this.$$def.onDestroyed.call(this);
    }
    this.$unmount();
    this.$$ownerVNode = null;
    this.$$parentComponent = null;
    this.$$childComponents = null;
    this.$$childDirectives = null;
    this.$$trackers = null;
};

Component.prototype.$track = function (tracker) {
    var self = this;
    this.$$trackers.push(tracker);
    return function () {
        tracker.destroy();
        self.$$trackers = self.$$trackers.filter(function (item) {
            return item !== tracker;
        });
    };
};

Component.prototype.$validate = function(prop, action, deep) {
    var objProp = prop.split('.').pop().join('.'), obj = this;

    if (objProp) {
        obj = utils.getProperty(this, objProp);
    }

    if (obj) {
        return this.$track(validate(obj, prop, action, deep));
    }
    else {
        throw new Error(objProp + ' is undefined');
    }
};

Component.prototype.$watch = function(prop, action, deep){
    var objProp = prop.split('.').pop().join('.'), obj = this;

    if (objProp) {
        obj = utils.getProperty(this, objProp);
    }

    if (obj) {
        return this.$track(watch(obj, prop, action, deep));
    }
    else {
        throw new Error(objProp + ' is undefined');
    }
};

Component.prototype.$watchCollection = function(arr, action, deep){
    return this.$track(watchCollection(arr, action, deep));
};

Component.prototype.$watchObject = function(obj, action, deep){
    return this.$track(watchObject(obj, action, deep));
};