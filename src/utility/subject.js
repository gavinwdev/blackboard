import * as utils from './utils';
import { propChangingMsg, propChangedMsg } from './handler';

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

function ObjectPropertyChangeSubject(parentVmPropertyChange) {
    this.vmPropertyChange = new PropertyChangeSubject(parentVmPropertyChange);
    this.objMap = new Map();

    var self = this,
        onchanging = function (args) {
            var obj = args.target, prop = args.key;
            self.fireChanging(obj, prop, args.data);
        },
        onchanged = function (args) {
            var obj = args.target, prop = args.key;
            self.fireChanged(obj, prop, args.data);
        };

    propChangingMsg.on(onchanging);
    propChangedMsg.on(onchanged);

    this.offChange = function () {
        propChangingMsg.off(onchanging);
        propChangedMsg.off(onchanged);
    };
}

ObjectPropertyChangeSubject.prototype.getVmPropertyChangeSubject = function () {
    return this.vmPropertyChange;
};

ObjectPropertyChangeSubject.prototype.setParentVmPropertyChangeSubject = function (value) {
    this.vmPropertyChange.parentSubject = value;
};

ObjectPropertyChangeSubject.prototype.on = function (obj, prop, action, options) {
    if (!this.objMap.has(obj)) {
        this.objMap.set(obj, new PropertyChangeSubject());
    }

    this.objMap.get(obj).on(prop, action, options);
};

ObjectPropertyChangeSubject.prototype.onVm = function (prop, action, options) {
    this.vmPropertyChange.on(prop, action, options);
};

ObjectPropertyChangeSubject.prototype.off = function (obj, prop, action) {
    if (this.objMap.has(obj)) {
        this.objMap.get(obj).off(prop, action);
    }
};

ObjectPropertyChangeSubject.prototype.offVm = function (prop, action) {
    this.vmPropertyChange.off(prop, action, options);
};

ObjectPropertyChangeSubject.prototype.fireChanged = function (obj, prop, args) {
    if (this.objMap.has(obj)) {
        this.objMap.get(obj).fireChanged(prop, args);
    }
};

ObjectPropertyChangeSubject.prototype.fireChanging = function(obj, prop, args) {
    if (this.objMap.has(obj)) {
        this.objMap.get(obj).fireChanging(prop, args);
    }
};

ObjectPropertyChangeSubject.prototype.fireVmChanged = function (prop, args) {
    this.vmPropertyChange.fireChanged(prop, args);
};

ObjectPropertyChangeSubject.prototype.fireVmChanging = function(prop, args) {
    this.vmPropertyChange.fireChanging(prop, args);
};

ObjectPropertyChangeSubject.prototype.destroy = function () {
    this.offChange.call(this);
    this.objMap.forEach(function (item) {
        item.destroy();
    });
    this.vmPropertyChange.destroy();
    this.objMap = null;
    this.vmPropertyChange = null;
};

export { PropertyChangeSubject, ObjectPropertyChangeSubject };