import * as utils from '../utility/utils';

function Tracker() {
    this.unwatches = [];
}

Tracker.prototype.track = function (unwatch) {
    var self = this;
    this.unwatches.push(unwatch);
    return function () {
        unwatch.call(self);
        self.unwatches = self.unwatches.filter(function (item) {
            return item !== unwatch;
        });
    };
};

Tracker.prototype.destroy = function () {
    var self = this;
    this.unwatches.forEach(function (unwatch) {
        if (utils.isFunction(unwatch)) {
            unwatch.call(self);
        }
    });
};

export { Tracker }