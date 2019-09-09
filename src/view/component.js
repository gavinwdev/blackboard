import { isMessenger } from '../utility';
import * as utils from '../utility/utils';
import * as eleUtils from '../utility/ele-utils';
import { ObjectPropertyChangeSubject } from '../utility/subject';
import { SetPropertyHandler } from '../utility/handler';
import { injector } from './injector';
import { compile } from '../parser';

export default function Component() {
    this.$$vnodes = null;
    this.$$ownerVNode = null;
    this.$$parentComponent = null;
    this.$$childComponents = [];
    this.$$childDirectives = [];
    this.$$detectTimeout = null;
    this.$$propChanged = new ObjectPropertyChangeSubject();
}

Component.prototype.$onInit = function () {
    Object.defineProperty(this, 'proxy', {
        enumerable: false,
        configurable: false,
        get: function () {
            return new Proxy(this, new SetPropertyHandler(this.$$propChanged, '', true));
        }
    });

    injector.injectServices(this);

    if (this.$$def.superInstance != null) {
        this.$$propChanged.setParentVmPropertyChangeSubject(this.$$def.superInstance.$$propChanged.getVmPropertyChangeSubject());
    }

    if (utils.isFunction(this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Component.prototype.$bindVNode = function (vnode) {
    this.$$ownerVNode = vnode;
};

Component.prototype.$hasAttr = function (prop) {
    return utils.hasProperty(this.$$def.props, prop, true);
};

Component.prototype.$setAttr = function (prop, value) {
    utils.setProperty(this.proxy, prop, value, true);

    if (utils.isFunction(this.$$def.onChanges)) {
        this.$$def.onChanges.call(this, prop, value);
    }
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
    var self = this, fragment = null;

    if (sync) {
        if (this.$hasVNodes()) {
            fragment = this.$fromVNodes();
        }
        else {
            fragment = compile(this.$getTemplate(sync), this.$makeCompileOptions())(this);
        }

        return fragment;
    }

    return new Promise(function (resolve) {
        if (self.$hasVNodes()) {
            resolve(self.$fromVNodes());
        }
        else {
            self.$getTemplate().then(function (html) {
                fragment = compile(html, self.$makeCompileOptions())(self);
                resolve(fragment);
            });
        }
    });
};

Component.prototype.$refresh = function (sync) {
    this.$clearVNodes();
    return this.$render(sync);
};

Component.prototype.$mount = function (idOrElement, sync) {
    var self = this, element;

    if (utils.isString(idOrElement)) {
        element = document.getElementById(idOrElement);
    }
    else {
        element = idOrElement;
    }

    eleUtils.clearChildNodes(element);

    if (sync) {
        element.appendChild(this.$render(sync));
        self.$afterViewInit();
    }
    else {
        this.$render(sync).then(function (ele) {
            element.appendChild(ele);
            self.$afterViewInit();
        });
    }
};

Component.prototype.$afterViewInit = function () {
    if (utils.isFunction(this.$$def.afterViewInit)) {
        this.$$def.afterViewInit.call(this);
    }
};

Component.prototype.$unmount = function () {
    if (this.$$ownerVNode != null) {
        this.$$ownerVNode.$remove();
        this.$$ownerVNode.removeDomElement();
    }
    else if (this.$hasVNodes()) {
        this.$$vnodes.forEach(function (vnode) {
            vnode.removeDomElement();
        });
    }

    if (this.$$parentComponent != null) {
        this.$$parentComponent.$removeChild(this);
        this.$$parentComponent = null;
    }
};

Component.prototype.$detect = function () {
    if (this.$$detectTimeout || !this.$$vnodes) {
        return;
    }

    var self = this;
    self.$$detectTimeout = setTimeout(function () {
        self.$$detectTimeout = null;
        self.$$vnodes.forEach(function (vnode) {
            vnode.detect();
        });
    });
};

Component.prototype.$validate = function(prop, action) {
    var self = this;

    this.$$propChanged.onVm(prop, action, {
        beforeChanged: true
    });

    return function () {
        self.$$propChanged.offVm(prop, action);
    };
};

Component.prototype.$validateProp = function(obj, prop, action) {
    var self = this;

    this.$$propChanged.on(obj, prop, action, {
        beforeChanged: true
    });

    return function () {
        self.$$propChanged.off(obj, prop, action);
    };
};

Component.prototype.$watch = function(prop, action){
    var self = this;

    this.$$propChanged.onVm(prop, action);

    return function(){
        self.$$propChanged.offVm(prop, action);
    };
};

Component.prototype.$watchProp = function(obj, prop, action){
    var self = this;

    this.$$propChanged.on(obj, prop, action);

    return function(){
        self.$$propChanged.off(obj, prop, action);
    };
};

Component.prototype.$removeChild = function (child) {
    var index = this.$$childComponents.indexOf(child);

    if (index !== -1) {
        this.$$childComponents.splice(index, 1);
        child.$$parentComponent = null;
    }
};

Component.prototype.$dispose = function (isFromVNode) {
    // remove virtual node first in case it triggers parent component destroy
    this.$unmount();

    if (utils.isFunction(this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }

    if (this.$$detectTimeout) {
        clearTimeout(this.$$detectTimeout);
    }

    this.$clearVNodes();
    this.$$propChanged.destroy();

    if (isFromVNode) {
        this.$$ownerVNode = null;
    }

    this.$$childComponents = null;
    this.$$childDirectives = null;
};

Component.prototype.$destroy = function () {
    this.$dispose();

    // destroy virtual node in the end because it may binds logic about destroy
    if (this.$$ownerVNode != null) {
        this.$$ownerVNode.dispose(true);
        this.$$ownerVNode = null;
    }
};