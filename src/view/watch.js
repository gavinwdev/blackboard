import * as utils from '../utility/utils';
import { Messenger } from '../utility/message';

var prefix = '$$';

function extendAndWatchProps(instance, props) {
    utils.forEach(props, function (key, value) {
        instance[prefix + key] = watchValue(value, onchange, onvalidate);

        Object.defineProperty(instance, key, {
            get: function () {
                return instance[prefix + key];
            },
            set: function (newValue) {
                var oldValue = instance[prefix + key];
                if (oldValue !== newValue && onvalidate.call(this, instance, key, newValue, oldValue)) {
                    instance[prefix + key] = watchValue(newValue, onchange, onvalidate, (key + '.'));
                    utils.setDirty(instance);
                    onchange.call(this, instance, key, newValue, oldValue);
                }
            },
            enumerable: true,
            configurable: true
        });
    });

    function onchange(obj, propkey, newValue, oldValue, entirePropKey) {
        instance.$detect();
    }

    function onvalidate(obj, propkey, newValue, oldValue, entirePropKey) {
        return true;
    }
}

function watchValue(value, onchange, onvalidate, propKey) {
    if (utils.isArray(value)) {
        watchArray(value, onchange, onvalidate, propKey);
    }

    if (utils.isObject(value)) {
        watchProps(value, onchange, onvalidate, propKey);
    }

    return value;
}

function watchProps(obj, onchange, onvalidate, propKey) {
    utils.forEach(obj, function (key, value) {
        if (key.startsWith(prefix)) {
            return;
        }

        obj[prefix + key] = watchValue(value, onchange, onvalidate, (propKey + key + '.'));

        Object.defineProperty(obj, key, {
            get: function () {
                return obj[prefix + key];
            },
            set: function (newValue) {
                var oldValue = obj[prefix + key];
                if (oldValue !== newValue && onvalidate.call(this, obj, key, newValue, oldValue, propKey + key)) {
                    obj[prefix + key] = watchValue(newValue, onchange, onvalidate, (propKey + key + '.'));
                    utils.setDirty(obj);
                    onchange.call(this, obj, key, newValue, oldValue, propKey + key);
                }
            },
            enumerable: true,
            configurable: true
        });
    });
}

function watchArray(arr, onchange, onvalidate) {
    Object.setPrototypeOf(arr, interceptArray(arr, onchange, onvalidate));

    arr.forEach(function (item) {
        watchValue(item, onchange, onvalidate);
    });
}

function interceptArray(arr, onchange, onvalidate) {
    var proto = utils.object(Array.prototype),
        proxyMethod = 'push pop shift unshift reverse sort splice',
        proxyMethods = proxyMethod.split(' ');

    proxyMethods.forEach(function (key) {
        proto[key] = makeProxyMethod(key);
    });

    function makeProxyMethod(name) {
        return function () {
            var args = Array.prototype.slice.call(arguments, 0).map(function (item) {
                return watchValue(item, onchange, onvalidate);
            });
            var result = Array.prototype[name].apply(this, args);
            utils.setDirty(arr);
            onchange.call(this, arr, name, arr, arr);
            return result;
        };
    }

    return proto;
}

export { extendAndWatchProps };
