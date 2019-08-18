import * as utils from '../utility/utils';
import {injector} from './injector';

export default function Filter() {

}

Filter.prototype.$execute = function (ele) {
    if (utils.isFunction(this.$$def.onExecute)) {
        return this.$$def.onExecute.apply(this, arguments);
    }
};

Filter.prototype.$destroy = function () {
    if (utils.isFunction(this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }
};

Filter.prototype.$onCreating = function () {
    if (utils.isFunction(this.$$def.onCreating)) {
        this.$$def.onCreating.call(this);
    }
};

Filter.prototype.$onCreated = function () {
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