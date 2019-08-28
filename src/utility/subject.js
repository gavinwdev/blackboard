import * as utils from './utils';

function PropertyChangeSubject(parentSubject) {
    this.plainMap = new Map();
    this.regexMap = new Map();
    this.parentSubject = parentSubject;
}

PropertyChangeSubject.prototype.on = function (prop, action) {
    var target = utils.isRegExp(prop) ? this.regexMap : this.plainMap;

    if (!target.has(prop)) {
        target.set(prop, []);
    }

    target.get(prop).push(action);
};

PropertyChangeSubject.prototype.off = function (prop, action) {
    var target = utils.isRegExp(prop) ? this.regexMap : this.plainMap;

    if (!target.has(prop)) {
        return;
    }

    var actions = target.get(prop),
        index = actions.indexOf(action);

    if (index !== -1) {
        actions.splice(index, 1);
    }
};

PropertyChangeSubject.prototype.fire = function (prop, args) {
    var self = this;

    if (this.plainMap.has(prop)) {
        this.plainMap.get(prop).forEach(function (action) {
            action.call(self, prop, args);
        });
    }

    this.regexMap.forEach(function (actions, pattern) {
        if (pattern.test(prop)) {
            actions.forEach(function (action) {
                action.call(self, prop, args);
            });
        }
    });

    if (this.parentSubject != null) {
        this.parentSubject.fire(prop, args);
    }
};

PropertyChangeSubject.prototype.destroy = function () {
    this.plainMap.clear();
    this.regexMap.clear();
    this.parentSubject = null;
};

export { PropertyChangeSubject };