import * as utils from '../utility/utils';
import { Messenger } from '../utility/message';
import { typeConst, injector } from './injector';
import Component from './component';
import Directive from './directive';
import Filter from './filter';
import Service from './service';
import { extendAndWatchProps } from './watch';

function component(name, def) {
    return injector.buildConstructor(name, def, {
        contractType: typeConst.component,
        superClass: Component,
        getConstructor: function () {
            return function constructor() {
                var self = this;
                this.$onCreating();
                constructor.super.call(this);
                // create properties
                if (utils.isObject(this.$def.props)) {
                    extendAndWatchProps(self, utils.copy(true, this.$def.props));
                }
                if (utils.isArray(this.$def.events)) {
                    this.$def.events.forEach(function (e) {
                        self[e] = new Messenger();
                    });
                }
            };
        }
    });
}

function directive(name, def) {
    if (utils.isFunction(def)) {
        def = {
            onInsert: def,
            onUpdate: def
        };
    }

    return injector.buildConstructor(name, def, {
        contractType: typeConst.directive,
        superClass: Directive
    });
}

function filter(name, def) {
    if (utils.isFunction(def)) {
        def = {
            onExecute: def
        };
    }

    return injector.buildConstructor(name, def, {
        contractType: typeConst.filter,
        superClass: Filter
    });
}

function service(name, def) {
    return injector.buildConstructor(name, def, {
        contractType: typeConst.service,
        superClass: Service
    });
}

function isComponent(obj) {
    return obj instanceof Component;
}

function isDirective(obj) {
    return obj instanceof Directive;
}

function isFilter(obj) {
    return obj instanceof Filter;
}

function isService(obj) {
    return obj instanceof Service;
}

function conflict(fn) {
    injector.onConflict.register(fn);
}

export { injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService, conflict };