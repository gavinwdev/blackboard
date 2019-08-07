import * as utils from '../utility/utils';
import { Messenger } from '../utility/message';

var prefix = '$$';

function extendAndWatchProps(instance, props) {
    utils.forEach(props, function (key, value) {
        instance[prefix + key] = convertValue(value, onchange);

        Object.defineProperty(instance, key, {
            get: function () {
                return instance[prefix + key];
            },
            set: function (newValue) {
                if (instance[prefix + key] !== newValue) {
                    instance[prefix + key] = convertValue(newValue, onchange);
                    onchange();
                }
            }
        });
    });

    function onchange() {
        instance.$detect();
    }
}

var rxFlag = 'reactive';

function watchProps(obj, onchange) {
    if (obj[prefix + rxFlag]) {
        return;
    }

    utils.forEach(obj, function (key, value) {
        if (key.startsWith(prefix)) {
            return;
        }

        obj[prefix + key] = convertValue(value, onchange);

        Object.defineProperty(obj, key, {
            get: function () {
                return obj[prefix + key];
            },
            set: function (newValue) {
                if (obj[prefix + key] !== newValue) {
                    obj[prefix + key] = convertValue(newValue, onchange);
                    onchange.call(this, key);
                }
            }
        });
    });

    obj[prefix + rxFlag] = true;
}

function convertValue(value, onchange) {
    if (utils.isArray(value)) {
        var newValue = ReactiveArray.fromArray(value);
        newValue.onchange.on(function () {
            onchange.call(this);
        });
        return newValue;
    }

    if (utils.isObject(value)) {
        watchProps(value, onchange);
    }

    return value;
}

utils.inherit(ReactiveArray, Array);
function ReactiveArray() {
    ReactiveArray.super.apply(this, arguments);
}

ReactiveArray.fromArray = function (arr) {
    var newArr = new ReactiveArray();
    arr.forEach(function (item) {
        newArr.push(convertValue(item, function () {
            newArr.onchange.fire();
        }));
    });
    newArr.onchange.fire();
    return newArr;
};

ReactiveArray.prototype.onchange = new Messenger();

var proxyMethod = 'push pop shift unshift reverse sort splice',
    proxyMethods = proxyMethod.split(' ');

proxyMethods.forEach(function (key) {
    ReactiveArray.prototype[key] = makeProxyMethod(key);
});

function makeProxyMethod(name) {
    return function () {
        var self = this;
        var args = Array.prototype.slice.call(arguments, 0).map(function (item) {
            return convertValue(item, function () {
                self.onchange.fire();
            });
        });
        var result = Array.prototype[name].apply(this, args);
        this.onchange.fire();
        return result;
    }
}

export { extendAndWatchProps };