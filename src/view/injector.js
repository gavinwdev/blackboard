import * as utils from '../utility/utils';
import { Messenger } from '../utility/message';

var typeConst = {
    filter: 'filter',
    service: 'service',
    component: 'component',
    directive: 'directive'
};

var injector = new Injector();

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
    var mapping = this.getMapping(contractType);

    if (mapping[contractName] != null) {
        throw new Error(contractType + ' ' + contractName + ' is already existed');
    }

    mapping[contractName] = constructor;
};

Injector.prototype.registerComponent = function (contractName, constructor) {
    this.register(typeConst.component, contractName, constructor);
};

Injector.prototype.registerDirective = function (contractName, constructor) {
    this.register(typeConst.directive, contractName, constructor);
};

Injector.prototype.contains = function (contractType, contractName, ignoreCase) {
    var mapping = this.getMapping(contractType);

    if (ignoreCase) {
        return utils.hasProperty(mapping, contractName, ignoreCase);
    }

    return mapping[contractName] != null;
};

Injector.prototype.containsComponent = function (contractName) {
    return this.contains(typeConst.component, contractName, true)
};

Injector.prototype.containsDirective = function (contractName) {
    return this.contains(typeConst.directive, contractName, true)
};

Injector.prototype.get = function (contractType, contractName, ignoreCase) {
    var constructor, mapping = this.getMapping(contractType);

    if (ignoreCase) {
        constructor = utils.getProperty(mapping, contractName, true);
    }
    else {
        constructor = mapping[contractName]
    }

    if (constructor == null) {
        throw new Error(contractType + ' ' + contractName + ' is not defined');
    }

    return constructor;
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
        case contractType.component:
            instance = this.createComponent(constructor); break;
        case contractType.directive:
            instance = this.createDirective(constructor); break;
        case contractType.filter:
            instance = this.createFilter(constructor); break;
        case contractType.service:
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
    instance.$onCreated();
    return instance;
};

Injector.prototype.createDirective = function (constructor) {
    if (utils.isString(constructor)) {
        constructor = this.getDirective(constructor);
    }
    var instance = new constructor();
    instance.$onCreated();
    return instance;
};

Injector.prototype.createFilter = function (constructor) {
    if (utils.isString(constructor)) {
        constructor = this.getFilter(constructor);
    }
    var instance = new constructor();
    instance.$onCreated();
    return instance;
};

Injector.prototype.createService = function (constructor) {
    var instance, services = this.getInstances(typeConst.service);

    if (utils.isString(constructor)) {
        constructor = this.getService(constructor);
    }

    if (!constructor.prototype.$def.nonShared) {
        var result = services.filter(function (item) {
            return item instanceof constructor;
        });

        if (result.length) {
            instance = result[0];
        }
    }

    if (!instance) {
        instance = new constructor();
        instance.$onCreated();
        services.push(instance);
    }

    return instance;
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

Injector.prototype.buildConstructor = function makeConstructor(contractName, def, options) {
    var self = this, constructor, waitingToExtends = self.getWaitingToExtends(options.contractType);

    if (utils.isFunction(options.getConstructor)) {
        constructor = options.getConstructor();
    }
    else {
        constructor = function constructor() {
            var self = this;
            this.$onCreating();
            if (utils.isFunction(constructor.super)) {
                constructor.super.call(this);
            }
            if (utils.isObject(this.$def.props)) {
                utils.extend(this, this.$def.props);
            }
            if (utils.isArray(this.$def.events)) {
                this.$def.events.forEach(function (e) {
                    self[e] = new Messenger();
                });
            }
        };
    }

    if (utils.isFunction(options.superClass)) {
        utils.inherit(constructor, options.superClass);
    }

    constructor.prototype.$key = contractName;

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
        if (superOne.prototype.$def && superOne.prototype.$def.protected) {
            throw new Error(options.contractType + ': ' + def.extends + ' is protected, it is not allowed to extend!');
        }

        return utils.merge(true, utils.copy(superOne.prototype.$def), def);
    }

    function remainConstructor(name, def, constructor) {
        constructor.prototype.$def = def;

        // create methods
        if (utils.isObject(def.methods)) {
            utils.extend(constructor.prototype, def.methods);
        }

        // register component
        injector.register(options.contractType, name, constructor);

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

export { typeConst, Injector, injector };