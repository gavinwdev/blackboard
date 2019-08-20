import * as utils from '../utility/utils';
import { Messenger } from '../utility/message';
import { isMessenger } from '../utility';
import { Tracker } from './track';

function validate(obj, propKey, action, deep) {
    var tracker = new Tracker();
    watchProp(obj, propKey, obj[propKey], null, action, tracker, deep);
    return tracker;
}

function watch(obj, propKey, action, deep) {
    var tracker = new Tracker();
    watchProp(obj, propKey, obj[propKey], action, null, tracker, deep);
    return tracker;
}

function watchObject(obj, action, deep) {
    var tracker = new Tracker();
    utils.forEach(obj, function (key, value) {
        watchProp(obj, key, value, action, null, tracker, deep);
    });
    return tracker;
}

function watchCollection(arr, action, deep) {
    var tracker = new Tracker();
    watchArray(arr, action, null, tracker, deep);
    return tracker;
}

function extendAndWatchProps(instance, props) {
    var tracker = new Tracker();

    utils.forEach(props, function (key, value) {
        watchProp(instance, key, value, onchange, null, tracker, true);
    });

    function onchange() {
        instance.$detect();
    }

    return tracker;
}

function watchValue(value, onchange, onvalidate, tracker, deep) {
    if (utils.isArray(value)) {
        watchArray(value, onchange, onvalidate, tracker, deep);
    }
    else if (utils.isObject(value)) {
        watchProps(value, onchange, onvalidate, tracker, deep);
    }

    return value;
}

function watchProp(obj, key, value, onchange, onvalidate, tracker, deep) {
    var desc = Object.getOwnPropertyDescriptor(obj, key);

    if (desc && desc.set && desc.set.onchange && desc.set.onvalidate) {
        if (deep) {
            watchValue(value, onchange, onvalidate, tracker, deep);
        }
    }
    else {
        var setter = function (newValue) {
            if (setter.value !== newValue && setter.validate(newValue)) {
                setter.apply(newValue);
            }
        };

        var getter = function () {
            return setter.value;
        };

        setter.state = {valid: true, msgs: null};
        setter.value = deep ? watchValue(value, onchange, onvalidate, tracker, deep) : value;
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
            this.value = watchValue(newValue, onchange, onvalidate, tracker, deep);
            this.onchange.fire({
                obj: obj,
                key: key,
                newValue: newValue,
                oldValue: oldValue
            });
        };

        desc = {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        };

        Object.defineProperty(obj, key, desc);
    }

    if (utils.isFunction(onchange)) {
        desc.set.onchange.on(onchange);
        tracker.track(function () {
            desc.set.onchange.off(onchange);
        });
    }

    if (utils.isFunction(onvalidate)) {
        desc.set.onvalidate.on(onvalidate);
        tracker.track(function () {
            desc.set.onvalidate.off(onvalidate);
        });
    }
}

function watchProps(obj, onchange, onvalidate, tracker, deep) {
    utils.forEach(obj, function (key, value) {
        watchProp(obj, key, value, onchange, onvalidate, tracker, deep);
    });
}

function watchArray(arr, onchange, onvalidate, tracker, deep) {
    if (!isMessenger(arr.onCollectionChange)) {
        Object.setPrototypeOf(arr, interceptArray(arr, onchange, onvalidate, tracker, deep));
    }

    arr.onCollectionChange.on(onchange);

    tracker.track(function () {
        arr.onCollectionChange.off(onchange);
    });

    if (deep) {
        arr.forEach(function (item) {
            watchValue(item, onchange, onvalidate, tracker, deep);
        });
    }
}

function interceptArray(arr, onchange, onvalidate, tracker, deep) {
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
                if(deep){
                    return watchValue(item, onchange, onvalidate, tracker, deep);
                }
                return item;
            });
            var result = Array.prototype[name].apply(this, args);
            this.onCollectionChange.fire({
                obj: arr,
                key: name
            });
            return result;
        };
    }

    proto.empty = function () {
        this.length = 0;
        this.onCollectionChange.fire({
            obj: arr,
            key: name
        });
    };

    return proto;
}

export { extendAndWatchProps, validate, watch, watchCollection, watchObject };
