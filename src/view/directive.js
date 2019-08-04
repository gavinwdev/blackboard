import * as utils from '../utility/utils';
import {injector} from './injector';

export default function Directive() {
    this.output = false;
    this.$binding = null;
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

Directive.prototype.$bind = function (binding) {
    this.$binding = binding;
};

Directive.prototype.$inserting = function (ele, com) {
    if (utils.isFunction(this.$def.onInserting)) {
        this.$def.onInserting.call(this, ele, this.$binding, com);
    }
};

Directive.prototype.$inserted = function (ele, com) {
    if (utils.isFunction(this.$def.onInserted)) {
        this.$def.onInserted.call(this, ele, this.$binding, com);
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
};