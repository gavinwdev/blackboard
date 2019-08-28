import { isObject, isArray } from './utils';

function SetPropertyHandler(onchange, parentKey, deepProxy) {
    this.selfKey = '__self__';
    this.onchange = onchange;
    this.parentKey = parentKey;
    this.deepProxy = deepProxy;
}

SetPropertyHandler.prototype.get = function (target, key) {
    // a way to reutrn target object on its proxy object
    if(key === this.selfKey){
        return target;
    }

    var value = target[key];

    if (this.deepProxy && isObject(value)) {
        value = new Proxy(value, new SetPropertyHandler(this.onchange, this.parentKey + key + '.', this.deepProxy));
    }

    return value;
};

SetPropertyHandler.prototype.set = function (target, key, value) {
    if (this.deepProxy && isObject(value)) {
        var self = value[this.selfKey];

        // current value is a proxy object returned by this handler.
        if(self != null){
            value = self;
        }
    }

    var oldValue = target[key];

    // In case push value to array, the old value of length is the same as new value
    if(oldValue !== value || (isArray(target) && key === 'length')){
        target[key] = value;

        this.onchange.fire(this.parentKey + key, {
            oldValue: oldValue,
            newValue: value
        });
    }

    return true;
};

function GetPropertyHandler(props, parentKey, deepProxy) {
    this.props = props;
    this.parentKey = parentKey;
    this.deepProxy = deepProxy;
}

GetPropertyHandler.prototype.get = function (target, key) {
    var value = target[key];
    var prop = this.parentKey + key;

    if (this.deepProxy && isObject(value)) {
        value = new Proxy(value, new GetPropertyHandler(this.props, prop + '.', this.deepProxy));
    }

    if (this.props.indexOf(prop) === -1) {
        this.props.push(prop);
    }

    return value;
};

export { SetPropertyHandler, GetPropertyHandler }