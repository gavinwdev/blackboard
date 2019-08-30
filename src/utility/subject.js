import * as utils from './utils';

function PropertyChangeSubject(parentSubject){
    this.plainMap = new Map();
    this.regexMap = new Map();
    this.parentSubject = parentSubject;
}

PropertyChangeSubject.prototype.on = function(prop, action, options) {
    var map = utils.isRegExp(prop) ? this.regexMap : this.plainMap;

    if (!map.has(prop)) {
        map.set(prop, []);
    }

    if (options) {
        action.beforeChanged = options.beforeChanged;
    }

    map.get(prop).push(action);
};

PropertyChangeSubject.prototype.off = function(prop, action) {
    var map = utils.isRegExp(prop) ? this.regexMap : this.plainMap;

    if (!map.has(prop)) {
        return;
    }

    var actions = map.get(prop);
    var index = actions.indexOf(action);

    if (index !== -1) {
        actions.splice(index, 1);
    }
};

PropertyChangeSubject.prototype.fireChanged = function(prop, args) {
    var self = this;

    if (this.plainMap.has(prop)) {
        this.plainMap.get(prop).forEach(function (action) {
            if(!action.beforeChanged){
                action.call(self, prop, args);
            }
        });
    }

    this.regexMap.forEach(function (actions, pattern) {
        if (pattern.test(prop)) {
            actions.forEach(function (action) {
                if(!action.beforeChanged){
                    action.call(self, prop, args);
                }
            });
        }
    });

    if (this.parentSubject != null) {
        this.parentSubject.fireChanged(prop, args);
    }
};

PropertyChangeSubject.prototype.fireChanging = function(prop, args) {
    var self = this;

    if (this.plainMap.has(prop)) {
        this.plainMap.get(prop).forEach(function (action) {
            if(action.beforeChanged){
                action.call(self, prop, args);
            }
        });
    }

    this.regexMap.forEach(function (actions, pattern) {
        if (pattern.test(prop)) {
            actions.forEach(function (action) {
                if(action.beforeChanged){
                    action.call(self, prop, args);
                }
            });
        }
    });

    if (this.parentSubject != null) {
        this.parentSubject.fireChanging(prop, args);
    }
};

PropertyChangeSubject.prototype.destroy =  function() {
    this.plainMap.clear();
    this.regexMap.clear();
    this.parentSubject = null;
};

export { PropertyChangeSubject };