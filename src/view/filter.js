import * as utils from '../utility/utils';
import {injector} from './injector';

export default function Filter() {

}

Filter.prototype.$onInit = function () {
    var self = this;

    injector.injectServices(this);

    if (utils.isFunction(this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

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