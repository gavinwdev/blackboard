import * as utils from '../utility/utils';
import { Messenger } from '../utility/message';

function isAccessorProperty(obj, propKey) {
    var desc = Object.getOwnPropertyDescriptor(obj, propKey);
    return desc && (desc.get || desc.set);
}

function validate(obj, propKey, action) {
    var desc = Object.getOwnPropertyDescriptor(obj, propKey);

    if (desc && desc.set && desc.set.onvalidate) {
        desc.set.onvalidate.on(action);
        return function(){
            desc.set.onvalidate.off(action);
        };
    }
}

function watch(obj, propKey, action) {
    var desc = Object.getOwnPropertyDescriptor(obj, propKey);

    if (desc && desc.set && desc.set.onchange) {
        desc.set.onchange.on(action);
        return function(){
            desc.set.onchange.off(action);
        };
    }
}

function watchCollection(arr, action){
    if(utils.isArray(arr) && arr.onCollectionChange){
        arr.onCollectionChange.on(action);
        return function(){
            arr.onCollectionChange.off(action);
        };
    }
}

function extendAndWatchProps(instance, props) {
    var unwatches = [];

    utils.forEach(props, function (key, value) {
        if (isAccessorProperty(instance, key)) {
            collectUnwatch(validate(instance, key, onvalidate));
            collectUnwatch(watch(instance, key, onchange));
            watchValue(value, onchange, onvalidate, collectUnwatch);
            return;
        }

        var setter = function (newValue) {
            if (setter.value !== newValue && setter.validate(newValue)) {
                setter.apply(newValue);
            }
        };

        var getter = function () {
            return setter.value;
        };

        setter.state = { valid: true, msgs: null };
        setter.value = watchValue(value, onchange, onvalidate, collectUnwatch);
        setter.onvalidate = new Messenger();
        setter.onchange = new Messenger();
        setter.validate = function (newValue) {
            this.onvalidate.fire({
                state: this.state,
                obj: instance,
                key: key,
                newValue: newValue,
                oldValue: this.value
            });
            if (this.state.valid) {
                this.state.msgs = null;
            }
            return this.state.valid;
        };
        setter.apply = function (newValue) {
            var oldValue = this.value;
            this.value = watchValue(newValue, onchange, onvalidate, collectUnwatch);
            this.onchange.fire({
                obj: instance,
                key: key,
                newValue: newValue,
                oldValue: oldValue
            });
        };

        setter.onvalidate.on(onvalidate);
        setter.onchange.on(onchange);

        collectUnwatch(function(){
            setter.onvalidate.off(onvalidate);
        });
        collectUnwatch(function(){
            setter.onchange.off(onchange);
        });

        Object.defineProperty(instance, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    });

    function onchange(args) {
        instance.$detect();
    }

    function onvalidate(args) {

    }

    function collectUnwatch(unwatch){
        unwatches.push(unwatch)
    }

    return function(){
        unwatches.forEach(function(unwatch){
            if(utils.isFunction(unwatch)){
                unwatch.call(instance);
            }
        });
    };
}

function watchValue(value, onchange, onvalidate, collectUnwatch) {
    if (utils.isArray(value)) {
        watchArray(value, onchange, onvalidate, collectUnwatch);
    }
    else if (utils.isObject(value)) {
        watchProps(value, onchange, onvalidate, collectUnwatch);
    }

    return value;
}

function watchProps(obj, onchange, onvalidate, collectUnwatch) {
    utils.forEach(obj, function (key, value) {
        if (isAccessorProperty(obj, key)) {
            collectUnwatch(validate(obj, key, onvalidate));
            collectUnwatch(watch(obj, key, onchange));
            watchValue(value, onchange, onvalidate, collectUnwatch);
            return;
        }
        var setter = function (newValue) {
            if (setter.value !== newValue && setter.validate(newValue)) {
                setter.apply(newValue);
            }
        };

        var getter = function () {
            return setter.value;
        };

        setter.state = { valid: true, msgs: null };
        setter.value = watchValue(value, onchange, onvalidate, collectUnwatch);
        setter.onvalidate = new Messenger();
        setter.onchange = new Messenger();
        setter.validate = function (newValue) {
            this.onvalidate.fire({
                state: this.state,
                obj: obj,
                key: key,
                newValue: newValue,
                oldValue: this.value
            });
            if (this.state.valid) {
                this.state.msgs = null;
            }
            return this.state.valid;
        };
        setter.apply = function (newValue) {
            var oldValue = this.value;
            this.value = watchValue(newValue, onchange, onvalidate, collectUnwatch);
            this.onchange.fire({
                obj: obj,
                key: key,
                newValue: newValue,
                oldValue: oldValue
            });
        };

        setter.onvalidate.on(onvalidate);
        setter.onchange.on(onchange);

        collectUnwatch(function(){
            setter.onvalidate.off(onvalidate);
        });
        collectUnwatch(function(){
            setter.onchange.off(onchange);
        });

        Object.defineProperty(obj, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    });
}

function watchArray(arr, onchange, onvalidate, collectUnwatch) {
    Object.setPrototypeOf(arr, interceptArray(arr, onchange, onvalidate, collectUnwatch));

    arr.forEach(function (item, index) {
        watchValue(item, onchange, onvalidate, collectUnwatch);
    });
}

function interceptArray(arr, onchange, onvalidate, collectUnwatch) {
    var proto = utils.object(Array.prototype),
        proxyMethod = 'push pop shift unshift reverse sort splice',
        proxyMethods = proxyMethod.split(' ');

    proxyMethods.forEach(function (key) {
        proto[key] = makeProxyMethod(key);
    });

    proto.onCollectionChange = new Messenger();

    function makeProxyMethod(name) {
        return function () {
            var args = Array.prototype.slice.call(arguments, 0).map(function (item) {
                return watchValue(item, onchange, onvalidate, collectUnwatch);
            });
            var result = Array.prototype[name].apply(this, args);
            this.onCollectionChange.fire({
                obj: arr,
                key: name
            });
            return result;
        };
    }

    proto.onCollectionChange.on(onchange);

    return proto;
}

export { extendAndWatchProps, validate, watch, watchCollection };
