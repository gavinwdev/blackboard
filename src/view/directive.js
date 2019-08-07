import * as utils from '../utility/utils';
import {injector} from './injector';

export default function Directive() {
    this.output = false;
    this.$binding = null;
    this.$node = null;
}

Directive.prototype.$onCreating = function () {
    if (utils.isFunction(this.$def.onCreating)) {
        this.$def.onCreating.call(this);
    }
};

Directive.prototype.$onCreated = function () {
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

Directive.prototype.$bindNode = function (node) {
    this.$node = node;
};

Directive.prototype.$bindValue = function (binding) {
    this.$binding = binding;
};

Directive.prototype.$compile = function (options) {
    if (utils.isFunction(this.$def.onCompile)) {
        this.$def.onCompile.call(this, this.$node, options);
    }
};

Directive.prototype.$insert = function (ele, com) {
    if (utils.isFunction(this.$def.onInsert)) {
        this.$def.onInsert.call(this, ele, this.$binding, com);
    }
};

Directive.prototype.$update = function (ele, com) {
    if (utils.isFunction(this.$def.onUpdate)) {
        this.$def.onUpdate.call(this, ele, this.$binding, com);
    }
};

Directive.prototype.$destroy = function () {
    if (utils.isFunction(this.$def.onDestroy)) {
        this.$def.onDestroy.call(this);
    }
    this.$binding = null;
    this.$node = null;
};