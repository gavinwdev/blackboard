import * as utils from '../utility/utils';
import { Messenger } from '../utility/message';

var typeConst = {
    filter: 'filter',
    service: 'service',
    component: 'component',
    directive: 'directive'
};

var injector = new Injector();
var namePattern = /^[a-z_\$][\w\$-]*/i;

function Injector() {
    this.container = {};
    this.waitingToExtends = {};
    this.insContainer = {};
}

Injector.prototype.getMapping = function (contractType) {
    if (!this.container[contractType]) {
        this.container[contractType] = {};
    }
    return this.container[contractType];
};

Injector.prototype.getInstances = function (contractType) {
    if (!this.insContainer[contractType]) {
        this.insContainer[contractType] = [];
    }
    return this.insContainer[contractType];
};

Injector.prototype.register = function (contractType, contractName, constructor) {
    if (contractName.indexOf('.') !== -1) {
        throw new Error('Illegal character "."');
    }

    var mapping = this.getMapping(contractType);

    if (mapping[contractName] == null) {
        mapping[contractName] = [];
    }
    else {
        var matches = mapping[contractName].filter(function (item) {
            return item.prototype.$$def.namespace === constructor.prototype.$$def.namespace;
        });

        if (matches.length > 0) {
            throw new Error(contractName + ' is exist under namespace ' + matches[0].prototype.$$def.namespace);
        }
    }

    mapping[contractName].push(constructor);
};

Injector.prototype.registerComponent = function (contractName, constructor) {
    this.register(typeConst.component, contractName, constructor);
};

Injector.prototype.registerDirective = function (contractName, constructor) {
    this.register(typeConst.directive, contractName, constructor);
};

Injector.prototype.contains = function (contractType, contractName, ignoreCase) {
    var constructors, mapping = this.getMapping(contractType);
    var segments = contractName.split('.');
    var namespace = '';

    if (segments.length > 1) {
        contractName = segments.pop();
        namespace = segments.join('.');
    }

    if (ignoreCase) {
        constructors = utils.getProperty(mapping, contractName, true);
    }
    else {
        constructors = mapping[contractName];
    }

    if (constructors == null) {
        return false;
    }

    if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
            var def = item.prototype.$$def;
            return def.namespace && utils.lowercase(def.namespace) === utils.lowercase(namespace);
        });

        if (constructors.length === 0) {
            return false;
        }
    }

    return true;
};

Injector.prototype.containsComponent = function (contractName) {
    return this.contains(typeConst.component, contractName, true);
};

Injector.prototype.containsDirective = function (contractName) {
    return this.contains(typeConst.directive, contractName, true);
};

Injector.prototype.get = function (contractType, contractName, ignoreCase) {
    var constructors, mapping = this.getMapping(contractType);
    var segments = contractName.split('.');
    var namespace = '';

    if (segments.length > 1) {
        contractName = segments.pop();
        namespace = segments.join('.');
    }

    if (ignoreCase) {
        constructors = utils.getProperty(mapping, contractName, true);
    }
    else {
        constructors = mapping[contractName];
    }

    if (constructors == null) {
        throw new Error(contractType + ' ' + contractName + ' is not defined');
    }

    if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
            var def = item.prototype.$$def;
            return def.namespace && utils.lowercase(def.namespace) === utils.lowercase(namespace);
        });

        if (constructors.length === 0) {
            throw new Error(contractName + ' is not exist under namespace ' + namespace);
        }
    }

    if (constructors.length > 1) {
        var namespaces = constructors.map(function (item) {
            return item.prototype.$$def.namespace;
        });
        throw new Error('namespace ' + namespaces.join('|') + ' all have ' + contractName);
    }

    return constructors[0];
};

Injector.prototype.getComponent = function (contractName) {
    return this.get(typeConst.component, contractName);
};

Injector.prototype.getDirective = function (contractName) {
    return this.get(typeConst.directive, contractName);
};

Injector.prototype.getFilter = function (contractName) {
    return this.get(typeConst.filter, contractName);
};

Injector.prototype.getService = function (contractName) {
    return this.get(typeConst.service, contractName);
};

Injector.prototype.create = function (contractType, contractName) {
    var constructor = this.get(contractType, contractName), instance;

    switch (contractType) {
        case typeConst.component:
            instance = this.createComponent(constructor); break;
        case typeConst.directive:
            instance = this.createDirective(constructor); break;
        case typeConst.filter:
            instance = this.createFilter(constructor); break;
        case typeConst.service:
            instance = this.createService(constructor); break;
        default:
            instance = new constructor(); break;
    }

    return instance;
};

Injector.prototype.createComponent = function (constructor) {
    if (utils.isString(constructor)) {
        constructor = this.getComponent(constructor);
    }
    var instance = new constructor();
    instance.$onInit();
    return instance;
};

Injector.prototype.createDirective = function (constructor) {
    if (utils.isString(constructor)) {
        constructor = this.getDirective(constructor);
    }
    var instance = new constructor();
    instance.$onInit();
    return instance;
};

Injector.prototype.createFilter = function (constructor) {
    if (utils.isString(constructor)) {
        constructor = this.getFilter(constructor);
    }
    var instance = new constructor();
    instance.$onInit();
    return instance;
};

Injector.prototype.createService = function (constructor) {
    var instance, services = this.getInstances(typeConst.service);

    if (utils.isString(constructor)) {
        constructor = this.getService(constructor);
    }

    if (!constructor.prototype.$$def.nonShared) {
        var result = services.filter(function (item) {
            return item instanceof constructor;
        });

        if (result.length) {
            instance = result[0];
        }
    }

    if (!instance) {
        instance = new constructor();
        instance.$onInit();
        services.push(instance);
    }

    return instance;
};

Injector.prototype.service = function (contractName) {
    return this.createService(contractName);
};

Injector.prototype.getWaitingToExtends = function (contractType) {
    if (!this.waitingToExtends[contractType]) {
        this.waitingToExtends[contractType] = [];
    }
    return this.waitingToExtends[contractType];
};

Injector.prototype.setWaitingToExtends = function (contractType, value) {
    this.waitingToExtends[contractType] = value;
};

Injector.prototype.checkContractName = function (contractName, contractType) {
    if (namePattern.test(contractName)) {
        var constructorName = '';
        var segments = contractName.split('-');

        segments.forEach(function (segment) {
            constructorName += utils.uppercase(segment[0]) + segment.substring(1);
        });

        switch (contractType) {
            case typeConst.component:
                constructorName += 'Component';
                break;
            case typeConst.directive:
                constructorName += 'Directive';
                break;
            case typeConst.filter:
                constructorName += 'Filter';
                break;
            case typeConst.service:
                constructorName += 'Service';
                break;
        }

        return constructorName;
    }
    else {
        throw new Error(contractName + 'is not a valid name');
    }
};

Injector.prototype.buildConstructor = function makeConstructor(contractName, def, options) {
    var self = this,
        construct,
        constructorName = this.checkContractName(contractName, options.contractType),
        waitingToExtends = self.getWaitingToExtends(options.contractType);

    if (utils.isFunction(options.construct)) {
        construct = options.construct;
    }
    else {
        construct = function () {
            var self = this;
            if (utils.isFunction(constructor.super)) {
                constructor.super.call(this);
            }
            if (utils.isObject(this.$$def.props)) {
                utils.extend(true, this, utils.copy(true, this.$$def.props));
            }
            if (utils.isArray(this.$$def.events)) {
                this.$$def.events.forEach(function (e) {
                    self[e] = new Messenger();
                });
            }
        };
    }

    var constructor = new Function('construct', '"use strict";return function ' + constructorName + '(){construct.call(this);};')(construct);

    if (utils.isFunction(options.superClass)) {
        utils.inherit(constructor, options.superClass);
    }

    if(utils.isObject(def.superInstance) && (def.superInstance instanceof options.superClass)) {
        constructor.prototype = utils.object(def.superInstance);
    }

    constructor.prototype.$$key = contractName;

    // apply properties and methods
    if (utils.isString(def.extends)) {
        if (injector.contains(options.contractType, def.extends)) {
            var superOne = injector.get(options.contractType, def.extends);
            var def2 = extendDef(def, superOne);
            remainConstructor(contractName, def2, constructor);
        }
        else {
            waitingToExtends.push({
                superName: def.extends,
                callback: function (superOne) {
                    var def2 = extendDef(def, superOne);
                    remainConstructor(contractName, def2, constructor);
                }
            });
        }
    }
    else {
        remainConstructor(contractName, def, constructor);
    }

    function extendDef(def, superOne) {
        if (superOne.prototype.$$def && superOne.prototype.$$def.protected) {
            throw new Error(options.contractType + ': ' + def.extends + ' is protected, it is not allowed to extend!');
        }

        return utils.merge(true, utils.copy(true, superOne.prototype.$$def), def);
    }

    function remainConstructor(name, def, constructor) {
        constructor.prototype.$$def = def;

        // create methods
        if (utils.isObject(def.methods)) {
            utils.extend(constructor.prototype, def.methods);
        }

        // register component
        if(!def.local){
            injector.register(options.contractType, name, constructor);
        }

        // check if there is any component extends current component
        var waitingToExtends2 = [];
        waitingToExtends.forEach(function (item) {
            if (item.superName === name) {
                item.callback.call(null, constructor);
            }
            else {
                waitingToExtends2.push(item);
            }
        });
        self.setWaitingToExtends(options.contractType, waitingToExtends2);
    }

    return constructor;
};

Injector.prototype.injectServices = function (instance) {
    var self = this;

    if (utils.isObject(instance.$$def.inject)) {
        utils.forEach(instance.$$def.inject, function (key, value) {
            instance[key] = self.createService(value);
        });
    }
};

export { typeConst, Injector, injector };