import { isObject, isArray } from './utils';
import { Messenger } from './message';

var propChangingMsg = new Messenger();
var propChangedMsg = new Messenger();

function SetPropertyHandler(onchange, parentKey, deepProxy) {
    this.selfKey = '__self__';
    this.onchange = onchange;
    this.parentKey = parentKey;
    this.deepProxy = deepProxy;
}

SetPropertyHandler.prototype.get = function (target, key) {
    if(this.selfKey === key){
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

        // value is a proxy return by this handler
        if (self != null) {
            value = self;
        }
    }

    var oldValue = target[key];

    if (oldValue !== value || (isArray(target) && key === 'length')) {
        var validation = {
            isValid: true,
            oldValue: oldValue,
            newValue: value
        };

        this.onchange.fireVmChanging(this.parentKey + key, validation);
        propChangingMsg.fire({
            target: target,
            key: key,
            data: validation
        });

        if (validation.isValid) {
            target[key] = value;

            this.onchange.fireVmChanged(this.parentKey + key, {
                oldValue: oldValue,
                newValue: value
            });
            propChangedMsg.fire({
                target: target,
                key: key,
                data: {
                    oldValue: oldValue,
                    newValue: value
                }
            });
        }
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

export { SetPropertyHandler, GetPropertyHandler, propChangingMsg, propChangedMsg }