import * as utils from '../utility/utils';
import {injector} from './injector';

export default function Service() {

}

Service.prototype.$onInit = function () {
    var self = this;

    injector.injectServices(this);

    if (utils.isFunction(this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Service.prototype.$destroy = function () {
    if (utils.isFunction(this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }
};