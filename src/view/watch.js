import * as utils from '../utility/utils';

function extendAndWatchProps(instance, props) {
    var prefix = '$$';
    utils.forEach(props, function (key, value) {
        instance[prefix + key] = value;

        Object.defineProperty(instance, key, {
            get: function () {
                return instance[prefix + key];
            },
            set: function (newValue) {
                if (instance[prefix + key] !== newValue) {
                    instance.$onUpdating(key, newValue);
                    instance[prefix + key] = newValue;
                    if (!instance.$$timeout)
                        instance.$$timeout = setTimeout(function () {
                            instance.$detect();
                            instance.$$timeout = null;
                            instance.$onUpdated();
                        });
                }
            }
        });
    });
}

export { extendAndWatchProps };