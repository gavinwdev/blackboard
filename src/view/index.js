import * as utils from '../utility/utils';
import { Messenger } from '../utility/message';
import { typeConst, injector } from './injector';
import Component from './component';
import Directive from './directive';
import Filter from './filter';
import Service from './service';
import { extendAndWatchProps } from './watch';

function namespace(ns) {
    return {
        component: function (name, def) {
            def.namespace = ns;
            return component(name, def);
        },
        directive: function (name, def) {
            if (utils.isFunction(def)) {
                def = {
                    onInsert: def,
                    onUpdate: def
                };
            }
            def.namespace = ns;
            return directive(name, def);
        },
        service: function (name, def) {
            def.namespace = ns;
            return service(name, def);
        },
        filter: function (name, def) {
            if (utils.isFunction(def)) {
                def = {
                    onExecute: def
                };
            }
            def.namespace = ns;
            return filter(name, def);
        }
    };
}

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

export { namespace, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService };