import * as utils from './utils';

function PropertyChangeSubject(parentSubject){
    this.plainDict = {};
    this.regexDict = {};
    this.parentSubject = parentSubject;
}

PropertyChangeSubject.prototype.on = function(prop, action, isRegex) {
    var target = isRegex ? this.regexDict : this.plainDict;

    if (target[prop] == null) {
        target[prop] = [];
    }

    target[prop].push(action);
};

PropertyChangeSubject.prototype.off = function(prop, action, isRegex){
    var target = isRegex ? this.regexDict : this.plainDict;

    if(target[prop] == null){
        return;
    }

    target[prop] = target[prop].filter(function(item){
        return item !== action;
    });
};

PropertyChangeSubject.prototype.fire = function(prop, args) {
    var self = this;

    if (this.plainDict[prop] != null) {
        this.plainDict[prop].forEach(function (action) {
            action.call(self, prop, args);
        });
    }

    utils.forEach(this.regexDict, function (pattern, actions) {
        if (new RegExp(pattern).test(prop)) {
            actions.forEach(function (action) {
                action.call(self, prop, args);
            });
        }
    });

    if (this.parentSubject != null) {
        this.parentSubject.fire(prop, args);
    }
};

PropertyChangeSubject.prototype.destroy =  function() {
    this.plainDict = null;
    this.regexDict = null;
    this.parentSubject = null;
};

export { PropertyChangeSubject };