(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else if(typeof exports === 'object')
		exports["blackboard"] = factory(require("axios"));
	else
		root["blackboard"] = factory(root["axios"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_axios__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isMessenger, namespace, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService, bootstrap, compile, compute, parse, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isBlankObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isSame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["insertNodeAfter"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["isFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return _view__WEBPACK_IMPORTED_MODULE_1__["isService"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/parser/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["compute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["parse"]; });

/* harmony import */ var _inner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inner */ "./src/inner/index.js");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "./src/inner/directives.js":
/*!*********************************!*\
  !*** ./src/inner/directives.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");




var spaceName = 'blackboard';

function makeAttrSetter(attrName) {
    return function (ele, binding) {
        if (binding.compute()) {
            if (!ele.hasAttribute(attrName)) {
                ele.setAttribute(attrName, '');
            }
        }
        else {
            if (ele.hasAttribute(attrName)) {
                ele.removeAttribute(attrName);
            }
        }
    };
}

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-selected', makeAttrSetter('selected'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-disabled', makeAttrSetter('disabled'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-checked', makeAttrSetter('checked'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-readonly', makeAttrSetter('readonly'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-style', function (ele, binding) {
    var value = binding.compute();

    if (!value) {
        ele.removeAttribute('style');
    }

    if (_utility__WEBPACK_IMPORTED_MODULE_2__["isString"](value)) {
        ele.style = value;
    }
    else if (_utility__WEBPACK_IMPORTED_MODULE_2__["isObject"](value)) {
        _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (key, value) {
            ele.style[key] = value;
        });
        binding.scope.$watchObject(value, function () {
            _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (key, value) {
                ele.style[key] = value;
            });
        });
    }
    else {
        throw new Error('Parameter of b-style should be string or object');
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-show', function (ele, binding) {
    ele.style.display = binding.compute() ? 'initial' : 'none';
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-hide', function (el, binding) {
    el.style.display = binding.compute() ? 'none' : 'initial';
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-if', {
    props: {
        comment: null
    },
    onInsert: function (ele, binding) {
        this.comment = document.createComment('b-if');
        if (!binding.compute()) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
    },
    onUpdate: function (ele, binding) {
        if (binding.compute()) {
            if (ele.parentNode == null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
            }
        }
    },
    onDestroy: function () {
        this.comment = null;
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-switch', {
    props: {
        value: null
    },
    onInsert: function (ele, binding) {
        this.value = binding.compute();
    },
    onUpdate: function (ele, binding) {
        this.value = binding.compute();
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-switch-default', {
    props: {
        attrNode: null,
        comment: null
    },
    methods: {
        isMatch: function () {
            var match = true, vEle = this.attrNode.ownerVElement;

            while (vEle.previousSibling != null && match){
                var whenDir = vEle.previousSibling.getDirective('b-switch-when');

                vEle = vEle.previousSibling;

                if(!whenDir.length) {
                    continue;
                }

                match = !whenDir[0].isMatch;
            }

            return match;
        }
    },
    onCompile: function (attrNode, options) {
        this.attrNode = attrNode;
    },
    onInsert: function (ele, binding) {
        this.comment = document.createComment('b-switch-default');

        if (!this.isMatch()) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
    },
    onDetect: function (ele, binding) {
        if (this.isMatch()) {
            if (ele.parentNode == null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
            }
        }
    },
    onDestroy: function () {
        this.attrNode = null;
        this.comment = null;
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-switch-when', {
    props: {
        isMatch: false,
        attrNode: null,
        comment: null
    },
    methods: {
        updateIsMatch: function (ele, binding) {
            var vEle = this.attrNode.ownerVElement;
            var switchDir = vEle.parentNode.getDirective('b-switch');

            if(!switchDir.length){
                throw new Error('Require b-switch directive');
            }

            this.isMatch = binding.compute() === switchDir[0].value;
        }
    },
    onCompile: function (attrNode, options) {
        this.attrNode = attrNode;
    },
    onInsert: function (ele, binding) {
        this.comment = document.createComment('b-switch-when');
        this.updateIsMatch(ele, binding);

        if (!this.isMatch) {
            _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
        }
    },
    onDetect: function (ele, binding) {
        this.updateIsMatch(ele, binding);

        if (this.isMatch) {
            if (ele.parentNode == null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](this.comment, ele);
            }
        }
        else {
            if (ele.parentNode != null) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replaceNode"](ele, this.comment);
            }
        }
    },
    onDestroy: function () {
        this.attrNode = null;
        this.comment = null;
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-bind', function(ele, binding){
    ele.innerText = binding.compute();
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-model', {
    methods: {
        update: function (ele, binding, com) {
            if (com == null) {
                ele.value = binding.compute();
            }
            else {
                com.value = binding.compute();
            }
        }
    },
    onInsert: function (ele, binding, com) {
        this.update(ele, binding, com);

        if (com == null) {
            ele.addEventListener('change', function (e) {
                binding.scope.$setAttr(binding.text, e.target.value);
            });
        }
        else {
            if (_utility__WEBPACK_IMPORTED_MODULE_2__["isMessenger"](com.change)) {
                com.change.on(function (e, args) {
                    binding.scope.$setAttr(binding.text, args.newvalue);
                });
            }
            throw new Error('Compoent ' + com.$$key + 'must define [change] event');
        }
    },
    onUpdate: function (ele, binding, com) {
        this.update(ele, binding, com);
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-repeat', {
    onCompile: function (attrNode, options) {
        var arg = attrNode.nodeValue;
        var eleNode = attrNode.ownerVElement;
        var pattern = /^(\w+)\s+in\s+(\w+)$/i;
        var result = pattern.exec(arg);

        if (result == null) {
            throw new Error("b-repeat: parameter is not valid");
        }

        var itemExp = result[1];
        var itemsExp = result[2];

        eleNode.removeAttribute(attrNode);

        var currentScope, currentItems, start, end, ReeatItem, repeatItems = [];
        var tpl = eleNode.getOuterTpl();
        var custom = eleNode.createCustom('b-repeat', function (scope) {
            var fragment = document.createDocumentFragment();
            currentScope = scope;
            ReeatItem = createRepeatItem();
            setCurrentItems(Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compute"])(itemsExp, currentScope));
            start = document.createComment('start: b-repeat');
            end = document.createComment('end: b-repeat');
            fragment.appendChild(start);
            fragment.appendChild(end);
            return fragment;
        });

        eleNode.parentNode.replaceChild(eleNode, custom);
        eleNode.destroy();

        custom.onInsert = function () {
            build(currentItems);
        };

        custom.onDetect = function () {
            var items = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compute"])(itemsExp, currentScope);

            if (currentItems !== items) {
                setCurrentItems(items);
                build(currentItems);
            }
            else {
                repeatItems.forEach(function (childScope) {
                    childScope.$detect();
                });
            }
        };

        custom.onDestroy = function () {
            repeatItems.forEach(function (childScope) {
                childScope.$destroy();
            });
            repeatItems = null;
            eleNode = null;
            currentScope = null;
            currentItems = null;
            start = null;
            end = null;
            custom = null;
        };

        function createRepeatItem(){
            var repeatItemConfig = {
                local: true,
                template: tpl,
                props: {},
                superInstance: currentScope
            };

            repeatItemConfig.props[itemExp] = null;

            return Object(_view__WEBPACK_IMPORTED_MODULE_0__["component"])('b-repeat-item', repeatItemConfig);
        }

        function setCurrentItems(value) {
            if (_utility__WEBPACK_IMPORTED_MODULE_2__["isArray"](value)) {
                currentItems = value;
            }
            else {
                currentItems = [];
            }

            currentScope.$watch(itemsExp + '.length', function () {
                build(currentItems);
            });
        }

        function build(items) {
            var fragment = document.createDocumentFragment();
            var newRepeatItems = [];

            _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](items, function (key, item) {
                var repeatItem = getRepeatItem(item);

                if (repeatItem == null) {
                    repeatItem = _view__WEBPACK_IMPORTED_MODULE_0__["injector"].createComponent(ReeatItem);
                    repeatItem[itemExp] = item;
                }

                fragment.appendChild(repeatItem.$render(true));
                newRepeatItems.push(repeatItem);
            });

            if (repeatItems.length > 0) {
                repeatItems.forEach(function (repeatItem) {
                    repeatItem.$destroy();
                });
            }

            repeatItems = newRepeatItems;
            _utility__WEBPACK_IMPORTED_MODULE_2__["removeNodeBetween"](start, end);
            end.parentNode.insertBefore(fragment, end);
        }

        function getRepeatItem(dataItem){
            var filters = repeatItems.filter(function(item){
                return item[itemExp] === dataItem;
            });

            if(filters.length === 0){
                return null;
            }

            var target = filters[0];

            repeatItems = repeatItems.filter(function (item) {
                return item[itemExp] !== dataItem;
            });

            return target;
        }
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).directive('b-embed', {
    onCompile: function (attrNode, options) {
        var embedTpl = options.getEmbedTpl();
        if(embedTpl){
            attrNode.ownerVElement.setInnerTpl(embedTpl);
        }
    }
});

/***/ }),

/***/ "./src/inner/index.js":
/*!****************************!*\
  !*** ./src/inner/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/inner/services.js");
/* empty/unused harmony star reexport *//* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ "./src/inner/directives.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/inner/services.js":
/*!*******************************!*\
  !*** ./src/inner/services.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



var spaceName = 'blackboard';

Object(_view__WEBPACK_IMPORTED_MODULE_0__["namespace"])(spaceName).service('$templateCache', {
    props: {
        tplCache: {},
        promiseCache: {}
    },
    methods: {
        getTplByUrl: function (url) {
            var self = this;

            if (this.tplCache[url]) {
                return new Promise(function (resolve) {
                    resolve(self.tplCache[url]);
                });
            }

            if (!this.promiseCache[url]) {
                this.promiseCache[url] = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(function (res) {
                    self.promiseCache[url] = null;
                    self.tplCache[url] = res.data || '';
                    return self.tplCache[url];
                });
            }

            return this.promiseCache[url];
        }
    }
});

/***/ }),

/***/ "./src/parser/html-lexer.js":
/*!**********************************!*\
  !*** ./src/parser/html-lexer.js ***!
  \**********************************/
/*! exports provided: HtmlLexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLexer", function() { return HtmlLexer; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer */ "./src/parser/lexer.js");



_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlLexer, _lexer__WEBPACK_IMPORTED_MODULE_1__["Lexer"]);
function HtmlLexer(options) {
    HtmlLexer.super.call(this, options);
}

HtmlLexer.prototype.isValidIdentifierStart = function (ch) {
    return ('a' <= ch && ch <= 'z' ||
        'A' <= ch && ch <= 'Z' ||
        '_' === ch || ch === '$' ||
        ch === '@' || ch === ':' || ch === '*');
};

HtmlLexer.prototype.isValidIdentifierContinue = function (ch, cp) {
    return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch) || ch === '-' || ch === '.';
};

HtmlLexer.prototype.expectString = function (str) {
    var num = str.length;
    return (this.index + num <= this.text.length) ? (str === this.text.substr(this.index, num)) : false;
};

// html comment "<!--comment-->"
HtmlLexer.prototype.readComment = function (begin, end) {
    var start = this.index;
    this.index += begin.length;
    var string = '';
    var rawString = begin;
    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        rawString += ch;
        if (this.expectString(end)) {
            rawString += end;
            this.index += end.length;
            this.tokens.push({
                index: start,
                text: rawString,
                comment: true,
                value: string
            });
            return;
        } else {
            string += ch;
        }
        this.index++;
    }
    this.throwError('Unterminated comment', start);
};

// html text
HtmlLexer.prototype.readText = function () {
    var start = this.index;
    var string = '';
    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        var ch2 = this.peek();
        if ((ch === '<' && (this.isIdentifierStart(ch2)) || ch2 === '/') || this.expectString('<!--')) {
            break;
        }
        string += ch;
        this.index++;
    }
    this.tokens.push({
        index: start,
        text: string,
        textTag: true
    });
};

// html tag
HtmlLexer.prototype.readTag = function (begin, end, closing, doctype) {
    this.tokens.push({ index: this.index, text: begin, tag: true, closing: closing, begin: true, doctype: doctype });
    this.index += begin.length;
    this.readIdent();

    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);

        if (!closing) {
            var ch2 = this.peek();
            var str = ch + ch2;
            if (str === '/' + end) {
                this.tokens.push({ index: this.index, text: str, tag: true, closing: true, end: true });
                this.index += str.length;
                break;
            }
        }

        if (ch === end) {
            this.tokens.push({
                index: this.index,
                text: end,
                tag: true,
                closing: !!doctype ? true : closing,
                end: true
            });
            this.index += end.length;
            break;
        }

        if (this.isIdentifierStart(this.peekMultichar())) {
            this.readIdent();
        }
        else if (ch === '"' || ch === '\'') {
            this.readString(ch);
        }
        else if (this.isWhitespace(ch)) {
            this.index++;
        }
        else if (ch === '=') {
            this.tokens.push({ index: this.index, text: '=', equal: true });
            this.index++;
        }
        else {
            this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
    }
};

HtmlLexer.prototype.lex = function (text) {
    this.text = text;
    this.index = 0;
    this.tokens = [];

    var allowDocType = !!this.options.allowDocType;
    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        var ch2 = this.peek();
        var ch3 = this.peek(2);
        if (this.expectString('<!--')) {
            this.readComment('<!--', '-->');
        }
        else if (ch === '<' && this.isIdentifierStart(ch2)) {
            this.readTag('<', '>', false);
        }
        else if (this.expectString('</') && this.isIdentifierStart(ch3)) {
            this.readTag('</', '>', true);
        }
        else if (this.expectString('<!DOCTYPE')) {
            if (allowDocType) {
                this.readTag('<!', '>', true, true);
            }
            else {
                this.throwError('DOCTYPE is not allowed', this.index, this.index + 1);
            }
        }
        else {
            this.readText();
        }
    }
    return this.tokens;
};



/***/ }),

/***/ "./src/parser/html-parser.js":
/*!***********************************!*\
  !*** ./src/parser/html-parser.js ***!
  \***********************************/
/*! exports provided: HtmlParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlParser", function() { return HtmlParser; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/ele-utils */ "./src/utility/ele-utils.js");
/* harmony import */ var _utility_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/handler */ "./src/utility/handler.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/parser/index.js");







// // Window Events
// case 'on-load':
// case 'on-unload':
// // Form Element Events
// case 'on-change':
// case 'on-submit':
// case 'on-reset':
// case 'on-select':
// case 'on-blur':
// case 'on-focus':
// // Image Events
// case 'on-abort':
// // Keyboard Events
// case 'on-keydown':
// case 'on-keypress':
// case 'on-keyup':
// // Mouse Events
// case 'on-click':
// case 'on-dblclick':
// case 'on-mousedown':
// case 'on-mousemove':
// case 'on-mouseout':
// case 'on-mouseover':
// case 'on-mouseup':
var eventText = 'load unload change submit reset select blur focus abort keydown keypress keyup click dblclick mousedown mousemove mouseout mouseover mouseup';
var domEvents = eventText.split(' ');
var WNodeType = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entity: 6,
    processingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12,
    custom: 101
};

// basic node
function VNode(type, name, value) {
    this.nodeType = type;
    this.nodeName = name;
    this.nodeValue = value;
    this.childNodes = [];
    this.parentNode = null;
    this.previousSibling = null;
    this.nextSibling = null;
    this.firstChild = null;
    this.lastChild = null;
    this.ownerVDocument = null;
    this.scope = null;
}

VNode.prototype.$pushChild = function (child) {
    child.parentNode = this;
    this.childNodes.push(child);
};

VNode.prototype.$buildSibling = function () {
    if (this.childNodes.length === 0) {
        return;
    }

    var self = this;

    if (this.childNodes.length === 1) {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[0];
    }
    else {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[this.childNodes.length - 1];

        this.childNodes.forEach(function (child, index) {
            if (index === 0) {
                child.nextSibling = self.childNodes[index + 1];
                return;
            }
            if (index === (self.childNodes.length - 1)) {
                child.previousSibling = self.childNodes[index - 1];
                return;
            }
            child.previousSibling = self.childNodes[index - 1];
            child.nextSibling = self.childNodes[index + 1];
        });
    }

    this.childNodes.forEach(function (child) {
        child.$buildSibling();
    });
};

VNode.prototype.$clearParentAndSibling = function() {
    this.parentNode = null;
    this.previousSibling = null;
    this.nextSibling = null;
};

VNode.prototype.$remove = function () {
    if (this.parentNode != null) {
        this.parentNode.removeChild(this);
    }
};

VNode.prototype.$destroy = function () {
    this.$remove();
    this.$clearParentAndSibling();
    this.childNodes.length = 0;
    this.firstChild = null;
    this.lastChild = null;
    this.ownerVDocument = null;
    this.scope = null;
};

VNode.prototype.createElement = function(name){
    return new ElementNode(name);
};

VNode.prototype.createAttr = function (name) {
    return new AttrNode(name);
};

VNode.prototype.createCustom = function (name, linker) {
    return new CustomNode(name, linker);
};

VNode.prototype.hasChildNodes = function () {
    return this.childNodes.length !== 0;
};

VNode.prototype.clearChildNodes = function () {
    this.childNodes.forEach(function (child) {
        child.destroy();
    });
    this.childNodes.length = 0;
};

VNode.prototype.appendChild = function (child) {
    if (child.parentNode != null) {
        child.parentNode.removeChild(child);
    }

    child.parentNode = this;

    if (this.childNodes.length === 0) {
        this.firstChild = child;
    }
    else {
        this.lastChild.nextSibling = child;
        child.previousSibling = this.lastChild;
    }

    child.compile(this.compileOptions);
    this.lastChild = child;
    this.childNodes.push(child);
    return child;
};

VNode.prototype.insertBefore = function (refChild, newChild) {
    if (newChild.parentNode != null) {
        newChild.parentNode.removeChild(newChild);
    }
    var index = this.childNodes.indexOf(refChild);
    if (index === -1) {
        throw new Error('Ref node is not a child of specified node');
    }

    newChild.parentNode = this;

    if(refChild.previousSibling != null) {
        newChild.previousSibling = refChild.previousSibling;
        refChild.previousSibling.nextSibling = newChild;
    }

    newChild.nextSibling = refChild;
    refChild.previousSibling = newChild;

    if (index === 0) {
        this.firstChild = newChild;
    }

    newChild.compile(this.compileOptions);
    this.childNodes.splice(index, 0, newChild);
    return newChild;
};

VNode.prototype.insertAfter = function (refChild, newChild) {
    if (refChild.nextSibling == null) {
        return this.appendChild(newChild);
    }

    return this.insertBefore(refChild.nextSibling, newChild);
};

VNode.prototype.removeChild = function (child) {
    var index = this.childNodes.indexOf(child);
    if (index === -1) {
        throw new Error('Remove node is not a child of specified node');
    }

    if(child.previousSibling != null){
        child.previousSibling.nextSibling = child.nextSibling;
    }

    if(child.nextSibling != null) {
        child.nextSibling.previousSibling = child.previousSibling;
    }

    if(index === 0) {
        this.firstChild = child.nextSibling;
    }

    if(index === (this.childNodes.length -1)){
        this.lastChild = child.previousSibling;
    }

    child.$clearParentAndSibling();
    this.childNodes.splice(index, 1);

    return child;
};

VNode.prototype.replaceChild = function (refChild, newChild) {
    if (newChild.parentNode != null) {
        newChild.parentNode.removeChild(newChild);
    }
    var index = this.childNodes.indexOf(refChild);
    if (index === -1) {
        throw new Error('Ref node is not a child of specified node');
    }

    newChild.parentNode = this;
    newChild.previousSibling = refChild.previousSibling;
    newChild.nextSibling = refChild.nextSibling;

    if (this.firstChild === refChild) {
        this.firstChild = newChild;
    }

    if (this.lastChild === refChild) {
        this.lastChild = newChild;
    }

    refChild.$clearParentAndSibling();
    newChild.compile(this.compileOptions);
    this.childNodes.splice(index, 1, newChild);
    return newChild;
};

VNode.prototype.cloneNode = function () {
    throw new Error('not implemented');
};

VNode.prototype.compile = function (options) {
    this.childNodes.forEach(function (child) {
        child.compile(options);
    });
};

VNode.prototype.directives = function () {
    var result = [];
    this.childNodes.map(function (child) {
        return child.directives();
    }).forEach(function (item) {
        result = result.concat(item);
    });
    return result;
};

VNode.prototype.getDirective = function () {
    return [];
};

VNode.prototype.link = function (scope) {
    this.scope = scope;
    return this.childNodes.map(function (child) {
        child.link(scope);
    });
};

VNode.prototype.afterLink = function () {
    this.childNodes.forEach(function (child) {
        child.afterLink();
    });
};

VNode.prototype.detect = function () {
    if (this.hasChange()) {
        this.update();
    }
};

VNode.prototype.hasChange = function () {
    return false;
};

VNode.prototype.update = function () {

};

VNode.prototype.destroy = function () {
    this.childNodes.map(function (child) {
        child.destroy();
    });
    this.$destroy();
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CustomNode, VNode);
// custom node
function CustomNode(name, linker) {
    CustomNode.super.call(this, WNodeType.custom, name);
    this.linker = linker;
}

CustomNode.prototype.link = function(scope) {
    this.scope = scope;
    return this.linker.call(this, scope);
};

CustomNode.prototype.afterLink = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onInsert)) {
        return this.onInsert.call(this);
    }
};

CustomNode.prototype.detect = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDetect)) {
        return this.onDetect.call(this);
    }
};

CustomNode.prototype.hasChange = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onHasChange)) {
        return this.onHasChange.call(this);
    }
};

CustomNode.prototype.update = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onUpdate)) {
        return this.onUpdate.call(this);
    }
};

CustomNode.prototype.destroy = function() {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.onDestroy)) {
        return this.onDestroy.call(this);
    }
    this.$destroy();
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](DocumentNode, VNode);
// document node
function DocumentNode() {
    CustomNode.super.call(this, WNodeType.document);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ElementNode, VNode);
// element node
function ElementNode(name) {
    ElementNode.super.call(this, WNodeType.element, name);
    this.attributes = [];
    this.element = null;
    this.component = null;
    this.selfClosed = false;
    this.compileOptions = null;
    this.isComponent = false;
}

ElementNode.prototype.$pushAttribute = function (attr) {
    attr.ownerVElement = this;
    this.attributes.push(attr);
};

ElementNode.prototype.hasAttributes = function () {
    return this.attributes.length !== 0;
};

ElementNode.prototype.setAttribute = function (key, value) {
    var target, matches = this.attributes.filter(function (attr) {
        return attr.belongTo(key);
    });

    if (matches.length > 0) {
        target = matches[0];
        target.setValue(value);
    }
    else {
        target = new AttrNode(key, value);
        target.ownerVElement = this;
        target.compile(this.compileOptions);
    }

    this.attributes.push(attr);

    return target;
};

ElementNode.prototype.removeAttribute = function (key) {
    var target = [], self = this;

    if (key instanceof AttrNode) {
        var index = this.attributes.indexOf(key);
        if (index !== -1) {
            target = self.attributes.splice(index, 1);
        }
    }
    else {
        this.attributes.filter(function (attr) {
            return attr.belongTo(key);
        }).forEach(function (match) {
            var index = self.attributes.indexOf(match);
            match.destroy();
            target = self.attributes.splice(index, 1);
        });
    }

    return target.length > 0 ? target[0] : null;
};

ElementNode.prototype.appendAttribute = function (attr) {
    if (attr.ownerVElement != null) {
        throw new Error("Current attribute is not new!");
    }

    attr.ownerVElement = this;
    attr.compile(this.compileOptions);
    this.attributes.push(attr);
    return attr;
};

ElementNode.prototype.getOuterTpl = function () {
    var attrTpl = '', childTpl = '';

    this.attributes.forEach(function (attr) {
        attrTpl += ' ';
        attrTpl += attr.getOuterTpl();
    });

    this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
    });

    var tpl = '<' + this.nodeName + attrTpl + '>' + childTpl;

    if(!this.selfClosed){
        tpl += ('</' + this.nodeName + '>');
    }

    return tpl;
};

ElementNode.prototype.getInnerTpl = function () {
    var childTpl = '';

    this.childNodes.forEach(function (child) {
        childTpl += child.getOuterTpl();
    });

    return childTpl;
};

ElementNode.prototype.setOuterTpl = function (tpl) {
    var self = this;
    Object(_index__WEBPACK_IMPORTED_MODULE_5__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.parentNode.insertBefore(self, vnode);
    });
    self.parentNode.removeChild(self);
};

ElementNode.prototype.setInnerTpl = function (tpl) {
    var self = this;
    this.clearChildNodes();
    Object(_index__WEBPACK_IMPORTED_MODULE_5__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.appendChild(vnode);
    });
};

ElementNode.prototype.getDirective = function (key) {
    var result = [];

    this.attributes.map(function (attr) {
        return attr.directives();
    }).forEach(function (item) {
        result = result.concat(item);
    });

    return result.filter(function (item) {
        return item.$$key === key;
    });
};

ElementNode.prototype.compile = function (options) {
    this.compileOptions = options;
    this.attributes.forEach(function (attr) {
        attr.compile(options);
    });
    this.isComponent = options.containsComponent(this.nodeName);
    if (!this.isComponent) {
        this.childNodes.forEach(function (child) {
            child.compile(options);
        });
    }
};

ElementNode.prototype.directives = function () {
    var result = [];

    this.attributes.map(function (attr) {
        return attr.directives();
    }).forEach(function (item) {
        result = result.concat(item);
    });

    if(this.component == null){
        this.childNodes.map(function (child) {
            return child.directives();
        }).forEach(function (item) {
            result = result.concat(item);
        });
    }

    return result;
};

ElementNode.prototype.link = function (scope) {
    var self = this;

    self.scope = scope;
    self.element = document.createElement(self.nodeName);

    if(this.isComponent){
        this.component = this.compileOptions.createComponent(this.nodeName);
        this.component.$bindVNode(this);
    }

    if (self.component == null) {
        this.attributes.forEach(function (attr) {
            attr.link(scope, self.element);
        });
        self.childNodes.forEach(function (child) {
            self.element.appendChild(child.link(scope));
        });
    }
    else {
        scope.$$childComponents.push(self.component);
        self.component.$$parentComponent = scope;
        self.attributes.forEach(function (attr) {
            attr.link(scope, self.element, self.component);
        });
        self.component.$mount(self.element);
    }

    return self.element;
};

ElementNode.prototype.afterLink = function () {
    this.attributes.forEach(function (attr) {
        attr.afterLink();
    });

    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.afterLink();
        });
    }
};

ElementNode.prototype.detect = function () {
    this.attributes.forEach(function (attr) {
        attr.detect();
    });
    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.detect();
        });
    }
};

ElementNode.prototype.dispose = function (isFromComponent) {
    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.destroy();
        });
    }
    else if(isFromComponent){
        this.component = null;
    }

    this.attributes.forEach(function (attr) {
        attr.destroy();
    });

    this.attributes.length = 0;
    this.removeDomElement();
    this.compileOptions = null;
    this.$destroy();
};

ElementNode.prototype.destroy = function () {
    if(this.component != null) {
        this.component.$dispose(true);
        this.component = null;
    }

    this.dispose();
};

ElementNode.prototype.getDomElement = function () {
    return this.element;
};

ElementNode.prototype.removeDomElement = function () {
    if(this.element != null){
        _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["removeNode"](this.element);
    }
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](AttrNode, VNode);
// attribute node
function AttrNode(name, value) {
    AttrNode.super.call(this, WNodeType.attribute, name, value);
    this.quote = '"';
    this.orgNodeName = name;
    this.isEvent = false;
    this.isBinding = false;
    this.isDomEvent = false;
    this.isDirective = false;
    this.directive = null;
    this.ownerVElement = null;
    this.ownerElement = null;
    this.ownerComponent = null;
    this.compileOptions = null;
    this.binding = new Binding();
}

AttrNode.prototype.belongTo = function (key) {
    return this.orgNodeName === key;
};

AttrNode.prototype.setValue = function (value) {
    this.nodeValue = value;
    this.compile(this.options);
};

AttrNode.prototype.compile = function (options) {
    this.compileOptions = options;
    this.isEvent = this.nodeName.startsWith('@');
    this.isBinding = this.nodeName.startsWith(':');
    this.isDirective = this.nodeName.startsWith('*');
    if (this.isEvent || this.isBinding || this.isDirective) {
        this.nodeName = this.nodeName.substr(1);
    }
    this.isDomEvent = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["contains"](domEvents, this.nodeName);
    this.binding.setOutput(this.isEvent);
    this.binding.bind(this.nodeValue, this.isEvent || this.isBinding || this.isDirective);

    if (this.isDirective) {
        if (options.containsDirective(this.nodeName)) {
            this.directive = options.createDirective(this.nodeName);
            this.directive.$bindVNode(this);
            this.binding.setOutput(this.directive.output);
        }
        else {
            throw new Error('directive ' + this.nodeName + ' is not defined');
        }
    }
};

AttrNode.prototype.link = function (scope, ownerElement, ownerComponent) {
    var self = this;

    this.scope = scope;
    this.ownerElement = ownerElement;
    this.ownerComponent = ownerComponent;
    this.binding.setScope(scope);

    if (this.isEvent) {
        if (this.isDomEvent) {
            this.ownerElement.addEventListener(this.nodeName, function (e) {
                self.binding.compute({
                    locals: {
                        $event: e,
                        $args: null,
                        $element: self.ownerElement
                    }
                });
            });
        }
        else if (ownerComponent != null) {
            ownerComponent.$listen(this.nodeName, function (e, args) {
                self.binding.compute({
                    locals: {
                        $event: e,
                        $args: args,
                        $element: self.ownerElement
                    }
                });
            });
        }
    }
    else {
        if (this.directive) {
            scope.$$childDirectives.push(this.directive);
            this.directive.$setBinding(this.binding);
        }
        else if (ownerComponent != null && ownerComponent.$hasAttr(this.nodeName)) {
            ownerComponent.$setAttr(this.nodeName, this.binding.compute());
        }
        else {
            if (this.nodeName.startsWith('style')) {
                _utility_utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.ownerElement, this.nodeName, this.binding.compute());
            }
            else {
                this.ownerElement.setAttribute(this.nodeName, this.binding.compute());
            }
        }

        this.binding.watchProps(function () {
            self.detect();
        });
    }
};

AttrNode.prototype.detect = function () {
    if (this.directive == null) {
        if (this.hasChange()) {
            this.update();
        }
    }
    else {
        this.directive.$detect(this.ownerElement, this.ownerComponent);
    }
};

AttrNode.prototype.hasChange = function () {
    return this.binding.detect();
};

AttrNode.prototype.update = function () {
    if (this.ownerComponent != null && this.ownerComponent.$hasAttr(this.nodeName)) {
        this.ownerComponent.$setAttr(this.nodeName, this.binding.value);
    }
    else {
        if (this.nodeName.startsWith('style')) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.ownerElement, this.nodeName, this.binding.value);
        }
        else {
            this.ownerElement.setAttribute(this.nodeName, this.binding.value);
            if (this.ownerElement.nodeName === 'INPUT' && this.nodeName === 'value') {
                this.ownerElement.value = this.binding.value;
            }
        }
    }
};

AttrNode.prototype.afterLink = function () {
    if (this.directive) {
        this.directive.$insert(this.ownerElement, this.ownerComponent);
    }
};

AttrNode.prototype.directives = function () {
    return this.directive == null ? [] : [this.directive];
};

AttrNode.prototype.getOuterTpl = function () {
    return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
};

AttrNode.prototype.getInnerTpl = function () {
    return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
};

AttrNode.prototype.dispose = function (isFromDirective) {
    if(isFromDirective){
        this.directive = null;
    }

    this.binding.destroy();
    this.binding = null;
    this.ownerVElement = null;
    this.ownerElement = null;
    this.ownerComponent = null;
    this.$destroy();
};

AttrNode.prototype.destroy = function(){
    if(this.directive != null){
        this.directive.$dispose(true);
        this.directive = null;
    }

    this.dispose();
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](TextNode, VNode);
// text node
function TextNode() {
    TextNode.super.call(this, WNodeType.text, '#text');
    this.binding = new Binding();
    this.element = null;
}

TextNode.prototype.compile = function () {
    this.binding.bind(this.nodeValue);
};

TextNode.prototype.link = function (scope) {
    var self = this;

    this.binding.setScope(scope);

    this.binding.watchProps(function(){
        self.detect();
    });

    return this.render(this.binding.compute());
};

TextNode.prototype.hasChange = function () {
    return this.binding.detect();
};

TextNode.prototype.update = function () {
    _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["replaceNode"](this.element, this.render(this.binding.value));
};

TextNode.prototype.render = function (value) {
    this.element = document.createTextNode(value);
    return this.element;
};

TextNode.prototype.getOuterTpl = function () {
    return this.nodeValue;
};

TextNode.prototype.getInnerTpl = function () {
    return this.nodeValue;
};

TextNode.prototype.destroy = function () {
    this.binding.destroy();
    this.binding = null;
    this.element = null;
    this.$destroy();
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CommentNode, VNode);
// comment node
function CommentNode() {
    CommentNode.super.call(this, WNodeType.comment, '#comment');
}

CommentNode.prototype.link = function () {
    return document.createComment(this.nodeValue);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CDataSectionNode, VNode);
// CDataSection node
function CDataSectionNode() {
    CDataSectionNode.super.call(this, WNodeType.cdataSection);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](DocumentTypeNode, VNode);
// document type node
function DocumentTypeNode() {
    DocumentTypeNode.super.call(this, WNodeType.documentType);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](DocumentFragmentNode, VNode);
// document fragment node
function DocumentFragmentNode() {
    DocumentFragmentNode.super.call(this, WNodeType.documentFragment, '#document-fragment');
}

function ExpNode(text) {
    this.text = text;
    this.value = null;
    this.oldValue = null;
}

ExpNode.prototype.getProps = function(scope, options) {
    var props = [];
    Object(_index__WEBPACK_IMPORTED_MODULE_5__["compute"])(this.text, new Proxy(scope, new _utility_handler__WEBPACK_IMPORTED_MODULE_2__["GetPropertyHandler"](props, '', true)), options);
    return props;
};

ExpNode.prototype.compute = function (scope, options) {
    this.oldValue = this.value;
    this.value = Object(_index__WEBPACK_IMPORTED_MODULE_5__["compute"])(this.text, scope, options);
};

ExpNode.prototype.detect = function () {
    return this.value !== this.oldValue;
};

ExpNode.prototype.destroy = function(){
    this.value = null;
    this.oldValue = null;
    this.props = null;
};

function Binding() {
    this.scope = null;
    this.text = '';
    this.isExp = false;
    this.segments = [];
    this.rightStr = '';
    this.output = false;
    this.value = null;
    this.change = new _utility_message__WEBPACK_IMPORTED_MODULE_3__["Messenger"]();
}

Binding.prototype.setScope = function (value) {
    this.scope = value;
};

Binding.prototype.setOutput = function (value) {
    this.output = value;
};

Binding.prototype.bind = function (text, isExp) {
    if(text == null) {
        return;
    }

    this.text = text;
    this.isExp = isExp;

    if (isExp) {
        this.segments.push({
            exp: new ExpNode(text),
            leftStr: ''
        });
        return;
    }

    var pattern = /{{([^}]*)}}/g;
    var lastIndex = pattern.lastIndex;
    var match = pattern.exec(text);

    while (match != null) {
        this.segments.push({
            index: match.index,
            exp: new ExpNode(match[1]),
            leftStr: text.substring(lastIndex, match.index)
        });
        lastIndex = pattern.lastIndex;
        match = pattern.exec(text);
    }

    if (this.segments.length > 0 && lastIndex < text.length) {
        this.rightStr = text.substring(lastIndex);
    }
};

Binding.prototype.compute = function (options) {
    var self = this;

    if (this.segments.length === 0) {
        this.value = this.text;
    }
    else {
        if (this.isExp && this.segments.length === 1) {
            this.segments[0].exp.compute(self.scope, options);
            this.value = this.segments[0].exp.value;
        }
        else {
            var text = '';
            this.segments.forEach(function (segment) {
                segment.exp.compute(self.scope, options);
                text += (segment.leftStr + segment.exp.value);
            });
            this.value = text + this.rightStr;
        }
    }

    return this.value;
};

Binding.prototype.watchProps = function(action) {
    if (this.output) {
        return;
    }

    var self = this, props = [];

    this.segments.forEach(function (segment) {
        props = props.concat(segment.exp.getProps(self.scope));
    });

    props.forEach(function (prop) {
        self.scope.$watch(prop, function () {
            self.change.fire();
        });
    });

    if (action != null) {
        self.change.on(action);
    }
};

Binding.prototype.detect = function (options) {
    if (this.output) {
        return false;
    }
    var self = this;
    this.compute();
    return this.segments.some(function (segment) {
        return segment.exp.detect(self.scope, options);
    });
};

Binding.prototype.destroy = function () {
    this.segments.forEach(function(segment){
        segment.exp.destroy();
    });
    this.scope = null;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlParser, _parser__WEBPACK_IMPORTED_MODULE_4__["Parser"]);
function HtmlParser(lexer, options) {
    HtmlParser.super.call(this, lexer, options);
}

HtmlParser.prototype.parse = function (text) {
    this.index = 0;
    this.text = text;
    this.tokens = this.lexer.lex(text);

    var fargment = new DocumentFragmentNode();
    var doctype, allowDocType = !!this.options.allowDocType;
    while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.doctype) {
            if (allowDocType) {
                if (!doctype) {
                    doctype = this.doctype();
                    fargment.$pushChild(doctype);
                }
                else {
                    this.throwError("DOCTYPE only allow one", token);
                }
            }
            else {
                this.throwError("DOCTYPE is not allowed", token);
            }
        }
        else if (token.comment) {
            var comment = new CommentNode();
            comment.nodeValue = token.text;
            fargment.$pushChild(comment);
            this.next();
        }
        else if (token.textTag) {
            var text = new TextNode();
            text.nodeValue = token.text;
            fargment.$pushChild(text);
            this.next();
        }
        else if (token.tag && token.begin) {
            fargment.$pushChild(this.element());
        }
        else {
            this.throwError("impossible", token);
        }
    }

    fargment.$buildSibling();

    return fargment.childNodes;
};

HtmlParser.prototype.doctype = function () {
    this.next();
    var docType = new DocumentTypeNode();
    var token = this.current();

    if (token.identifier) {
        docType.nodeValue = token.text;
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    this.attrs(docType).forEach(function (attr) {
        docType.childNodes.push(attr);
    });

    token = this.current();

    if (token.tag && token.end && token.closing) {
        this.next();
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    return docType;
};

HtmlParser.prototype.element = function (p) {
    this.next();
    var ele = new ElementNode();
    var token = this.current();

    if (token.identifier) {
        ele.nodeName = token.text;
        this.next();
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    this.attrs(ele).forEach(function (attr) {
        ele.$pushAttribute(attr);
    });

    token = this.current();

    if (token.tag && token.end) {
        this.next();
        if (ele.nodeName === 'input') {
            return ele;
        }
        if (!token.closing) {
            this.childElements(ele).forEach(function (child) {
                ele.$pushChild(child);
            });
        }
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    token = this.current();
    if (token.tag && token.begin && token.closing) {
        this.next();
        token = this.current();
        if (token.identifier) {
            if (ele.nodeName === token.text) {
                this.next();
                token = this.current();
                if (token.tag && token.end && token.closing) {
                    this.next();
                }
                else {
                    this.throwError(" Unexpected ", token);
                }
            }
            else {
                this.throwError(" Unexpected ", token);
            }
        }
        else {
            this.throwError(" Unexpected ", token);
        }
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    return ele;
};

HtmlParser.prototype.childElements = function (p) {
    var eles = [];

    while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.tag && token.closing) {
            break;
        }
        else if (token.comment) {
            var comment = new CommentNode();
            comment.nodeValue = token.text;
            eles.push(comment);
            this.next();
        }
        else if (token.textTag) {
            var text = new TextNode();
            text.nodeValue = token.text;
            eles.push(text);
            this.next();
        }
        else if (token.tag && token.begin) {
            eles.push(this.element(p));
        }
        else {
            this.throwError(" Unexpected ", token);
        }
    }

    return eles;
};

HtmlParser.prototype.attrs = function (p) {
    var attrs = [];

    while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.tag && token.end) {
            break;
        }

        var attr = new AttrNode();

        if (token.identifier) {
            attr.nodeName = token.text;
            attr.orgNodeName = token.text;
            this.next();
            token = this.current();
            if (token.equal) {
                this.next();
                token = this.current();
                if (token.constant) {
                    attr.nodeValue = token.value;
                    this.next();
                }
                else {
                    this.throwError(" Unexpected ", token);
                }
            }
        }

        attrs.push(attr);
    }

    return attrs;
};

HtmlParser.prototype.current = function () {
    if (this.index < this.tokens.length) {
        return this.tokens[this.index];
    }
    return {};
};

HtmlParser.prototype.next = function () {
    this.index++;
};



/***/ }),

/***/ "./src/parser/index.js":
/*!*****************************!*\
  !*** ./src/parser/index.js ***!
  \*****************************/
/*! exports provided: bootstrap, compile, compute, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return compute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lexer */ "./src/parser/lexer.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _html_lexer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-lexer */ "./src/parser/html-lexer.js");
/* harmony import */ var _html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-parser */ "./src/parser/html-parser.js");







var parseOptions = {
    isIdentifierContinue: false,
    isIdentifierStart: false,
    literals: {
        false: false,
        null: null,
        true: true,
        undefined: undefined
    }
};

function bootstrap(idOrElement, def) {
    var element, elementId;

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](idOrElement)) {
        elementId = idOrElement;
        element = document.getElementById(idOrElement);
    }
    else {
        elementId = idOrElement.getAttribute('id');
        if (elementId == null) {
            throw new Error('Please id attribute for root component');
        }
        element = idOrElement;
    }

    def.template = element.innerHTML;
    _view__WEBPACK_IMPORTED_MODULE_1__["injector"].createComponent(Object(_view__WEBPACK_IMPORTED_MODULE_1__["component"])(elementId, def)).$mount(idOrElement);
}

function parse(html) {
    var lexer = new _html_lexer__WEBPACK_IMPORTED_MODULE_4__["HtmlLexer"](parseOptions);
    var parser = new _html_parser__WEBPACK_IMPORTED_MODULE_5__["HtmlParser"](lexer, parseOptions);
    return parser.parse(html);
}

function compile(html, options) {
    var defaults = {
            getEmbedTpl: function () {
                return '';
            },
            containsComponent: function () {
                return false;
            },
            createComponent: function () {
                return null;
            },
            containsDirective: function () {
                return false;
            },
            createDirective: function () {
                return null;
            }
        },
        settings = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](defaults, options),
        astNodes = parse(html);

    astNodes.forEach(function (astNode) {
        astNode.compile(settings);
    });

    astNodes.forEach(function (astNode) {
        astNode.directives().forEach(function (directive) {
            directive.$compile(settings);
        });
    });

    return function (scope) {
        var fragment = document.createDocumentFragment();

        scope.$$vnodes = astNodes;

        if (!Object(_view__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(scope)) {
            scope.$$childDirectives = [];
            scope.$$childComponents = [];

            scope.$detect = function () {
                astNodes.forEach(function (astNode) {
                    astNode.detect();
                });
            };

            scope.$destroy = function () {
                astNodes.forEach(function (astNode) {
                    astNode.destroy();
                });
            };
        }

        astNodes.forEach(function (node) {
            fragment.appendChild(node.link(scope));
        });

        astNodes.forEach(function (item) {
            item.afterLink();
        });

        return fragment;
    };
}

function compute(exp, scope, options) {
    if (exp == null) {
        return;
    }
    exp = exp.trim();
    if (exp.length === 0) {
        return;
    }
    exp = exp.replace('&gt;', '>').replace('&lt;', '<');
    var lexer = new _lexer__WEBPACK_IMPORTED_MODULE_2__["Lexer"](parseOptions);
    var parser = new _parser__WEBPACK_IMPORTED_MODULE_3__["Parser"](lexer, parseOptions);
    options = options || {};
    options.createFilter = function (name) {
        return _view__WEBPACK_IMPORTED_MODULE_1__["injector"].createFilter(name);
    };
    return parser.parse(exp).compile(scope, options);
}



/***/ }),

/***/ "./src/parser/lexer.js":
/*!*****************************!*\
  !*** ./src/parser/lexer.js ***!
  \*****************************/
/*! exports provided: Lexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");


var OPERATORS = {};
var operatorText = '+ - * / % === !== == != < > <= >= && || ! = |';
var ESCAPE = { 'n': '\n', 'f': '\f', 'r': '\r', 't': '\t', 'v': '\v', '\'': '\'', '"': '"' };

operatorText.split(' ').forEach(function (operator) {
    OPERATORS[operator] = true;
});

function Lexer(options) {
    this.options = options;
}

Lexer.prototype.lex = function (text) {
    this.text = text;
    this.index = 0;
    this.tokens = [];

    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        if (ch === '"' || ch === '\'') {
            this.readString(ch);
        } else if (this.isNumber(ch) || ch === '.' && this.isNumber(this.peek())) {
            this.readNumber();
        } else if (this.isIdentifierStart(this.peekMultichar())) {
            this.readIdent();
        } else if (this.is(ch, '(){}[].,;:?')) {
            this.tokens.push({ index: this.index, text: ch });
            this.index++;
        } else if (this.isWhitespace(ch)) {
            this.index++;
        } else {
            var ch2 = ch + this.peek();
            var ch3 = ch2 + this.peek(2);
            var op1 = OPERATORS[ch];
            var op2 = OPERATORS[ch2];
            var op3 = OPERATORS[ch3];
            if (op1 || op2 || op3) {
                var token = op3 ? ch3 : (op2 ? ch2 : ch);
                this.tokens.push({ index: this.index, text: token, operator: true });
                this.index += token.length;
            } else {
                this.throwError('Unexpected next character ', this.index, this.index + 1);
            }
        }
    }
    return this.tokens;
};

Lexer.prototype.is = function (ch, chars) {
    return chars.indexOf(ch) !== -1;
};

Lexer.prototype.peek = function (i) {
    var num = i || 1;
    return (this.index + num < this.text.length) ? this.text.charAt(this.index + num) : false;
};

Lexer.prototype.isNumber = function (ch) {
    return ('0' <= ch && ch <= '9') && typeof ch === 'string';
};

Lexer.prototype.isWhitespace = function (ch) {
    // IE treats non-breaking space as \u00A0
    return (ch === ' ' || ch === '\r' || ch === '\t' ||
        ch === '\n' || ch === '\v' || ch === '\u00A0');
};

Lexer.prototype.isIdentifierStart = function (ch) {
    return this.options.isIdentifierStart ?
        this.options.isIdentifierStart(ch, this.codePointAt(ch)) :
        this.isValidIdentifierStart(ch);
};

Lexer.prototype.isValidIdentifierStart = function (ch) {
    return ('a' <= ch && ch <= 'z' ||
        'A' <= ch && ch <= 'Z' ||
        '_' === ch || ch === '$');
};

Lexer.prototype.isIdentifierContinue = function (ch) {
    return this.options.isIdentifierContinue ?
        this.options.isIdentifierContinue(ch, this.codePointAt(ch)) :
        this.isValidIdentifierContinue(ch);
};

Lexer.prototype.isValidIdentifierContinue = function (ch, cp) {
    return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
};

Lexer.prototype.codePointAt = function (ch) {
    if (ch.length === 1) {
        return ch.charCodeAt(0);
    }
    // eslint-disable-next-line no-bitwise
    return (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 0x35FDC00;
};

Lexer.prototype.peekMultichar = function () {
    var ch = this.text.charAt(this.index);
    var peek = this.peek();
    if (!peek) {
        return ch;
    }
    var cp1 = ch.charCodeAt(0);
    var cp2 = peek.charCodeAt(0);
    if (cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF) {
        return ch + peek;
    }
    return ch;
};

Lexer.prototype.isExpOperator = function (ch) {
    return (ch === '-' || ch === '+' || this.isNumber(ch));
};

Lexer.prototype.throwError = function (error, start, end) {
    end = end || this.index;
    var colStr = (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"](start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end);
    throw new Error('Lexer Error: ' + error + ' at column' + colStr + ' in expression [' + this.text + '].');
};

Lexer.prototype.readNumber = function () {
    var number = '';
    var start = this.index;
    while (this.index < this.text.length) {
        var ch = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](this.text.charAt(this.index));
        if (ch === '.' || this.isNumber(ch)) {
            number += ch;
        } else {
            var peekCh = this.peek();
            if (ch === 'e' && this.isExpOperator(peekCh)) {
                number += ch;
            } else if (this.isExpOperator(ch) &&
                peekCh && this.isNumber(peekCh) &&
                number.charAt(number.length - 1) === 'e') {
                number += ch;
            } else if (this.isExpOperator(ch) &&
                (!peekCh || !this.isNumber(peekCh)) &&
                number.charAt(number.length - 1) === 'e') {
                this.throwError('Invalid exponent');
            } else {
                break;
            }
        }
        this.index++;
    }
    this.tokens.push({
        index: start,
        text: number,
        constant: true,
        value: Number(number)
    });
};

Lexer.prototype.readIdent = function () {
    var start = this.index;
    this.index += this.peekMultichar().length;
    while (this.index < this.text.length) {
        var ch = this.peekMultichar();
        if (!this.isIdentifierContinue(ch)) {
            break;
        }
        this.index += ch.length;
    }
    this.tokens.push({
        index: start,
        text: this.text.slice(start, this.index),
        identifier: true
    });
};

Lexer.prototype.readString = function (quote) {
    var start = this.index;
    this.index++;
    var string = '';
    var rawString = quote;
    var escape = false;
    while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        rawString += ch;
        if (escape) {
            if (ch === 'u') {
                var hex = this.text.substring(this.index + 1, this.index + 5);
                if (!hex.match(/[\da-f]{4}/i)) {
                    this.throwError('Invalid unicode escape [\\u' + hex + ']');
                }
                this.index += 4;
                string += String.fromCharCode(parseInt(hex, 16));
            } else {
                var rep = ESCAPE[ch];
                string = string + (rep || ch);
            }
            escape = false;
        } else if (ch === '\\') {
            escape = true;
        } else if (ch === quote) {
            this.index++;
            this.tokens.push({
                index: start,
                text: rawString,
                constant: true,
                value: string
            });
            return;
        } else {
            string += ch;
        }
        this.index++;
    }
    this.throwError('Unterminated quote', start);
};



/***/ }),

/***/ "./src/parser/parser.js":
/*!******************************!*\
  !*** ./src/parser/parser.js ***!
  \******************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view/index.js");



var AST = {};
AST.Program = 'Program';
AST.ExpressionStatement = 'ExpressionStatement';
AST.AssignmentExpression = 'AssignmentExpression';
AST.ConditionalExpression = 'ConditionalExpression';
AST.LogicalExpression = 'LogicalExpression';
AST.BinaryExpression = 'BinaryExpression';
AST.UnaryExpression = 'UnaryExpression';
AST.CallExpression = 'CallExpression';
AST.MemberExpression = 'MemberExpression';
AST.Identifier = 'Identifier';
AST.Literal = 'Literal';
AST.ArrayExpression = 'ArrayExpression';
AST.Property = 'Property';
AST.ObjectExpression = 'ObjectExpression';

function AstNode(type) {
    this.type = type;
    this.childNodes = [];
}

AstNode.prototype.appendChild = function (child) {
    this.childNodes.push(child);
};

AstNode.prototype.compile = function (scope, options, internals) {
    return this.childNodes.map(function (child) {
        return child.compile(scope, options || {}, internals);
    });
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ProgramNode, AstNode);
function ProgramNode() {
    ProgramNode.super.call(this, AST.Program);
}

ProgramNode.prototype.compile = function (scope, options) {
    return this.childNodes[0].compile(scope, options || {});
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ExpressionStatementNode, AstNode);
function ExpressionStatementNode() {
    ExpressionStatementNode.super.call(this, AST.ExpressionStatement);
}

ExpressionStatementNode.prototype.compile = function (scope, options, internals) {
    return this.childNodes[0].compile(scope, options || {}, internals);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](AssignmentExpressionNode, AstNode);
function AssignmentExpressionNode(left, right, operator) {
    AssignmentExpressionNode.super.call(this, AST.AssignmentExpression);
    this.left = left;
    this.right = right;
    this.operator = operator;
}

AssignmentExpressionNode.prototype.compile = function (scope, options) {
    var target = this.left.compile(scope, options, { assignmentLeft: true });
    var value = this.right.compile(scope, options);
    target.obj[target.prop] = value;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ConditionalExpressionNode, AstNode);
function ConditionalExpressionNode(test, alternate, consequent) {
    ConditionalExpressionNode.super.call(this, AST.ConditionalExpression);
    this.test = test;
    this.alternate = alternate;
    this.consequent = consequent;
}

ConditionalExpressionNode.prototype.compile = function (scope, options) {
    if (this.test.compile(scope)) {
        return this.alternate.compile(scope, options);
    }
    return this.consequent.compile(scope, options);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](LogicalExpressionNode, AstNode);
function LogicalExpressionNode(operator, left, right) {
    LogicalExpressionNode.super.call(this, AST.LogicalExpression);
    this.operator = operator;
    this.left = left;
    this.right = right;
}

LogicalExpressionNode.prototype.compile = function (scope, options) {
    var result;
    var leftValue = this.left.compile(scope, options);
    var rightValue = this.right.compile(scope, options);

    switch (this.operator) {
        case '&&':
            result = leftValue && rightValue;
            break;
        case '||':
            result = leftValue && rightValue;
            break;
    }

    return result;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](BinaryExpressionNode, AstNode);
function BinaryExpressionNode(operator, left, right) {
    BinaryExpressionNode.super.call(this, AST.BinaryExpression);
    this.operator = operator;
    this.left = left;
    this.right = right;
}

BinaryExpressionNode.prototype.compile = function (scope, options) {
    var result;
    var leftValue = this.left.compile(scope, options);
    var rightValue = this.right.compile(scope, options);

    // '+', '-', '*', '/', '%', '<', '>', '<=', '>=', '==', '!=', '===', '!=='
    switch (this.operator) {
        case '+':
            result = leftValue + rightValue;
            break;
        case '-':
            result = leftValue - rightValue;
            break;
        case '*':
            result = leftValue * rightValue;
            break;
        case '/':
            result = leftValue / rightValue;
            break;
        case '%':
            result = leftValue % rightValue;
            break;
        case '<':
            result = leftValue < rightValue;
            break;
        case '>':
            result = leftValue > rightValue;
            break;
        case '<=':
            result = leftValue <= rightValue;
            break;
        case '>=':
            result = leftValue >= rightValue;
            break;
        case '==':
            result = leftValue == rightValue;
            break;
        case '!=':
            result = leftValue != rightValue;
            break;
        case '===':
            result = leftValue === rightValue;
            break;
        case '!==':
            result = leftValue !== rightValue;
            break;
    }

    return result;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](UnaryExpressionNode, AstNode);
function UnaryExpressionNode(operator, arg) {
    UnaryExpressionNode.super.call(this, AST.UnaryExpression);
    this.prefix = true;
    this.operator = operator;
    this.arg = arg;
}

UnaryExpressionNode.prototype.compile = function (scope, options) {
    var result, value = this.arg.compile(scope, options);

    switch (this.operator) {
        case '+':
            result = value;
            break;
        case '-':
            result = -value;
            break;
        case '!':
            result = !value;
            break;
    }

    return result;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](LiteralNode, AstNode);
function LiteralNode(value) {
    LiteralNode.super.call(this, AST.Literal);
    this.value = value;
}

LiteralNode.prototype.compile = function () {
    return this.value;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CallExpressionNode, AstNode);
function CallExpressionNode(callee, args) {
    CallExpressionNode.super.call(this, AST.CallExpression);
    this.callee = callee;
    this.args = args;
    this.filter = false;
}

CallExpressionNode.prototype.compile = function (scope, options) {
    var context = this.callee.compile(scope, options, { callee: true });
    var argValues = this.args.map(function (arg) {
        return arg.compile(scope, options);
    });

    if (this.filter) {
        var filterIns = options.createFilter(context.prop);
        if (Object(_view__WEBPACK_IMPORTED_MODULE_1__["isFilter"])(filterIns)) {
            return filterIns.$execute.apply(filterIns, argValues);
        }
        throw new Error('Filter "' + context.prop + '" is not defined');
    }
    else {
        var fn = context.obj[context.prop];
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](fn)) {
            return fn.apply(context.obj, argValues);
        }
        throw new Error(context.prop + ' is not a function');
    }
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](MemberExpressionNode, AstNode);
function MemberExpressionNode(object, property, computed) {
    MemberExpressionNode.super.call(this, AST.MemberExpression);
    this.object = object;
    this.property = property;
    this.computed = computed;
}

MemberExpressionNode.prototype.compile = function (scope, options, internals) {
    var obj = this.object.compile(scope, options, internals);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](obj)) {
        return obj[this.property.compile(obj, options, internals)];
    }

    return this.property.compile(obj, options, internals);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](IdentifierNode, AstNode);
function IdentifierNode(name) {
    IdentifierNode.super.call(this, AST.Identifier);
    this.name = name;
}

IdentifierNode.prototype.compile = function (scope, options, internals) {
    if (internals) {
        if (internals.assignmentLeft || internals.callee) {
            return {
                obj: scope,
                prop: this.name
            };
        }
        else if (internals.propertyKey) {
            return this.name;
        }
    }
    var result = scope[this.name];
    if (result == null && options.locals) {
        result = options.locals[this.name];
    }
    return result;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ArrayExpressionNode, AstNode);
function ArrayExpressionNode() {
    ArrayExpressionNode.super.call(this, AST.ArrayExpression);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](PropertyNode, AstNode);
function PropertyNode() {
    PropertyNode.super.call(this, AST.Property);
    this.kind = 'init';
    this.key = null;
    this.value = null;
    this.computed = false;
}

PropertyNode.prototype.compile = function (scope, options) {
    return {
        key: this.key.compile(scope, options, { propertyKey: true }),
        value: this.value.compile(scope, options)
    };
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ObjectExpressionNode, AstNode);
function ObjectExpressionNode(properties) {
    ObjectExpressionNode.super.call(this, AST.ObjectExpression);
    this.properties = properties;
}

ObjectExpressionNode.prototype.compile = function (scope, options) {
    var result = {};

    this.properties.forEach(function (item) {
        var def = item.compile(scope, options);
        result[def.key] = def.value;
    });

    return result;
};

function isAssignable(ast) {
    return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
}

function Parser(lexer, options) {
    this.lexer = lexer;
    this.options = options;
}

Parser.prototype.throwError = function (msg, token) {
    throw new Error('Syntax Error: Token \'' + token.text + '\'' + msg + ' at column ' + (token.index + 1) +
        ' of the expression [' + this.text + '] starting at [' + this.text.substring(token.index) + '].');
};

Parser.prototype.parse = function (text) {
    this.text = text;
    this.tokens = this.lexer.lex(text);

    var value = this.program();

    if (this.tokens.length !== 0) {
        this.throwError('is an unexpected token', this.tokens[0]);
    }

    return value;
};

Parser.prototype.program = function () {
    var program = new ProgramNode();
    while (true) {
        if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']')) {
            program.appendChild(this.expressionStatement());
        }
        if (!this.expect(';')) {
            return program;
        }
    }
};

Parser.prototype.expressionStatement = function () {
    var exp = new ExpressionStatementNode();
    exp.appendChild(this.filterChain());
    return exp;
};

Parser.prototype.filterChain = function () {
    var left = this.expression();
    while (this.expect('|')) {
        left = this.filter(left);
    }
    return left;
};

Parser.prototype.expression = function () {
    return this.assignment();
};

Parser.prototype.assignment = function () {
    var result = this.ternary();
    if (this.expect('=')) {
        if (!isAssignable(result)) {
            throw new Error('Trying to assign a value to a non l-value');
        }

        result = new AssignmentExpressionNode(result, this.assignment(), '=');
    }
    return result;
};

Parser.prototype.ternary = function () {
    var test = this.logicalOR();
    var alternate;
    var consequent;
    if (this.expect('?')) {
        alternate = this.expression();
        if (this.consume(':')) {
            consequent = this.expression();
            return new ConditionalExpressionNode(test, alternate, consequent);
        }
    }
    return test;
};

Parser.prototype.logicalOR = function () {
    var left = this.logicalAND();
    while (this.expect('||')) {
        left = new LogicalExpressionNode('||', left, this.logicalAND());
    }
    return left;
};

Parser.prototype.logicalAND = function () {
    var left = this.equality();
    while (this.expect('&&')) {
        left = new LogicalExpressionNode('&&', left, this.equality());
    }
    return left;
};

Parser.prototype.equality = function () {
    var left = this.relational();
    var token;
    while ((token = this.expect('==', '!=', '===', '!=='))) {
        left = new BinaryExpressionNode(token.text, left, this.relational());
    }
    return left;
};

Parser.prototype.relational = function () {
    var left = this.additive();
    var token;
    while ((token = this.expect('<', '>', '<=', '>='))) {
        left = new BinaryExpressionNode(token.text, left, this.additive());
    }
    return left;
};

Parser.prototype.additive = function () {
    var left = this.multiplicative();
    var token;
    while ((token = this.expect('+', '-'))) {
        left = new BinaryExpressionNode(token.text, left, this.multiplicative());
    }
    return left;
};

Parser.prototype.multiplicative = function () {
    var left = this.unary();
    var token;
    while ((token = this.expect('*', '/', '%'))) {
        left = new BinaryExpressionNode(token.text, left, this.unary());
    }
    return left;
};

Parser.prototype.unary = function () {
    var token;
    if ((token = this.expect('+', '-', '!'))) {
        return new UnaryExpressionNode(token.text, this.unary());
    } else {
        return this.primary();
    }
};

Parser.prototype.primary = function () {
    var primary;
    if (this.expect('(')) {
        primary = this.filterChain();
        this.consume(')');
    } else if (this.expect('[')) {
        primary = this.arrayDeclaration();
    } else if (this.expect('{')) {
        primary = this.object();
    } else if (this.options.literals.hasOwnProperty(this.peek().text)) {
        primary = new LiteralNode(this.options.literals[this.consume().text]);
    } else if (this.peek().identifier) {
        primary = this.identifier();
    } else if (this.peek().constant) {
        primary = this.constant();
    } else {
        this.throwError('not a primary expression', this.peek());
    }

    var next;
    while ((next = this.expect('(', '[', '.'))) {
        if (next.text === '(') {
            primary = new CallExpressionNode(primary, this.parseArguments());
            this.consume(')');
        } else if (next.text === '[') {
            primary = new MemberExpressionNode(primary, this.expression(), true);
            this.consume(']');
        } else if (next.text === '.') {
            primary = new MemberExpressionNode(primary, this.identifier(), false);
        } else {
            this.throwError('IMPOSSIBLE');
        }
    }
    return primary;
};

Parser.prototype.filter = function (baseExpression) {
    var args = [baseExpression], identifiers = [this.identifier()];

    while (this.expect('.')) {
        identifiers.push(this.identifier());
    }

    // plus namespace
    var entireName = identifiers.map(function (item) {
        return item.name;
    }).join('.');

    var result = new CallExpressionNode(new IdentifierNode(entireName), args);

    result.filter = true;

    while (this.expect(':')) {
        args.push(this.expression());
    }

    return result;
};

Parser.prototype.parseArguments = function () {
    var args = [];
    if (this.peekToken().text !== ')') {
        do {
            args.push(this.filterChain());
        } while (this.expect(','));
    }
    return args;
};

Parser.prototype.identifier = function () {
    var token = this.consume();
    if (!token.identifier) {
        this.throwError('is not a valid identifier', token);
    }
    return new IdentifierNode(token.text);
};

Parser.prototype.constant = function () {
    // TODO check that it is a constant
    return new LiteralNode(this.consume().value);
};

Parser.prototype.arrayDeclaration = function () {
    var arr = new ArrayExpressionNode();
    if (this.peekToken().text !== ']') {
        do {
            if (this.peek(']')) {
                // Support trailing commas per ES5.1.
                break;
            }
            arr.appendChild(this.expression());
        } while (this.expect(','));
    }
    this.consume(']');

    return arr;
};

Parser.prototype.object = function () {
    var properties = [], property;
    if (this.peekToken().text !== '}') {
        do {
            if (this.peek('}')) {
                // Support trailing commas per ES5.1.
                break;
            }
            property = new PropertyNode();
            if (this.peek().constant) {
                property.key = this.constant();
                property.computed = false;
                this.consume(':');
                property.value = this.expression();
            } else if (this.peek().identifier) {
                property.key = this.identifier();
                property.computed = false;
                if (this.peek(':')) {
                    this.consume(':');
                    property.value = this.expression();
                } else {
                    property.value = property.key;
                }
            } else if (this.peek('[')) {
                this.consume('[');
                property.key = this.expression();
                this.consume(']');
                property.computed = true;
                this.consume(':');
                property.value = this.expression();
            } else {
                this.throwError('invalid key', this.peek());
            }
            properties.push(property);
        } while (this.expect(','));
    }
    this.consume('}');

    return new ObjectExpressionNode(properties);
};

Parser.prototype.consume = function (e1) {
    if (this.tokens.length === 0) {
        throw new Error('Unexpected end of expression: ' + this.text);
    }

    var token = this.expect(e1);
    if (!token) {
        this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
    }
    return token;
};

Parser.prototype.peekToken = function () {
    if (this.tokens.length === 0) {
        throw new Error('Unexpected end of expression: ' + this.text);
    }
    return this.tokens[0];
};

Parser.prototype.peek = function (e1, e2, e3, e4) {
    return this.peekAhead(0, e1, e2, e3, e4);
};

Parser.prototype.peekAhead = function (i, e1, e2, e3, e4) {
    if (this.tokens.length > i) {
        var token = this.tokens[i];
        var t = token.text;
        if (t === e1 || t === e2 || t === e3 || t === e4 ||
            (!e1 && !e2 && !e3 && !e4)) {
            return token;
        }
    }
    return false;
};

Parser.prototype.expect = function (e1, e2, e3, e4) {
    var token = this.peek(e1, e2, e3, e4);
    if (token) {
        this.tokens.shift();
        return token;
    }
    return false;
};



/***/ }),

/***/ "./src/utility/ele-utils.js":
/*!**********************************!*\
  !*** ./src/utility/ele-utils.js ***!
  \**********************************/
/*! exports provided: getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return getChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return clearChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return replaceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return removeNodeBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return insertNodeAfter; });

function getChildNodes(node) {
    return Array.prototype.slice.call(node.childNodes, 0);
}

function clearChildNodes(node) {
    getChildNodes(node).forEach(function (child) {
        node.removeChild(child);
    });
}

function replaceNode(refNode, newNode) {
    var parentNode = refNode.parentNode;
    if (parentNode != null) {
        parentNode.insertBefore(newNode, refNode);
        parentNode.removeChild(refNode);
    }
}

function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode != null) {
        parentNode.removeChild(node);
    }
}

function removeNodeBetween(beginNode, endNode) {
    var parentNode = beginNode.parentNode;
    var childNodes = getChildNodes(parentNode);

    childNodes.forEach(function (child) {
        if (child.previousSibling === beginNode && child !== endNode) {
            parentNode.removeChild(child);
        }
        if (child.nextSibling === endNode && child !== beginNode) {
            parentNode.removeChild(child);
        }
    });
}

function insertNodeAfter(refNode, newNode) {
    var parentNode = refNode.parentNode;

    if (parentNode.lastChild === refNode) {
        parentNode.appendChild(newNode);
    } else {
        parentNode.insertBefore(newNode, refNode.nextSibling);
    }
}



/***/ }),

/***/ "./src/utility/handler.js":
/*!********************************!*\
  !*** ./src/utility/handler.js ***!
  \********************************/
/*! exports provided: SetPropertyHandler, GetPropertyHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPropertyHandler", function() { return SetPropertyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPropertyHandler", function() { return GetPropertyHandler; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");


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

    if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        value = new Proxy(value, new SetPropertyHandler(this.onchange, this.parentKey + key + '.', this.deepProxy));
    }

    return value;
};

SetPropertyHandler.prototype.set = function (target, key, value) {
    if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        var self = value[this.selfKey];

        // value is a proxy return by this handler
        if (self != null) {
            value = self;
        }
    }

    var oldValue = target[key];

    if (oldValue !== value || (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target) && key === 'length')) {
        var validation = {
            isValid: true,
            oldValue: oldValue,
            newValue: value
        };

        this.onchange.fireChanging(this.parentKey + key, validation);

        if (validation.isValid) {
            target[key] = value;

            this.onchange.fireChanged(this.parentKey + key, {
                oldValue: oldValue,
                newValue: value
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

    if (this.deepProxy && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
        value = new Proxy(value, new GetPropertyHandler(this.props, prop + '.', this.deepProxy));
    }

    if (this.props.indexOf(prop) === -1) {
        this.props.push(prop);
    }

    return value;
};



/***/ }),

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: isMessenger, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return isMessenger; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/utility/message.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isBlankObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isSame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["concat"]; });

/* harmony import */ var _ele_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ele-utils */ "./src/utility/ele-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["getChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["insertNodeAfter"]; });





function isMessenger(obj) {
    return obj instanceof _message__WEBPACK_IMPORTED_MODULE_0__["Messenger"];
}



/***/ }),

/***/ "./src/utility/message.js":
/*!********************************!*\
  !*** ./src/utility/message.js ***!
  \********************************/
/*! exports provided: Messenger, MessengerBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerBus", function() { return MessengerBus; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");


function Messenger() {
    this.handlers = [];
}

Messenger.prototype.on = function (fn) {
    this.handlers.push(fn);
};

Messenger.prototype.off = function (fn) {
    for (var i = 0; i < this.handlers.length; i++) {
        if (this.handlers[i] === fn) {
            this.handlers.splice(i, 1);
        }
    }
};

Messenger.prototype.fire = function (args, scope) {
    var returnValue;
    scope = scope || this;
    for (var i = 0; i < this.handlers.length; i++) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.handlers[i])) {
            returnValue = this.handlers[i].call(scope, args);
        }
    }
    return returnValue;
};

function MessengerBus() {
    this.messengers = {};
}

MessengerBus.prototype.getMessenger = function (e) {
    if (!this.messengers[e]) {
        this.messengers[e] = new Messenger();
    }
    return this.messengers[e];
};

MessengerBus.prototype.on = function (e, fn) {
    this.getMessenger(e).on(fn);
};

MessengerBus.prototype.off = function (e, fn) {
    this.getMessenger(e).off(fn);
};

MessengerBus.prototype.fire = function (e, args, scope) {
    return this.getMessenger(e).fire(args, scope);
};



/***/ }),

/***/ "./src/utility/subject.js":
/*!********************************!*\
  !*** ./src/utility/subject.js ***!
  \********************************/
/*! exports provided: PropertyChangeSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyChangeSubject", function() { return PropertyChangeSubject; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");


function PropertyChangeSubject(parentSubject){
    this.plainMap = new Map();
    this.regexMap = new Map();
    this.parentSubject = parentSubject;
}

PropertyChangeSubject.prototype.on = function(prop, action, options) {
    var map = _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"](prop) ? this.regexMap : this.plainMap;

    if (!map.has(prop)) {
        map.set(prop, []);
    }

    if (options) {
        action.beforeChanged = options.beforeChanged;
    }

    map.get(prop).push(action);
};

PropertyChangeSubject.prototype.off = function(prop, action) {
    var map = _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"](prop) ? this.regexMap : this.plainMap;

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



/***/ }),

/***/ "./src/utility/utils.js":
/*!******************************!*\
  !*** ./src/utility/utils.js ***!
  \******************************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return isBlankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return containsStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return hasProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
var debugMode = true,
    toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf;

function forEach(obj, action, ignoreOwn) {
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (action(index, obj[index])) {
                return;
            }
        }
    }
    else if (isObject(obj)) {
        for (var p in obj) {
            if (ignoreOwn || obj.hasOwnProperty(p)) {
                if (action(p, obj[p])) {
                    return;
                }
            }
        }
    }
    else {
        action(obj, obj);
    }
}

function some(obj, action) {
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (action(index, obj[index])) {
                return true;
            }
        }
    }
    else if (isObject(obj)) {
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                if (action(p, obj[p])) {
                    return true;
                }
            }
        }
    }
    else {
        return action(obj, obj);
    }
}

function copy() {
    var deep = false, index = 0, obj = arguments[index];

    if (isBoolean(obj)) {
        deep = obj;
        obj = arguments[++index];
    }

    if (isArray(obj)) {
        return obj.map(function (item) {
            return deep ? copy(item) : item;
        });
    }

    if (isObject(obj)) {
        var newObj = object(obj);
        forEach(obj, function (key, value) {
            newObj[key] = deep ? copy(value) : value;
        });
        return newObj;
    }

    return obj;
}

function extend() {
    var deep = false, index = 0, target = arguments[index];

    if (isBoolean(target)) {
        deep = target;
        target = arguments[++index];
    }

    if (deep) {
        Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
            deepMerge(target, item);
        });
    }
    else {
        Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
            plainMerge(target, item);
        });
    }
}

function merge() {
    var deep = false, index = 0, target = {};

    if (isBoolean(arguments[index])) {
        deep = arguments[index];
        index++;
    }

    if (deep) {
        Array.prototype.slice.call(arguments, index).forEach(function (item) {
            deepMerge(target, item);
        });
    }
    else {
        Array.prototype.slice.call(arguments, index).forEach(function (item) {
            plainMerge(target, item);
        });
    }

    return target;
}

function plainMerge(target, source) {
    forEach(source, function (key, value) {
        target[key] = value;
    });
}

function deepMerge(target, source) {
    forEach(source, function (key, value) {
        if (target[key] == null) {
            target[key] = value;
        }
        else {
            if (isObject(target[key]) && isObject(value)) {
                deepMerge(target[key], value);
            }
            else {
                target[key] = value;
            }
        }
    });
}

function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function inherit(subType, superType) {
    inheritPrototype(subType, superType);
    subType.super = function () {
        superType.apply(this, arguments);
    };
}

function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
}

function uppercase(string) {
    return isString(string) ? string.toUpperCase() : string;
}

function isUndefined(value) {
    return typeof value === 'undefined';
}

function isDefined(value) {
    return typeof value !== 'undefined';
}

function isArray(obj) {
    return obj instanceof Array;
}

function isMap(obj) {
    return obj instanceof Map;
}

function isObject(value) {
    return value !== null && typeof value === 'object';
}

function isBlankObject(value) {
    return value !== null && typeof value === 'object' && !getPrototypeOf(value);
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isDate(value) {
    return toString.call(value) === '[object Date]';
}

function isFunction(value) {
    return typeof value === 'function';
}

function isRegExp(value) {
    return toString.call(value) === '[object RegExp]';
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isSame(obj1, obj2) {
    var same = (obj1 === obj2);

    if (!same) {
        if (isArray(obj1) && isArray(obj2)) {
            if (obj1.length === obj2.length) {
                same = !some(obj1, function (index, value) {
                    return !isSame(value, obj2[index]);
                });
            }
        }
        else if (isObject(obj1) && isObject(obj2) && getPrototypeOf(obj1) === getPrototypeOf(obj2)) {
            same = !some(obj1, function (key, value) {
                return !isSame(value, obj2[key]);
            });
        }
    }

    return same;
}

function debug(log) {
    if (debugMode) {
        console.log(log);
    }
}

function contains(arr, obj) {
    return arr.some(function (item) {
        return item === obj;
    });
}

function containsStr(arr, str, ignoreCase) {
    return arr.some(function (item) {
        return item === str || (ignoreCase && lowercase(item) === lowercase(str));
    });
}

function hasProperty(obj, key, ignoreCase) {
    if (!obj) {
        return false;
    }

    var key2, hasProp = true, keys = key.split('.'), target = obj;

    while (hasProp && keys.length > 0) {
        key2 = keys.shift();
        hasProp = false;
        forEach(target, function (key3, value3) {
            hasProp = (key3 === key2 || (ignoreCase && lowercase(key3) === lowercase(key2)));
            if (hasProp) {
                target = value3;
            }
            return hasProp;
        }, true);
    }

    return hasProp;
}

function getProperty(obj, key, ignoreCase) {
    if (!obj) {
        return null;
    }

    var key2, hasProp = true, keys = key.split('.'), target = obj;

    while (hasProp && keys.length > 0) {
        key2 = keys.shift();
        hasProp = false;
        forEach(target, function (key3, value3) {
            hasProp = (key3 === key2 || (ignoreCase && lowercase(key3) === lowercase(key2)));
            if (hasProp) {
                target = value3;
            }
            return hasProp;
        }, true);
    }

    return hasProp ? target : null;
}

function setProperty(obj, key, value, ignoreCase) {
    if (!obj) {
        return;
    }

    var key2, hasProp = true, keys = key.split('.'), target = obj;

    while (hasProp && keys.length > 0) {
        key2 = keys.shift();
        if (keys.length === 0) {
            target[key2] = value;
        }
        else {
            hasProp = false;
            forEach(target, function (key3, value3) {
                hasProp = (key3 === key2 || (ignoreCase && lowercase(key3) === lowercase(key2)));
                if (hasProp) {
                    target = value3;
                }
                return hasProp;
            }, true);
        }
    }

    if (!hasProp) {
        throw new Error(key + ': Can not set property of undefined');
    }
}

function concat() {
    return Array.prototype.concat.apply([], arguments);
}



/***/ }),

/***/ "./src/view/component.js":
/*!*******************************!*\
  !*** ./src/view/component.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ "./src/utility/index.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/ele-utils */ "./src/utility/ele-utils.js");
/* harmony import */ var _utility_subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/subject */ "./src/utility/subject.js");
/* harmony import */ var _utility_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/handler */ "./src/utility/handler.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");








function Component() {
    this.$$vnodes = null;
    this.$$ownerVNode = null;
    this.$$parentComponent = null;
    this.$$childComponents = [];
    this.$$childDirectives = [];
    this.$$detectTimeout = null;
    this.$$propChanged = new _utility_subject__WEBPACK_IMPORTED_MODULE_3__["PropertyChangeSubject"]();
}

Component.prototype.$onInit = function () {
    Object.defineProperty(this, 'proxy', {
        enumerable: false,
        configurable: false,
        get: function () {
            return new Proxy(this, new _utility_handler__WEBPACK_IMPORTED_MODULE_4__["SetPropertyHandler"](this.$$propChanged, '', true));
        }
    });

    _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].injectServices(this);

    if (this.$$def.superInstance != null) {
        this.$$propChanged.parentSubject = this.$$def.superInstance.$$propChanged;
    }

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Component.prototype.$bindVNode = function (vnode) {
    this.$$ownerVNode = vnode;
};

Component.prototype.$hasAttr = function (prop) {
    return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["hasProperty"](this.$$def.props, prop, true);
};

Component.prototype.$setAttr = function (prop, value) {
    _utility_utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"](this.proxy, prop, value, true);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$$def.onChanges)) {
        this.$$def.onChanges.call(this, prop, value);
    }
};

Component.prototype.$hasEvent = function (e) {
    return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["containsStr"](this.$$def.events, e, true);
};

Component.prototype.$listen = function (e, fn) {
    var messenger = _utility_utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"](this, e, true);
    if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"])(messenger)) {
        messenger.on(fn);
        return;
    }
    throw new Error(e + ' is not a event');
};

Component.prototype.$getTemplate = function (sync) {
    var self = this;

    if(sync){
        return self.$$def.template || '';
    }

    return new Promise(function (resolve) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](self.$$def.template)) {
            resolve(self.$$def.template);
        }
        else if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](self.$$def.templateUrl)) {
            _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].service('$templateCache').getTplByUrl(self.$$def.templateUrl).then(function (tpl) {
                resolve(tpl);
            });
        }
        else {
            resolve('');
        }
    });
};

Component.prototype.$using = function (name) {
    var using = this.$$def.using,
        segments = name.split('.'),
        className = segments.pop(),
        spaceName = segments.join('.');

    if (spaceName && _utility_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](using)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_1__["some"](using, function (key, value) {
            if (key === spaceName) {
                name = value + '.' + className;
                return true;
            }
        });
    }

    return name;
};

Component.prototype.$makeCompileOptions = function () {
    var self = this;
    return {
        getEmbedTpl: function () {
            return this.$$ownerVNode.getInnerTpl();
        },
        containsComponent: function (name) {
            return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].containsComponent(self.$using(name));
        },
        createComponent: function (name) {
            return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createComponent(self.$using(name));
        },
        containsDirective: function (name) {
            return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].containsDirective(self.$using(name));
        },
        createDirective: function (name) {
            return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].createDirective(self.$using(name));
        }
    };
};

Component.prototype.$hasVNodes = function () {
    return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"](this.$$vnodes);
};

Component.prototype.$fromVNodes = function () {
    var fragment = document.createDocumentFragment();

    this.$$vnodes.forEach(function (vnode) {
        fragment.appendChild(vnode.getDomElement());
    });

    return fragment;
};

Component.prototype.$clearVNodes = function () {
    if (!this.$hasVNodes()) {
        return;
    }
    this.$$vnodes.forEach(function (vnode) {
        vnode.destroy();
    });
    this.$$vnodes = null;
};

Component.prototype.$render = function (sync) {
    var self = this, fragment = null;

    if (sync) {
        if (this.$hasVNodes()) {
            fragment = this.$fromVNodes();
        }
        else {
            fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_6__["compile"])(this.$getTemplate(sync), this.$makeCompileOptions())(this);
        }

        return fragment;
    }

    return new Promise(function (resolve) {
        if (self.$hasVNodes()) {
            resolve(self.$fromVNodes());
        }
        else {
            self.$getTemplate().then(function (html) {
                fragment = Object(_parser__WEBPACK_IMPORTED_MODULE_6__["compile"])(html, self.$makeCompileOptions())(self);
                resolve(fragment);
            });
        }
    });
};

Component.prototype.$refresh = function (sync) {
    this.$clearVNodes();
    return this.$render(sync);
};

Component.prototype.$mount = function (idOrElement, sync) {
    var self = this, element;

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](idOrElement)) {
        element = document.getElementById(idOrElement);
    }
    else {
        element = idOrElement;
    }

    _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"](element);

    if (sync) {
        element.appendChild(this.$render(sync));
        self.$afterViewInit();
    }
    else {
        this.$render(sync).then(function (ele) {
            element.appendChild(ele);
            self.$afterViewInit();
        });
    }
};

Component.prototype.$afterViewInit = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$$def.afterViewInit)) {
        this.$$def.afterViewInit.call(this);
    }
};

Component.prototype.$unmount = function () {
    if (this.$$ownerVNode != null) {
        this.$$ownerVNode.$remove();
        this.$$ownerVNode.removeDomElement();
    }
    else if (this.$hasVNodes()) {
        this.$$vnodes.forEach(function (vnode) {
            vnode.removeDomElement();
        });
    }

    if (this.$$parentComponent != null) {
        this.$$parentComponent.$removeChild(this);
        this.$$parentComponent = null;
    }
};

Component.prototype.$detect = function () {
    if (this.$$detectTimeout || !this.$$vnodes) {
        return;
    }

    var self = this;
    self.$$detectTimeout = setTimeout(function () {
        self.$$detectTimeout = null;
        self.$$vnodes.forEach(function (vnode) {
            vnode.detect();
        });
    });
};

Component.prototype.$validate = function(prop, action) {
    var self = this;

    this.$$propChanged.on(prop, action, {
        beforeChanged: true
    });

    return function () {
        self.$$propChanged.off(prop, action);
    };
};

Component.prototype.$watch = function(prop, action){
    var self = this;

    this.$$propChanged.on(prop, action);

    return function(){
        self.$$propChanged.off(prop, action);
    };
};

Component.prototype.$removeChild = function (child) {
    var index = this.$$childComponents.indexOf(child);

    if (index !== -1) {
        this.$$childComponents.splice(index, 1);
        child.$$parentComponent = null;
    }
};

Component.prototype.$dispose = function (isFromVNode) {
    // remove virtual node first in case it triggers parent component destroy
    this.$unmount();

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }

    if (this.$$detectTimeout) {
        clearTimeout(this.$$detectTimeout);
    }

    this.$clearVNodes();
    this.$$propChanged.destroy();

    if (isFromVNode) {
        this.$$ownerVNode = null;
    }

    this.$$childComponents = null;
    this.$$childDirectives = null;
};

Component.prototype.$destroy = function () {
    this.$dispose();

    // destroy virtual node in the end because it may binds logic about destroy
    if (this.$$ownerVNode != null) {
        this.$$ownerVNode.dispose(true);
        this.$$ownerVNode = null;
    }
};

/***/ }),

/***/ "./src/view/directive.js":
/*!*******************************!*\
  !*** ./src/view/directive.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Directive; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");



function Directive() {
    this.$$binding = null;
    this.$$vnode = null;
    this.output = false;
}

Directive.prototype.$onInit = function () {
    var self = this;

    _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Directive.prototype.$bindVNode = function (vnode) {
    this.$$vnode = vnode;
};

Directive.prototype.$setBinding = function (binding) {
    this.$$binding = binding;
};

Directive.prototype.$compile = function (options) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onCompile)) {
        this.$$def.onCompile.call(this, this.$$vnode, options);
    }
};

Directive.prototype.$insert = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onInsert)) {
        this.$$def.onInsert.call(this, ele, this.$$binding, com);
    }
};

Directive.prototype.$detect = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onDetect)) {
        return this.$$def.onDetect.call(this, ele, this.$$binding, com);
    }

    if (this.$$binding.detect()) {
        this.$update(ele, com);
    }
};

Directive.prototype.$update = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onUpdate)) {
        this.$$def.onUpdate.call(this, ele, this.$$binding, com);
    }
};

Directive.prototype.$dispose = function (isFromVNode) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }

    if(isFromVNode){
        this.$$vnode = null;
    }

    this.$$binding = null;
};

Directive.prototype.$destroy = function () {
    this.$dispose();

    if(this.$$vnode != null){
        this.$$vnode.dispose(true);
        this.$$vnode = null;
    }
};

/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");



function Filter() {

}

Filter.prototype.$onInit = function () {
    var self = this;

    _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Filter.prototype.$execute = function (ele) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onExecute)) {
        return this.$$def.onExecute.apply(this, arguments);
    }
};

Filter.prototype.$destroy = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }
};

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/*! exports provided: namespace, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return isFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return isService; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/view/component.js");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive */ "./src/view/directive.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter */ "./src/view/filter.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ "./src/view/service.js");








function namespace(ns) {
    return {
        component: function (name, def) {
            def.namespace = ns;
            return component(name, def);
        },
        directive: function (name, def) {
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
                def = {
                    onInsert: def,
                    onUpdate: def
                };
            }
            def.namespace = ns;
            return directive(name, def);
        },
        service: function (name, def) {
            def.namespace = ns;
            return service(name, def);
        },
        filter: function (name, def) {
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
                def = {
                    onExecute: def
                };
            }
            def.namespace = ns;
            return filter(name, def);
        }
    };
}

function component(name, def) {
    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].component,
        superClass: _component__WEBPACK_IMPORTED_MODULE_3__["default"]
    });
}

function directive(name, def) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
            onInsert: def,
            onUpdate: def
        };
    }

    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].directive,
        superClass: _directive__WEBPACK_IMPORTED_MODULE_4__["default"]
    });
}

function filter(name, def) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](def)) {
        def = {
            onExecute: def
        };
    }

    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].filter,
        superClass: _filter__WEBPACK_IMPORTED_MODULE_5__["default"]
    });
}

function service(name, def) {
    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].service,
        superClass: _service__WEBPACK_IMPORTED_MODULE_6__["default"]
    });
}

function isComponent(obj) {
    return obj instanceof _component__WEBPACK_IMPORTED_MODULE_3__["default"];
}

function isDirective(obj) {
    return obj instanceof _directive__WEBPACK_IMPORTED_MODULE_4__["default"];
}

function isFilter(obj) {
    return obj instanceof _filter__WEBPACK_IMPORTED_MODULE_5__["default"];
}

function isService(obj) {
    return obj instanceof _service__WEBPACK_IMPORTED_MODULE_6__["default"];
}



/***/ }),

/***/ "./src/view/injector.js":
/*!******************************!*\
  !*** ./src/view/injector.js ***!
  \******************************/
/*! exports provided: typeConst, Injector, injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeConst", function() { return typeConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return Injector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return injector; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");



var typeConst = {
    filter: 'filter',
    service: 'service',
    component: 'component',
    directive: 'directive'
};

var injector = new Injector();

function Injector() {
    this.container = {};
    this.waitingToExtends = {};
    this.insContainer = {};
}

Injector.prototype.getMapping = function (contractType) {
    if (!this.container[contractType]) {
        this.container[contractType] = {};
    }
    return this.container[contractType];
};

Injector.prototype.getInstances = function (contractType) {
    if (!this.insContainer[contractType]) {
        this.insContainer[contractType] = [];
    }
    return this.insContainer[contractType];
};

Injector.prototype.register = function (contractType, contractName, constructor) {
    if (contractName.indexOf('.') !== -1) {
        throw new Error('Illegal character "."');
    }

    var mapping = this.getMapping(contractType);

    if (mapping[contractName] == null) {
        mapping[contractName] = [];
    }
    else {
        var matches = mapping[contractName].filter(function (item) {
            return item.prototype.$$def.namespace === constructor.prototype.$$def.namespace;
        });

        if (matches.length > 0) {
            throw new Error(contractName + ' is exist under namespace ' + matches[0].prototype.$$def.namespace);
        }
    }

    mapping[contractName].push(constructor);
};

Injector.prototype.registerComponent = function (contractName, constructor) {
    this.register(typeConst.component, contractName, constructor);
};

Injector.prototype.registerDirective = function (contractName, constructor) {
    this.register(typeConst.directive, contractName, constructor);
};

Injector.prototype.contains = function (contractType, contractName, ignoreCase) {
    var constructors, mapping = this.getMapping(contractType);
    var segments = contractName.split('.');
    var namespace = '';

    if (segments.length > 1) {
        contractName = segments.pop();
        namespace = segments.join('.');
    }

    if (ignoreCase) {
        constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, contractName, true);
    }
    else {
        constructors = mapping[contractName];
    }

    if (constructors == null) {
        return false;
    }

    if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
            var def = item.prototype.$$def;
            return def.namespace && _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](def.namespace) === _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
        });

        if (constructors.length === 0) {
            return false;
        }
    }

    return true;
};

Injector.prototype.containsComponent = function (contractName) {
    return this.contains(typeConst.component, contractName, true);
};

Injector.prototype.containsDirective = function (contractName) {
    return this.contains(typeConst.directive, contractName, true);
};

Injector.prototype.get = function (contractType, contractName, ignoreCase) {
    var constructors, mapping = this.getMapping(contractType);
    var segments = contractName.split('.');
    var namespace = '';

    if (segments.length > 1) {
        contractName = segments.pop();
        namespace = segments.join('.');
    }

    if (ignoreCase) {
        constructors = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, contractName, true);
    }
    else {
        constructors = mapping[contractName];
    }

    if (constructors == null) {
        throw new Error(contractType + ' ' + contractName + ' is not defined');
    }

    if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
            var def = item.prototype.$$def;
            return def.namespace && _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](def.namespace) === _utility_utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
        });

        if (constructors.length === 0) {
            throw new Error(contractName + ' is not exist under namespace ' + namespace);
        }
    }

    if (constructors.length > 1) {
        var namespaces = constructors.map(function (item) {
            return item.prototype.$$def.namespace;
        });
        throw new Error('namespace ' + namespaces.join('|') + ' all have ' + contractName);
    }

    return constructors[0];
};

Injector.prototype.getComponent = function (contractName) {
    return this.get(typeConst.component, contractName);
};

Injector.prototype.getDirective = function (contractName) {
    return this.get(typeConst.directive, contractName);
};

Injector.prototype.getFilter = function (contractName) {
    return this.get(typeConst.filter, contractName);
};

Injector.prototype.getService = function (contractName) {
    return this.get(typeConst.service, contractName);
};

Injector.prototype.create = function (contractType, contractName) {
    var constructor = this.get(contractType, contractName), instance;

    switch (contractType) {
        case contractType.component:
            instance = this.createComponent(constructor); break;
        case contractType.directive:
            instance = this.createDirective(constructor); break;
        case contractType.filter:
            instance = this.createFilter(constructor); break;
        case contractType.service:
            instance = this.createService(constructor); break;
        default:
            instance = new constructor(); break;
    }

    return instance;
};

Injector.prototype.createComponent = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getComponent(constructor);
    }
    var instance = new constructor();
    instance.$onInit();
    return instance;
};

Injector.prototype.createDirective = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getDirective(constructor);
    }
    var instance = new constructor();
    instance.$onInit();
    return instance;
};

Injector.prototype.createFilter = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getFilter(constructor);
    }
    var instance = new constructor();
    instance.$onInit();
    return instance;
};

Injector.prototype.createService = function (constructor) {
    var instance, services = this.getInstances(typeConst.service);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getService(constructor);
    }

    if (!constructor.prototype.$$def.nonShared) {
        var result = services.filter(function (item) {
            return item instanceof constructor;
        });

        if (result.length) {
            instance = result[0];
        }
    }

    if (!instance) {
        instance = new constructor();
        instance.$onInit();
        services.push(instance);
    }

    return instance;
};

Injector.prototype.service = function (contractName) {
    return this.createService(contractName);
};

Injector.prototype.getWaitingToExtends = function (contractType) {
    if (!this.waitingToExtends[contractType]) {
        this.waitingToExtends[contractType] = [];
    }
    return this.waitingToExtends[contractType];
};

Injector.prototype.setWaitingToExtends = function (contractType, value) {
    this.waitingToExtends[contractType] = value;
};

Injector.prototype.buildConstructor = function makeConstructor(contractName, def, options) {
    var self = this, constructor, waitingToExtends = self.getWaitingToExtends(options.contractType);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](options.getConstructor)) {
        constructor = options.getConstructor();
    }
    else {
        constructor = function constructor() {
            var self = this;
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](constructor.super)) {
                constructor.super.call(this);
            }
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](this.$$def.props)) {
                _utility_utils__WEBPACK_IMPORTED_MODULE_0__["extend"](true, this, _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, this.$$def.props));
            }
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](this.$$def.events)) {
                this.$$def.events.forEach(function (e) {
                    self[e] = new _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();
                });
            }
        };
    }

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](options.superClass)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, options.superClass);
    }

    if(_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](def.superInstance) && (def.superInstance instanceof options.superClass)) {
        constructor.prototype = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["object"](def.superInstance);
    }

    constructor.prototype.$$key = contractName;

    // apply properties and methods
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](def.extends)) {
        if (injector.contains(options.contractType, def.extends)) {
            var superOne = injector.get(options.contractType, def.extends);
            var def2 = extendDef(def, superOne);
            remainConstructor(contractName, def2, constructor);
        }
        else {
            waitingToExtends.push({
                superName: def.extends,
                callback: function (superOne) {
                    var def2 = extendDef(def, superOne);
                    remainConstructor(contractName, def2, constructor);
                }
            });
        }
    }
    else {
        remainConstructor(contractName, def, constructor);
    }

    function extendDef(def, superOne) {
        if (superOne.prototype.$$def && superOne.prototype.$$def.protected) {
            throw new Error(options.contractType + ': ' + def.extends + ' is protected, it is not allowed to extend!');
        }

        return _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](true, _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, superOne.prototype.$$def), def);
    }

    function remainConstructor(name, def, constructor) {
        constructor.prototype.$$def = def;

        // create methods
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](def.methods)) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["extend"](constructor.prototype, def.methods);
        }

        // register component
        if(!def.local){
            injector.register(options.contractType, name, constructor);
        }

        // check if there is any component extends current component
        var waitingToExtends2 = [];
        waitingToExtends.forEach(function (item) {
            if (item.superName === name) {
                item.callback.call(null, constructor);
            }
            else {
                waitingToExtends2.push(item);
            }
        });
        self.setWaitingToExtends(options.contractType, waitingToExtends2);
    }

    return constructor;
};

Injector.prototype.injectServices = function (instance) {
    var self = this;

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](instance.$$def.inject)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](instance.$$def.inject, function (key, value) {
            instance[key] = self.createService(value);
        });
    }
};



/***/ }),

/***/ "./src/view/service.js":
/*!*****************************!*\
  !*** ./src/view/service.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Service; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");



function Service() {

}

Service.prototype.$onInit = function () {
    var self = this;

    _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onInit)) {
        this.$$def.onInit.call(this);
    }
};

Service.prototype.$destroy = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$$def.onDestroy)) {
        this.$$def.onDestroy.call(this);
    }
};

/***/ }),

/***/ "axios":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"axios","commonjs2":"axios","amd":"axios","root":"axios"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibGFja2JvYXJkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibGFja2JvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy9pbm5lci9kaXJlY3RpdmVzLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvaW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy9pbm5lci9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3BhcnNlci9odG1sLWxleGVyLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvcGFyc2VyL2h0bWwtcGFyc2VyLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvcGFyc2VyL2xleGVyLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvcGFyc2VyL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3V0aWxpdHkvZWxlLXV0aWxzLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvdXRpbGl0eS9oYW5kbGVyLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvdXRpbGl0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3V0aWxpdHkvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3V0aWxpdHkvc3ViamVjdC5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3V0aWxpdHkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3ZpZXcvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy92aWV3L2luZGV4LmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3ZpZXcvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJheGlvc1wiLFwiY29tbW9uanMyXCI6XCJheGlvc1wiLFwiYW1kXCI6XCJheGlvc1wiLFwicm9vdFwiOlwiYXhpb3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FBMEI7QUFDSDtBQUNFOzs7Ozs7Ozs7Ozs7O0FDRnpCO0FBQUE7QUFBQTtBQUFBO0FBQW9FO0FBQ3hCO0FBQ1I7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdURBQVM7O0FBRVQsdURBQVM7O0FBRVQsdURBQVM7O0FBRVQsdURBQVM7O0FBRVQsdURBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxpREFBYztBQUN0QjtBQUNBO0FBQ0EsYUFBYSxpREFBYztBQUMzQixRQUFRLGdEQUFhO0FBQ3JCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWSxnREFBYTtBQUN6QjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHVEQUFT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Q0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxvREFBSztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFLO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw2REFBbUI7QUFDM0I7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxzREFBYSxhQUFhLDhDQUFNO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxlQUFlO0FBQ3RFO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxZQUFZLHNEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLHNEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0Msb0JBQW9CO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFVBQVU7QUFDN0Q7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUssd0JBQXdCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVuQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEJBQTBCLHVEQUFRO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix1REFBUTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtCQUErQixzREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsdURBQVE7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDZDtBQUNJOztBQUU1QjtBQUNBLDBCQUEwQixrREFBUztBQUNuQzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDLFlBQVksaURBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYywrQ0FBYzs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYywrQ0FBYzs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QSxJQUFJLGtEQUFROztBQUVaLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ3JCQSxtRCIsImZpbGUiOiJibGFja2JvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYXhpb3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYXhpb3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmxhY2tib2FyZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImF4aW9zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJibGFja2JvYXJkXCJdID0gZmFjdG9yeShyb290W1wiYXhpb3NcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2F4aW9zX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdXRpbGl0eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbm5lcic7IiwiaW1wb3J0IHsgZGlyZWN0aXZlLCBuYW1lc3BhY2UsIGluamVjdG9yLCBjb21wb25lbnQgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHtjb21wdXRlICwgY29tcGlsZX0gZnJvbSAnLi4vcGFyc2VyJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcblxyXG52YXIgc3BhY2VOYW1lID0gJ2JsYWNrYm9hcmQnO1xyXG5cclxuZnVuY3Rpb24gbWFrZUF0dHJTZXR0ZXIoYXR0ck5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKGJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIGlmICghZWxlLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbm5hbWVzcGFjZShzcGFjZU5hbWUpLmRpcmVjdGl2ZSgnYi1zZWxlY3RlZCcsIG1ha2VBdHRyU2V0dGVyKCdzZWxlY3RlZCcpKTtcclxuXHJcbm5hbWVzcGFjZShzcGFjZU5hbWUpLmRpcmVjdGl2ZSgnYi1kaXNhYmxlZCcsIG1ha2VBdHRyU2V0dGVyKCdkaXNhYmxlZCcpKTtcclxuXHJcbm5hbWVzcGFjZShzcGFjZU5hbWUpLmRpcmVjdGl2ZSgnYi1jaGVja2VkJywgbWFrZUF0dHJTZXR0ZXIoJ2NoZWNrZWQnKSk7XHJcblxyXG5uYW1lc3BhY2Uoc3BhY2VOYW1lKS5kaXJlY3RpdmUoJ2ItcmVhZG9ubHknLCBtYWtlQXR0clNldHRlcigncmVhZG9ubHknKSk7XHJcblxyXG5uYW1lc3BhY2Uoc3BhY2VOYW1lKS5kaXJlY3RpdmUoJ2Itc3R5bGUnLCBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgZWxlLnN0eWxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBlbGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJpbmRpbmcuc2NvcGUuJHdhdGNoT2JqZWN0KHZhbHVlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIG9mIGItc3R5bGUgc2hvdWxkIGJlIHN0cmluZyBvciBvYmplY3QnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc3BhY2VOYW1lKS5kaXJlY3RpdmUoJ2Itc2hvdycsIGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgIGVsZS5zdHlsZS5kaXNwbGF5ID0gYmluZGluZy5jb21wdXRlKCkgPyAnaW5pdGlhbCcgOiAnbm9uZSc7XHJcbn0pO1xyXG5cclxubmFtZXNwYWNlKHNwYWNlTmFtZSkuZGlyZWN0aXZlKCdiLWhpZGUnLCBmdW5jdGlvbiAoZWwsIGJpbmRpbmcpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBiaW5kaW5nLmNvbXB1dGUoKSA/ICdub25lJyA6ICdpbml0aWFsJztcclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc3BhY2VOYW1lKS5kaXJlY3RpdmUoJ2ItaWYnLCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGNvbW1lbnQ6IG51bGxcclxuICAgIH0sXHJcbiAgICBvbkluc2VydDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2ItaWYnKTtcclxuICAgICAgICBpZiAoIWJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGU6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICBpZiAoYmluZGluZy5jb21wdXRlKCkpIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuY29tbWVudCwgZWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm5hbWVzcGFjZShzcGFjZU5hbWUpLmRpcmVjdGl2ZSgnYi1zd2l0Y2gnLCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICB9LFxyXG4gICAgb25JbnNlcnQ6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGU6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubmFtZXNwYWNlKHNwYWNlTmFtZSkuZGlyZWN0aXZlKCdiLXN3aXRjaC1kZWZhdWx0Jywge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBhdHRyTm9kZTogbnVsbCxcclxuICAgICAgICBjb21tZW50OiBudWxsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGlzTWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gdHJ1ZSwgdkVsZSA9IHRoaXMuYXR0ck5vZGUub3duZXJWRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh2RWxlLnByZXZpb3VzU2libGluZyAhPSBudWxsICYmIG1hdGNoKXtcclxuICAgICAgICAgICAgICAgIHZhciB3aGVuRGlyID0gdkVsZS5wcmV2aW91c1NpYmxpbmcuZ2V0RGlyZWN0aXZlKCdiLXN3aXRjaC13aGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdkVsZSA9IHZFbGUucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCF3aGVuRGlyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1hdGNoID0gIXdoZW5EaXJbMF0uaXNNYXRjaDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNvbXBpbGU6IGZ1bmN0aW9uIChhdHRyTm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBhdHRyTm9kZTtcclxuICAgIH0sXHJcbiAgICBvbkluc2VydDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2Itc3dpdGNoLWRlZmF1bHQnKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2goKSkge1xyXG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRGV0ZWN0OiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYXRjaCgpKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgIH1cclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc3BhY2VOYW1lKS5kaXJlY3RpdmUoJ2Itc3dpdGNoLXdoZW4nLCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGlzTWF0Y2g6IGZhbHNlLFxyXG4gICAgICAgIGF0dHJOb2RlOiBudWxsLFxyXG4gICAgICAgIGNvbW1lbnQ6IG51bGxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlSXNNYXRjaDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgICAgICB2YXIgdkVsZSA9IHRoaXMuYXR0ck5vZGUub3duZXJWRWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIHN3aXRjaERpciA9IHZFbGUucGFyZW50Tm9kZS5nZXREaXJlY3RpdmUoJ2Itc3dpdGNoJyk7XHJcblxyXG4gICAgICAgICAgICBpZighc3dpdGNoRGlyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgYi1zd2l0Y2ggZGlyZWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaCA9IGJpbmRpbmcuY29tcHV0ZSgpID09PSBzd2l0Y2hEaXJbMF0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ29tcGlsZTogZnVuY3Rpb24gKGF0dHJOb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IGF0dHJOb2RlO1xyXG4gICAgfSxcclxuICAgIG9uSW5zZXJ0OiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnYi1zd2l0Y2gtd2hlbicpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXNNYXRjaChlbGUsIGJpbmRpbmcpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRjaCkge1xyXG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRGV0ZWN0OiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJc01hdGNoKGVsZSwgYmluZGluZyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKHRoaXMuY29tbWVudCwgZWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnJlcGxhY2VOb2RlKGVsZSwgdGhpcy5jb21tZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm5hbWVzcGFjZShzcGFjZU5hbWUpLmRpcmVjdGl2ZSgnYi1iaW5kJywgZnVuY3Rpb24oZWxlLCBiaW5kaW5nKXtcclxuICAgIGVsZS5pbm5lclRleHQgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc3BhY2VOYW1lKS5kaXJlY3RpdmUoJ2ItbW9kZWwnLCB7XHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICAgICAgaWYgKGNvbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUudmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbS52YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uSW5zZXJ0OiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSk7XHJcblxyXG4gICAgICAgIGlmIChjb20gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGJpbmRpbmcuc2NvcGUuJHNldEF0dHIoYmluZGluZy50ZXh0LCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzTWVzc2VuZ2VyKGNvbS5jaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBjb20uY2hhbmdlLm9uKGZ1bmN0aW9uIChlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5zY29wZS4kc2V0QXR0cihiaW5kaW5nLnRleHQsIGFyZ3MubmV3dmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb2VudCAnICsgY29tLiQka2V5ICsgJ211c3QgZGVmaW5lIFtjaGFuZ2VdIGV2ZW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nLCBjb20pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShlbGUsIGJpbmRpbmcsIGNvbSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubmFtZXNwYWNlKHNwYWNlTmFtZSkuZGlyZWN0aXZlKCdiLXJlcGVhdCcsIHtcclxuICAgIG9uQ29tcGlsZTogZnVuY3Rpb24gKGF0dHJOb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGFyZyA9IGF0dHJOb2RlLm5vZGVWYWx1ZTtcclxuICAgICAgICB2YXIgZWxlTm9kZSA9IGF0dHJOb2RlLm93bmVyVkVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihcXHcrKVxccytpblxccysoXFx3KykkL2k7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhdHRlcm4uZXhlYyhhcmcpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYi1yZXBlYXQ6IHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaXRlbUV4cCA9IHJlc3VsdFsxXTtcclxuICAgICAgICB2YXIgaXRlbXNFeHAgPSByZXN1bHRbMl07XHJcblxyXG4gICAgICAgIGVsZU5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOb2RlKTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRTY29wZSwgY3VycmVudEl0ZW1zLCBzdGFydCwgZW5kLCBSZWVhdEl0ZW0sIHJlcGVhdEl0ZW1zID0gW107XHJcbiAgICAgICAgdmFyIHRwbCA9IGVsZU5vZGUuZ2V0T3V0ZXJUcGwoKTtcclxuICAgICAgICB2YXIgY3VzdG9tID0gZWxlTm9kZS5jcmVhdGVDdXN0b20oJ2ItcmVwZWF0JywgZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgY3VycmVudFNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgICAgIFJlZWF0SXRlbSA9IGNyZWF0ZVJlcGVhdEl0ZW0oKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEl0ZW1zKGNvbXB1dGUoaXRlbXNFeHAsIGN1cnJlbnRTY29wZSkpO1xyXG4gICAgICAgICAgICBzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBiLXJlcGVhdCcpO1xyXG4gICAgICAgICAgICBlbmQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IGItcmVwZWF0Jyk7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0YXJ0KTtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZW5kKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbGVOb2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVsZU5vZGUsIGN1c3RvbSk7XHJcbiAgICAgICAgZWxlTm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGN1c3RvbS5vbkluc2VydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnVpbGQoY3VycmVudEl0ZW1zKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjdXN0b20ub25EZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGNvbXB1dGUoaXRlbXNFeHAsIGN1cnJlbnRTY29wZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudEl0ZW1zICE9PSBpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkKGN1cnJlbnRJdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXBlYXRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRTY29wZS4kZGV0ZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGN1c3RvbS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlcGVhdEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkU2NvcGUuJGRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcGVhdEl0ZW1zID0gbnVsbDtcclxuICAgICAgICAgICAgZWxlTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTY29wZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICAgICAgZW5kID0gbnVsbDtcclxuICAgICAgICAgICAgY3VzdG9tID0gbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVSZXBlYXRJdGVtKCl7XHJcbiAgICAgICAgICAgIHZhciByZXBlYXRJdGVtQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgbG9jYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdHBsLFxyXG4gICAgICAgICAgICAgICAgcHJvcHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgc3VwZXJJbnN0YW5jZTogY3VycmVudFNjb3BlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXBlYXRJdGVtQ29uZmlnLnByb3BzW2l0ZW1FeHBdID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQoJ2ItcmVwZWF0LWl0ZW0nLCByZXBlYXRJdGVtQ29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRJdGVtcyh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRTY29wZS4kd2F0Y2goaXRlbXNFeHAgKyAnLmxlbmd0aCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkKGN1cnJlbnRJdGVtcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYnVpbGQoaXRlbXMpIHtcclxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgICB2YXIgbmV3UmVwZWF0SXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goaXRlbXMsIGZ1bmN0aW9uIChrZXksIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXBlYXRJdGVtID0gZ2V0UmVwZWF0SXRlbShpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVwZWF0SXRlbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0SXRlbSA9IGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChSZWVhdEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdEl0ZW1baXRlbUV4cF0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHJlcGVhdEl0ZW0uJHJlbmRlcih0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICBuZXdSZXBlYXRJdGVtcy5wdXNoKHJlcGVhdEl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXBlYXRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXBlYXRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXBlYXRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0SXRlbS4kZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcGVhdEl0ZW1zID0gbmV3UmVwZWF0SXRlbXM7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZU5vZGVCZXR3ZWVuKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICBlbmQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIGVuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRSZXBlYXRJdGVtKGRhdGFJdGVtKXtcclxuICAgICAgICAgICAgdmFyIGZpbHRlcnMgPSByZXBlYXRJdGVtcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVtpdGVtRXhwXSA9PT0gZGF0YUl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoZmlsdGVycy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBmaWx0ZXJzWzBdO1xyXG5cclxuICAgICAgICAgICAgcmVwZWF0SXRlbXMgPSByZXBlYXRJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtW2l0ZW1FeHBdICE9PSBkYXRhSXRlbTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5uYW1lc3BhY2Uoc3BhY2VOYW1lKS5kaXJlY3RpdmUoJ2ItZW1iZWQnLCB7XHJcbiAgICBvbkNvbXBpbGU6IGZ1bmN0aW9uIChhdHRyTm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBlbWJlZFRwbCA9IG9wdGlvbnMuZ2V0RW1iZWRUcGwoKTtcclxuICAgICAgICBpZihlbWJlZFRwbCl7XHJcbiAgICAgICAgICAgIGF0dHJOb2RlLm93bmVyVkVsZW1lbnQuc2V0SW5uZXJUcGwoZW1iZWRUcGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7IiwiZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcyc7IiwiaW1wb3J0IHsgc2VydmljZSwgbmFtZXNwYWNlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG52YXIgc3BhY2VOYW1lID0gJ2JsYWNrYm9hcmQnO1xyXG5cclxubmFtZXNwYWNlKHNwYWNlTmFtZSkuc2VydmljZSgnJHRlbXBsYXRlQ2FjaGUnLCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHRwbENhY2hlOiB7fSxcclxuICAgICAgICBwcm9taXNlQ2FjaGU6IHt9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldFRwbEJ5VXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRwbENhY2hlW3VybF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc2VsZi50cGxDYWNoZVt1cmxdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvbWlzZUNhY2hlW3VybF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZUNhY2hlW3VybF0gPSBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb21pc2VDYWNoZVt1cmxdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRwbENhY2hlW3VybF0gPSByZXMuZGF0YSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cGxDYWNoZVt1cmxdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2VDYWNoZVt1cmxdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XHJcblxyXG51dGlscy5pbmhlcml0KEh0bWxMZXhlciwgTGV4ZXIpO1xyXG5mdW5jdGlvbiBIdG1sTGV4ZXIob3B0aW9ucykge1xyXG4gICAgSHRtbExleGVyLnN1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XHJcbn1cclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxyXG4gICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcclxufTtcclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSA9IGZ1bmN0aW9uIChjaCwgY3ApIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmV4cGVjdFN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xyXG4gICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xyXG59O1xyXG5cclxuLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRDb21tZW50ID0gZnVuY3Rpb24gKGJlZ2luLCBlbmQpIHtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XHJcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcclxufTtcclxuXHJcbi8vIGh0bWwgdGV4dFxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB8fCBjaDIgPT09ICcvJykgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dFRhZzogdHJ1ZVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBodG1sIHRhZ1xyXG5IdG1sTGV4ZXIucHJvdG90eXBlLnJlYWRUYWcgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xyXG4gICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcclxuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoIWNsb3NpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XHJcbiAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXHJcbiAgICAgICAgICAgICAgICB0YWc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcclxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuSHRtbExleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy50b2tlbnMgPSBbXTtcclxuXHJcbiAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbn07XHJcblxyXG5leHBvcnQgeyBIdG1sTGV4ZXIgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0ICogYXMgZWxlVXRpbHMgZnJvbSAnLi4vdXRpbGl0eS9lbGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBHZXRQcm9wZXJ0eUhhbmRsZXIgfSBmcm9tICcuLi91dGlsaXR5L2hhbmRsZXInO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IGNvbXB1dGUsIHBhcnNlIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG4vLyAvLyBXaW5kb3cgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWxvYWQnOlxyXG4vLyBjYXNlICdvbi11bmxvYWQnOlxyXG4vLyAvLyBGb3JtIEVsZW1lbnQgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XHJcbi8vIGNhc2UgJ29uLXN1Ym1pdCc6XHJcbi8vIGNhc2UgJ29uLXJlc2V0JzpcclxuLy8gY2FzZSAnb24tc2VsZWN0JzpcclxuLy8gY2FzZSAnb24tYmx1cic6XHJcbi8vIGNhc2UgJ29uLWZvY3VzJzpcclxuLy8gLy8gSW1hZ2UgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWFib3J0JzpcclxuLy8gLy8gS2V5Ym9hcmQgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxyXG4vLyBjYXNlICdvbi1rZXlwcmVzcyc6XHJcbi8vIGNhc2UgJ29uLWtleXVwJzpcclxuLy8gLy8gTW91c2UgRXZlbnRzXHJcbi8vIGNhc2UgJ29uLWNsaWNrJzpcclxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxyXG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxyXG4vLyBjYXNlICdvbi1tb3VzZW1vdmUnOlxyXG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XHJcbi8vIGNhc2UgJ29uLW1vdXNldXAnOlxyXG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcclxudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xyXG52YXIgV05vZGVUeXBlID0ge1xyXG4gICAgZWxlbWVudDogMSxcclxuICAgIGF0dHJpYnV0ZTogMixcclxuICAgIHRleHQ6IDMsXHJcbiAgICBjZGF0YVNlY3Rpb246IDQsXHJcbiAgICBlbnRpdHlSZWZlcmVuY2U6IDUsXHJcbiAgICBlbnRpdHk6IDYsXHJcbiAgICBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXHJcbiAgICBjb21tZW50OiA4LFxyXG4gICAgZG9jdW1lbnQ6IDksXHJcbiAgICBkb2N1bWVudFR5cGU6IDEwLFxyXG4gICAgZG9jdW1lbnRGcmFnbWVudDogMTEsXHJcbiAgICBub3RhdGlvbjogMTIsXHJcbiAgICBjdXN0b206IDEwMVxyXG59O1xyXG5cclxuLy8gYmFzaWMgbm9kZVxyXG5mdW5jdGlvbiBWTm9kZSh0eXBlLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgdGhpcy5ub2RlVHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcclxuICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxuICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XHJcbiAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcclxuICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XHJcbiAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyVkRvY3VtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG59XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJHB1c2hDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJGJ1aWxkU2libGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuJGJ1aWxkU2libGluZygpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJGNsZWFyUGFyZW50QW5kU2libGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLiRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLiRyZW1vdmUoKTtcclxuICAgIHRoaXMuJGNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xyXG4gICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xyXG4gICAgdGhpcy5vd25lclZEb2N1bWVudCA9IG51bGw7XHJcbiAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24obmFtZSl7XHJcbiAgICByZXR1cm4gbmV3IEVsZW1lbnROb2RlKG5hbWUpO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmNyZWF0ZUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgcmV0dXJuIG5ldyBBdHRyTm9kZShuYW1lKTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5jcmVhdGVDdXN0b20gPSBmdW5jdGlvbiAobmFtZSwgbGlua2VyKSB7XHJcbiAgICByZXR1cm4gbmV3IEN1c3RvbU5vZGUobmFtZSwgbGlua2VyKTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5oYXNDaGlsZE5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuY2xlYXJDaGlsZE5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xyXG4gICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcclxuICAgIH1cclxuICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgaWYocmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcclxuICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XHJcbiAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICBpZiAocmVmQ2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCl7XHJcbiAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgIGNoaWxkLm5leHRTaWJsaW5nLnByZXZpb3VzU2libGluZyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgIH1cclxuXHJcbiAgICBpZihpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtMSkpe1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQgPSBmdW5jdGlvbiAocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcclxuXHJcbiAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZkNoaWxkLiRjbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XHJcbiAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLmNvbXBpbGUob3B0aW9ucyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5kaXJlY3RpdmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGQuZGlyZWN0aXZlcygpO1xyXG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuZ2V0RGlyZWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLmxpbmsoc2NvcGUpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuYWZ0ZXJMaW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuYWZ0ZXJMaW5rKCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5oYXNDaGFuZ2UoKSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuaGFzQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLiRkZXN0cm95KCk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEN1c3RvbU5vZGUsIFZOb2RlKTtcclxuLy8gY3VzdG9tIG5vZGVcclxuZnVuY3Rpb24gQ3VzdG9tTm9kZShuYW1lLCBsaW5rZXIpIHtcclxuICAgIEN1c3RvbU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBXTm9kZVR5cGUuY3VzdG9tLCBuYW1lKTtcclxuICAgIHRoaXMubGlua2VyID0gbGlua2VyO1xyXG59XHJcblxyXG5DdXN0b21Ob2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24oc2NvcGUpIHtcclxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgIHJldHVybiB0aGlzLmxpbmtlci5jYWxsKHRoaXMsIHNjb3BlKTtcclxufTtcclxuXHJcbkN1c3RvbU5vZGUucHJvdG90eXBlLmFmdGVyTGluayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkluc2VydC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ3VzdG9tTm9kZS5wcm90b3R5cGUuZGV0ZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uRGV0ZWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5DdXN0b21Ob2RlLnByb3RvdHlwZS5oYXNDaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25IYXNDaGFuZ2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25IYXNDaGFuZ2UuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkN1c3RvbU5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vblVwZGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ3VzdG9tTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLiRkZXN0cm95KCk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KERvY3VtZW50Tm9kZSwgVk5vZGUpO1xyXG4vLyBkb2N1bWVudCBub2RlXHJcbmZ1bmN0aW9uIERvY3VtZW50Tm9kZSgpIHtcclxuICAgIEN1c3RvbU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBXTm9kZVR5cGUuZG9jdW1lbnQpO1xyXG59XHJcblxyXG51dGlscy5pbmhlcml0KEVsZW1lbnROb2RlLCBWTm9kZSk7XHJcbi8vIGVsZW1lbnQgbm9kZVxyXG5mdW5jdGlvbiBFbGVtZW50Tm9kZShuYW1lKSB7XHJcbiAgICBFbGVtZW50Tm9kZS5zdXBlci5jYWxsKHRoaXMsIFdOb2RlVHlwZS5lbGVtZW50LCBuYW1lKTtcclxuICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XHJcbiAgICB0aGlzLmlzQ29tcG9uZW50ID0gZmFsc2U7XHJcbn1cclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS4kcHVzaEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICBhdHRyLm93bmVyVkVsZW1lbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cik7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuaGFzQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gbWF0Y2hlc1swXTtcclxuICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gbmV3IEF0dHJOb2RlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHRhcmdldC5vd25lclZFbGVtZW50ID0gdGhpcztcclxuICAgICAgICB0YXJnZXQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIHZhciB0YXJnZXQgPSBbXSwgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKGtleSBpbnN0YW5jZW9mIEF0dHJOb2RlKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hdHRyaWJ1dGVzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHNlbGYuYXR0cmlidXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcclxuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLmF0dHJpYnV0ZXMuaW5kZXhPZihtYXRjaCk7XHJcbiAgICAgICAgICAgIG1hdGNoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5hdHRyaWJ1dGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5hcHBlbmRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgaWYgKGF0dHIub3duZXJWRWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0ci5vd25lclZFbGVtZW50ID0gdGhpcztcclxuICAgIGF0dHIuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xyXG4gICAgcmV0dXJuIGF0dHI7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0T3V0ZXJUcGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXR0clRwbCA9ICcnLCBjaGlsZFRwbCA9ICcnO1xyXG5cclxuICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgYXR0clRwbCArPSAnICc7XHJcbiAgICAgICAgYXR0clRwbCArPSBhdHRyLmdldE91dGVyVHBsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHRwbCA9ICc8JyArIHRoaXMubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XHJcblxyXG4gICAgaWYoIXRoaXMuc2VsZkNsb3NlZCl7XHJcbiAgICAgICAgdHBsICs9ICgnPC8nICsgdGhpcy5ub2RlTmFtZSArICc+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRwbDtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5nZXRJbm5lclRwbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaGlsZFRwbCA9ICcnO1xyXG5cclxuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkVHBsICs9IGNoaWxkLmdldE91dGVyVHBsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGRUcGw7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuc2V0T3V0ZXJUcGwgPSBmdW5jdGlvbiAodHBsKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5zZXRJbm5lclRwbCA9IGZ1bmN0aW9uICh0cGwpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XHJcbiAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5nZXREaXJlY3RpdmUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgdGhpcy5hdHRyaWJ1dGVzLm1hcChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIHJldHVybiBhdHRyLmRpcmVjdGl2ZXMoKTtcclxuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS4kJGtleSA9PT0ga2V5O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICB0aGlzLmNvbXBpbGVPcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgYXR0ci5jb21waWxlKG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzQ29tcG9uZW50ID0gb3B0aW9ucy5jb250YWluc0NvbXBvbmVudCh0aGlzLm5vZGVOYW1lKTtcclxuICAgIGlmICghdGhpcy5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5jb21waWxlKG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmRpcmVjdGl2ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgdGhpcy5hdHRyaWJ1dGVzLm1hcChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIHJldHVybiBhdHRyLmRpcmVjdGl2ZXMoKTtcclxuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGhpcy5jb21wb25lbnQgPT0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmRpcmVjdGl2ZXMoKTtcclxuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5zY29wZSA9IHNjb3BlO1xyXG4gICAgc2VsZi5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxmLm5vZGVOYW1lKTtcclxuXHJcbiAgICBpZih0aGlzLmlzQ29tcG9uZW50KXtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29tcGlsZU9wdGlvbnMuY3JlYXRlQ29tcG9uZW50KHRoaXMubm9kZU5hbWUpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LiRiaW5kVk5vZGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGYuY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBhdHRyLmxpbmsoc2NvcGUsIHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZC5saW5rKHNjb3BlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzY29wZS4kJGNoaWxkQ29tcG9uZW50cy5wdXNoKHNlbGYuY29tcG9uZW50KTtcclxuICAgICAgICBzZWxmLmNvbXBvbmVudC4kJHBhcmVudENvbXBvbmVudCA9IHNjb3BlO1xyXG4gICAgICAgIHNlbGYuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHIubGluayhzY29wZSwgc2VsZi5lbGVtZW50LCBzZWxmLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZi5jb21wb25lbnQuJG1vdW50KHNlbGYuZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlbGYuZWxlbWVudDtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5hZnRlckxpbmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGF0dHIuYWZ0ZXJMaW5rKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5hZnRlckxpbmsoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGF0dHIuZGV0ZWN0KCk7XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRldGVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoaXNGcm9tQ29tcG9uZW50KSB7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGlzRnJvbUNvbXBvbmVudCl7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgYXR0ci5kZXN0cm95KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucmVtb3ZlRG9tRWxlbWVudCgpO1xyXG4gICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG51bGw7XHJcbiAgICB0aGlzLiRkZXN0cm95KCk7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKHRoaXMuY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC4kZGlzcG9zZSh0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwb3NlKCk7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0RG9tRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUucmVtb3ZlRG9tRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKHRoaXMuZWxlbWVudCAhPSBudWxsKXtcclxuICAgICAgICBlbGVVdGlscy5yZW1vdmVOb2RlKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEF0dHJOb2RlLCBWTm9kZSk7XHJcbi8vIGF0dHJpYnV0ZSBub2RlXHJcbmZ1bmN0aW9uIEF0dHJOb2RlKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBBdHRyTm9kZS5zdXBlci5jYWxsKHRoaXMsIFdOb2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcclxuICAgIHRoaXMucXVvdGUgPSAnXCInO1xyXG4gICAgdGhpcy5vcmdOb2RlTmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmlzRXZlbnQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNCaW5kaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRG9tRXZlbnQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNEaXJlY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcclxuICAgIHRoaXMub3duZXJWRWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHRoaXMuY29tcGlsZU9wdGlvbnMgPSBudWxsO1xyXG4gICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcclxufVxyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmJlbG9uZ1RvID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMub3JnTm9kZU5hbWUgPT09IGtleTtcclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY29tcGlsZSh0aGlzLm9wdGlvbnMpO1xyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdGhpcy5jb21waWxlT3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmlzRXZlbnQgPSB0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKTtcclxuICAgIHRoaXMuaXNCaW5kaW5nID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCc6Jyk7XHJcbiAgICB0aGlzLmlzRGlyZWN0aXZlID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCcqJyk7XHJcbiAgICBpZiAodGhpcy5pc0V2ZW50IHx8IHRoaXMuaXNCaW5kaW5nIHx8IHRoaXMuaXNEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLm5vZGVOYW1lID0gdGhpcy5ub2RlTmFtZS5zdWJzdHIoMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIHRoaXMubm9kZU5hbWUpO1xyXG4gICAgdGhpcy5iaW5kaW5nLnNldE91dHB1dCh0aGlzLmlzRXZlbnQpO1xyXG4gICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUsIHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5zRGlyZWN0aXZlKHRoaXMubm9kZU5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlID0gb3B0aW9ucy5jcmVhdGVEaXJlY3RpdmUodGhpcy5ub2RlTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRiaW5kVk5vZGUodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZGluZy5zZXRPdXRwdXQodGhpcy5kaXJlY3RpdmUub3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB0aGlzLm5vZGVOYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNjb3BlLCBvd25lckVsZW1lbnQsIG93bmVyQ29tcG9uZW50KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgdGhpcy5vd25lckVsZW1lbnQgPSBvd25lckVsZW1lbnQ7XHJcbiAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gb3duZXJDb21wb25lbnQ7XHJcbiAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RvbUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYub3duZXJFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvd25lckNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG93bmVyQ29tcG9uZW50LiRsaXN0ZW4odGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUsIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6IHNlbGYub3duZXJFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBzY29wZS4kJGNoaWxkRGlyZWN0aXZlcy5wdXNoKHRoaXMuZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJHNldEJpbmRpbmcodGhpcy5iaW5kaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3duZXJDb21wb25lbnQgIT0gbnVsbCAmJiBvd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgICAgICBvd25lckNvbXBvbmVudC4kc2V0QXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5nLndhdGNoUHJvcHMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmRldGVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmRldGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGl2ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGV0ZWN0KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm93bmVyQ29tcG9uZW50KTtcclxuICAgIH1cclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5oYXNDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLm93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgdGhpcy5vd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQuJHNldEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5vd25lckVsZW1lbnQsIHRoaXMubm9kZU5hbWUsIHRoaXMuYmluZGluZy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIHRoaXMubm9kZU5hbWUgPT09ICd2YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LnZhbHVlID0gdGhpcy5iaW5kaW5nLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmFmdGVyTGluayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlLiRpbnNlcnQodGhpcy5vd25lckVsZW1lbnQsIHRoaXMub3duZXJDb21wb25lbnQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmRpcmVjdGl2ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmUgPT0gbnVsbCA/IFtdIDogW3RoaXMuZGlyZWN0aXZlXTtcclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5nZXRPdXRlclRwbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLm9yZ05vZGVOYW1lICsgKHRoaXMubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB0aGlzLnF1b3RlICsgdGhpcy5ub2RlVmFsdWUgKyB0aGlzLnF1b3RlKSk7XHJcbn07XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuZ2V0SW5uZXJUcGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSArICh0aGlzLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdGhpcy5xdW90ZSArIHRoaXMubm9kZVZhbHVlICsgdGhpcy5xdW90ZSkpO1xyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoaXNGcm9tRGlyZWN0aXZlKSB7XHJcbiAgICBpZihpc0Zyb21EaXJlY3RpdmUpe1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJpbmRpbmcuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5iaW5kaW5nID0gbnVsbDtcclxuICAgIHRoaXMub3duZXJWRWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyRWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHRoaXMuJGRlc3Ryb3koKTtcclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKXtcclxuICAgIGlmKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkaXNwb3NlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpc3Bvc2UoKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoVGV4dE5vZGUsIFZOb2RlKTtcclxuLy8gdGV4dCBub2RlXHJcbmZ1bmN0aW9uIFRleHROb2RlKCkge1xyXG4gICAgVGV4dE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBXTm9kZVR5cGUudGV4dCwgJyN0ZXh0Jyk7XHJcbiAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxufVxyXG5cclxuVGV4dE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSk7XHJcbn07XHJcblxyXG5UZXh0Tm9kZS5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuYmluZGluZy5zZXRTY29wZShzY29wZSk7XHJcblxyXG4gICAgdGhpcy5iaW5kaW5nLndhdGNoUHJvcHMoZnVuY3Rpb24oKXtcclxuICAgICAgICBzZWxmLmRldGVjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xyXG59O1xyXG5cclxuVGV4dE5vZGUucHJvdG90eXBlLmhhc0NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XHJcbn07XHJcblxyXG5UZXh0Tm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZWxlVXRpbHMucmVwbGFjZU5vZGUodGhpcy5lbGVtZW50LCB0aGlzLnJlbmRlcih0aGlzLmJpbmRpbmcudmFsdWUpKTtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbn07XHJcblxyXG5UZXh0Tm9kZS5wcm90b3R5cGUuZ2V0T3V0ZXJUcGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XHJcbn07XHJcblxyXG5UZXh0Tm9kZS5wcm90b3R5cGUuZ2V0SW5uZXJUcGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XHJcbn07XHJcblxyXG5UZXh0Tm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuYmluZGluZy5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmJpbmRpbmcgPSBudWxsO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuJGRlc3Ryb3koKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQ29tbWVudE5vZGUsIFZOb2RlKTtcclxuLy8gY29tbWVudCBub2RlXHJcbmZ1bmN0aW9uIENvbW1lbnROb2RlKCkge1xyXG4gICAgQ29tbWVudE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBXTm9kZVR5cGUuY29tbWVudCwgJyNjb21tZW50Jyk7XHJcbn1cclxuXHJcbkNvbW1lbnROb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5ub2RlVmFsdWUpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDRGF0YVNlY3Rpb25Ob2RlLCBWTm9kZSk7XHJcbi8vIENEYXRhU2VjdGlvbiBub2RlXHJcbmZ1bmN0aW9uIENEYXRhU2VjdGlvbk5vZGUoKSB7XHJcbiAgICBDRGF0YVNlY3Rpb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgV05vZGVUeXBlLmNkYXRhU2VjdGlvbik7XHJcbn1cclxuXHJcbnV0aWxzLmluaGVyaXQoRG9jdW1lbnRUeXBlTm9kZSwgVk5vZGUpO1xyXG4vLyBkb2N1bWVudCB0eXBlIG5vZGVcclxuZnVuY3Rpb24gRG9jdW1lbnRUeXBlTm9kZSgpIHtcclxuICAgIERvY3VtZW50VHlwZU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBXTm9kZVR5cGUuZG9jdW1lbnRUeXBlKTtcclxufVxyXG5cclxudXRpbHMuaW5oZXJpdChEb2N1bWVudEZyYWdtZW50Tm9kZSwgVk5vZGUpO1xyXG4vLyBkb2N1bWVudCBmcmFnbWVudCBub2RlXHJcbmZ1bmN0aW9uIERvY3VtZW50RnJhZ21lbnROb2RlKCkge1xyXG4gICAgRG9jdW1lbnRGcmFnbWVudE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBXTm9kZVR5cGUuZG9jdW1lbnRGcmFnbWVudCwgJyNkb2N1bWVudC1mcmFnbWVudCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFeHBOb2RlKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xyXG59XHJcblxyXG5FeHBOb2RlLnByb3RvdHlwZS5nZXRQcm9wcyA9IGZ1bmN0aW9uKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcHJvcHMgPSBbXTtcclxuICAgIGNvbXB1dGUodGhpcy50ZXh0LCBuZXcgUHJveHkoc2NvcGUsIG5ldyBHZXRQcm9wZXJ0eUhhbmRsZXIocHJvcHMsICcnLCB0cnVlKSksIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHByb3BzO1xyXG59O1xyXG5cclxuRXhwTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlID0gY29tcHV0ZSh0aGlzLnRleHQsIHNjb3BlLCBvcHRpb25zKTtcclxufTtcclxuXHJcbkV4cE5vZGUucHJvdG90eXBlLmRldGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSB0aGlzLm9sZFZhbHVlO1xyXG59O1xyXG5cclxuRXhwTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5wcm9wcyA9IG51bGw7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBCaW5kaW5nKCkge1xyXG4gICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICB0aGlzLnRleHQgPSAnJztcclxuICAgIHRoaXMuaXNFeHAgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcclxuICAgIHRoaXMucmlnaHRTdHIgPSAnJztcclxuICAgIHRoaXMub3V0cHV0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMuY2hhbmdlID0gbmV3IE1lc3NlbmdlcigpO1xyXG59XHJcblxyXG5CaW5kaW5nLnByb3RvdHlwZS5zZXRTY29wZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgdGhpcy5zY29wZSA9IHZhbHVlO1xyXG59O1xyXG5cclxuQmluZGluZy5wcm90b3R5cGUuc2V0T3V0cHV0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICB0aGlzLm91dHB1dCA9IHZhbHVlO1xyXG59O1xyXG5cclxuQmluZGluZy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICh0ZXh0LCBpc0V4cCkge1xyXG4gICAgaWYodGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLmlzRXhwID0gaXNFeHA7XHJcblxyXG4gICAgaWYgKGlzRXhwKSB7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZSh0ZXh0KSxcclxuICAgICAgICAgICAgbGVmdFN0cjogJydcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcclxuICAgIHZhciBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuICAgIHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcclxuXHJcbiAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh7XHJcbiAgICAgICAgICAgIGluZGV4OiBtYXRjaC5pbmRleCxcclxuICAgICAgICAgICAgZXhwOiBuZXcgRXhwTm9kZShtYXRjaFsxXSksXHJcbiAgICAgICAgICAgIGxlZnRTdHI6IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcbiAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID4gMCAmJiBsYXN0SW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMucmlnaHRTdHIgPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQmluZGluZy5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudGV4dDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRXhwICYmIHRoaXMuc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHNbMF0uZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnNlZ21lbnRzWzBdLmV4cC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgc2VnbWVudC5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gKHNlZ21lbnQubGVmdFN0ciArIHNlZ21lbnQuZXhwLnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0ZXh0ICsgdGhpcy5yaWdodFN0cjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbn07XHJcblxyXG5CaW5kaW5nLnByb3RvdHlwZS53YXRjaFByb3BzID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICBpZiAodGhpcy5vdXRwdXQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBwcm9wcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgIHByb3BzID0gcHJvcHMuY29uY2F0KHNlZ21lbnQuZXhwLmdldFByb3BzKHNlbGYuc2NvcGUpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICBzZWxmLnNjb3BlLiR3YXRjaChwcm9wLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlLmZpcmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChhY3Rpb24gIT0gbnVsbCkge1xyXG4gICAgICAgIHNlbGYuY2hhbmdlLm9uKGFjdGlvbik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5CaW5kaW5nLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKHRoaXMub3V0cHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5jb21wdXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5zb21lKGZ1bmN0aW9uIChzZWdtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZ21lbnQuZXhwLmRldGVjdChzZWxmLnNjb3BlLCBvcHRpb25zKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuQmluZGluZy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbihzZWdtZW50KXtcclxuICAgICAgICBzZWdtZW50LmV4cC5kZXN0cm95KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChIdG1sUGFyc2VyLCBQYXJzZXIpO1xyXG5mdW5jdGlvbiBIdG1sUGFyc2VyKGxleGVyLCBvcHRpb25zKSB7XHJcbiAgICBIdG1sUGFyc2VyLnN1cGVyLmNhbGwodGhpcywgbGV4ZXIsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgIHZhciBmYXJnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50Tm9kZSgpO1xyXG4gICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKGRvY3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IENvbW1lbnROb2RlKCk7XHJcbiAgICAgICAgICAgIGNvbW1lbnQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZmFyZ21lbnQuJHB1c2hDaGlsZChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcclxuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBmYXJnbWVudC4kcHVzaENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgIGZhcmdtZW50LiRwdXNoQ2hpbGQodGhpcy5lbGVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhcmdtZW50LiRidWlsZFNpYmxpbmcoKTtcclxuXHJcbiAgICByZXR1cm4gZmFyZ21lbnQuY2hpbGROb2RlcztcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmRvY3R5cGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuICAgIHZhciBkb2NUeXBlID0gbmV3IERvY3VtZW50VHlwZU5vZGUoKTtcclxuICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZG9jVHlwZTtcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmVsZW1lbnQgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICB2YXIgZWxlID0gbmV3IEVsZW1lbnROb2RlKCk7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgZWxlLiRwdXNoQXR0cmlidXRlKGF0dHIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuJHB1c2hDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuY2hpbGRFbGVtZW50cyA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICB2YXIgZWxlcyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xyXG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcclxuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcclxuICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlcztcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmF0dHJzID0gZnVuY3Rpb24gKHApIHtcclxuICAgIHZhciBhdHRycyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGF0dHIgPSBuZXcgQXR0ck5vZGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGF0dHIub3JnTm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXR0cnM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pbmRleCsrO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgSHRtbFBhcnNlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBjb21wb25lbnQsIGluamVjdG9yLCBpc0NvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBMZXhlciB9IGZyb20gJy4vbGV4ZXInO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IEh0bWxMZXhlciB9IGZyb20gJy4vaHRtbC1sZXhlcic7XHJcbmltcG9ydCB7IEh0bWxQYXJzZXIgfSBmcm9tICcuL2h0bWwtcGFyc2VyJztcclxuXHJcbnZhciBwYXJzZU9wdGlvbnMgPSB7XHJcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZTogZmFsc2UsXHJcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXHJcbiAgICBsaXRlcmFsczoge1xyXG4gICAgICAgIGZhbHNlOiBmYWxzZSxcclxuICAgICAgICBudWxsOiBudWxsLFxyXG4gICAgICAgIHRydWU6IHRydWUsXHJcbiAgICAgICAgdW5kZWZpbmVkOiB1bmRlZmluZWRcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcChpZE9yRWxlbWVudCwgZGVmKSB7XHJcbiAgICB2YXIgZWxlbWVudCwgZWxlbWVudElkO1xyXG5cclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhpZE9yRWxlbWVudCkpIHtcclxuICAgICAgICBlbGVtZW50SWQgPSBpZE9yRWxlbWVudDtcclxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRPckVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudElkID0gaWRPckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgIGlmIChlbGVtZW50SWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBpZCBhdHRyaWJ1dGUgZm9yIHJvb3QgY29tcG9uZW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQgPSBpZE9yRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBkZWYudGVtcGxhdGUgPSBlbGVtZW50LmlubmVySFRNTDtcclxuICAgIGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQoZWxlbWVudElkLCBkZWYpKS4kbW91bnQoaWRPckVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZShodG1sKSB7XHJcbiAgICB2YXIgbGV4ZXIgPSBuZXcgSHRtbExleGVyKHBhcnNlT3B0aW9ucyk7XHJcbiAgICB2YXIgcGFyc2VyID0gbmV3IEh0bWxQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XHJcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGh0bWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21waWxlKGh0bWwsIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgZ2V0RW1iZWRUcGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbnNEaXJlY3RpdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0aXZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0dGluZ3MgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgb3B0aW9ucyksXHJcbiAgICAgICAgYXN0Tm9kZXMgPSBwYXJzZShodG1sKTtcclxuXHJcbiAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XHJcbiAgICAgICAgYXN0Tm9kZS5jb21waWxlKHNldHRpbmdzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICBhc3ROb2RlLmRpcmVjdGl2ZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgZGlyZWN0aXZlLiRjb21waWxlKHNldHRpbmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgICAgIHNjb3BlLiQkdm5vZGVzID0gYXN0Tm9kZXM7XHJcblxyXG4gICAgICAgIGlmICghaXNDb21wb25lbnQoc2NvcGUpKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLiQkY2hpbGREaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgICAgIHNjb3BlLiQkY2hpbGRDb21wb25lbnRzID0gW107XHJcblxyXG4gICAgICAgICAgICBzY29wZS4kZGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzdE5vZGUuZGV0ZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzdE5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUubGluayhzY29wZSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWZ0ZXJMaW5rKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGUoZXhwLCBzY29wZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKGV4cCA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXhwID0gZXhwLnRyaW0oKTtcclxuICAgIGlmIChleHAubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXhwID0gZXhwLnJlcGxhY2UoJyZndDsnLCAnPicpLnJlcGxhY2UoJyZsdDsnLCAnPCcpO1xyXG4gICAgdmFyIGxleGVyID0gbmV3IExleGVyKHBhcnNlT3B0aW9ucyk7XHJcbiAgICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihsZXhlciwgcGFyc2VPcHRpb25zKTtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgb3B0aW9ucy5jcmVhdGVGaWx0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBpbmplY3Rvci5jcmVhdGVGaWx0ZXIobmFtZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZShleHApLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBib290c3RyYXAsIGNvbXBpbGUsIGNvbXB1dGUsIHBhcnNlIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcblxyXG52YXIgT1BFUkFUT1JTID0ge307XHJcbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcclxudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XHJcblxyXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xyXG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufVxyXG5cclxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcclxuICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xyXG4gICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XHJcbiAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKGNoLCBjaGFycykge1xyXG4gICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKGkpIHtcclxuICAgIHZhciBudW0gPSBpIHx8IDE7XHJcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzV2hpdGVzcGFjZSA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXHJcbiAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxyXG4gICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cclxuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoLCBjcCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmNvZGVQb2ludEF0ID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucGVla011bHRpY2hhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xyXG4gICAgaWYgKCFwZWVrKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoO1xyXG4gICAgfVxyXG4gICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xyXG4gICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcclxuICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzRXhwT3BlcmF0b3IgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS50aHJvd0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBzdGFydCwgZW5kKSB7XHJcbiAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcclxuICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkTnVtYmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG51bWJlciA9ICcnO1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcclxuICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcclxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXHJcbiAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxyXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogbnVtYmVyLFxyXG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucmVhZElkZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcclxuICAgICAgICBpZGVudGlmaWVyOiB0cnVlXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHF1b3RlKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5pbmRleCsrO1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xyXG4gICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgaWYgKGVzY2FwZSkge1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcclxuICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2lzRmlsdGVyfSBmcm9tICcuLi92aWV3JztcclxuXHJcbnZhciBBU1QgPSB7fTtcclxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XHJcbkFTVC5FeHByZXNzaW9uU3RhdGVtZW50ID0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnO1xyXG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xyXG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XHJcbkFTVC5Mb2dpY2FsRXhwcmVzc2lvbiA9ICdMb2dpY2FsRXhwcmVzc2lvbic7XHJcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xyXG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5DYWxsRXhwcmVzc2lvbiA9ICdDYWxsRXhwcmVzc2lvbic7XHJcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xyXG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcclxuQVNULkxpdGVyYWwgPSAnTGl0ZXJhbCc7XHJcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcclxuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcclxuQVNULk9iamVjdEV4cHJlc3Npb24gPSAnT2JqZWN0RXhwcmVzc2lvbic7XHJcblxyXG5mdW5jdGlvbiBBc3ROb2RlKHR5cGUpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxufVxyXG5cclxuQXN0Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxufTtcclxuXHJcbkFzdE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGludGVybmFscyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvZ3JhbU5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBQcm9ncmFtTm9kZSgpIHtcclxuICAgIFByb2dyYW1Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb2dyYW0pO1xyXG59XHJcblxyXG5Qcm9ncmFtTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXS5jb21waWxlKHNjb3BlLCBvcHRpb25zIHx8IHt9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoRXhwcmVzc2lvblN0YXRlbWVudE5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpIHtcclxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xyXG59XHJcblxyXG5FeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGludGVybmFscyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcclxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG59XHJcblxyXG5Bc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucywgeyBhc3NpZ25tZW50TGVmdDogdHJ1ZSB9KTtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcclxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcclxuICAgIHRoaXMudGVzdCA9IHRlc3Q7XHJcbiAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcclxuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XHJcbn1cclxuXHJcbkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIGlmICh0aGlzLnRlc3QuY29tcGlsZShzY29wZSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbHRlcm5hdGUuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChMb2dpY2FsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBMb2dpY2FsRXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxufVxyXG5cclxuTG9naWNhbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcclxuICAgICAgICBjYXNlICcmJic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd8fCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChCaW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEJpbmFyeUV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xyXG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQmluYXJ5RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG59XHJcblxyXG5CaW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdDtcclxuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz4nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc8PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc+PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICchPSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PT0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyE9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoVW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIFVuYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGFyZykge1xyXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5VbmFyeUV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5wcmVmaXggPSB0cnVlO1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgdGhpcy5hcmcgPSBhcmc7XHJcbn1cclxuXHJcblVuYXJ5RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQsIHZhbHVlID0gdGhpcy5hcmcuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICchJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChMaXRlcmFsTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIExpdGVyYWxOb2RlKHZhbHVlKSB7XHJcbiAgICBMaXRlcmFsTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5MaXRlcmFsKTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5cclxuTGl0ZXJhbE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQ2FsbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQ2FsbEV4cHJlc3Npb25Ob2RlKGNhbGxlZSwgYXJncykge1xyXG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcclxuICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XHJcbn1cclxuXHJcbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbGxlZS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IGNhbGxlZTogdHJ1ZSB9KTtcclxuICAgIHZhciBhcmdWYWx1ZXMgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gYXJnLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlcklucyA9IG9wdGlvbnMuY3JlYXRlRmlsdGVyKGNvbnRleHQucHJvcCk7XHJcbiAgICAgICAgaWYgKGlzRmlsdGVyKGZpbHRlcklucykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcklucy4kZXhlY3V0ZS5hcHBseShmaWx0ZXJJbnMsIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChNZW1iZXJFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIE1lbWJlckV4cHJlc3Npb25Ob2RlKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XHJcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcclxuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xyXG59XHJcblxyXG5NZW1iZXJFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICB2YXIgb2JqID0gdGhpcy5vYmplY3QuY29tcGlsZShzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialt0aGlzLnByb3BlcnR5LmNvbXBpbGUob2JqLCBvcHRpb25zLCBpbnRlcm5hbHMpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eS5jb21waWxlKG9iaiwgb3B0aW9ucywgaW50ZXJuYWxzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoSWRlbnRpZmllck5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBJZGVudGlmaWVyTm9kZShuYW1lKSB7XHJcbiAgICBJZGVudGlmaWVyTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5JZGVudGlmaWVyKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbklkZW50aWZpZXJOb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIGlmIChpbnRlcm5hbHMpIHtcclxuICAgICAgICBpZiAoaW50ZXJuYWxzLmFzc2lnbm1lbnRMZWZ0IHx8IGludGVybmFscy5jYWxsZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9iajogc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiB0aGlzLm5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW50ZXJuYWxzLnByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IHNjb3BlW3RoaXMubmFtZV07XHJcbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgb3B0aW9ucy5sb2NhbHMpIHtcclxuICAgICAgICByZXN1bHQgPSBvcHRpb25zLmxvY2Fsc1t0aGlzLm5hbWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQXJyYXlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEFycmF5RXhwcmVzc2lvbk5vZGUoKSB7XHJcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XHJcbn1cclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gUHJvcGVydHlOb2RlKCkge1xyXG4gICAgUHJvcGVydHlOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlByb3BlcnR5KTtcclxuICAgIHRoaXMua2luZCA9ICdpbml0JztcclxuICAgIHRoaXMua2V5ID0gbnVsbDtcclxuICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5Qcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiB0aGlzLmtleS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IHByb3BlcnR5S2V5OiB0cnVlIH0pLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpXHJcbiAgICB9O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChPYmplY3RFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpIHtcclxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk9iamVjdEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxufVxyXG5cclxuT2JqZWN0RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuXHJcbiAgICB0aGlzLnByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHZhciBkZWYgPSBpdGVtLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc0Fzc2lnbmFibGUoYXN0KSB7XHJcbiAgICByZXR1cm4gYXN0LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyIHx8IGFzdC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFyc2VyKGxleGVyLCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAobXNnLCB0b2tlbikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTeW50YXggRXJyb3I6IFRva2VuIFxcJycgKyB0b2tlbi50ZXh0ICsgJ1xcJycgKyBtc2cgKyAnIGF0IGNvbHVtbiAnICsgKHRva2VuLmluZGV4ICsgMSkgK1xyXG4gICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5wcm9ncmFtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbU5vZGUoKTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0uYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpO1xyXG4gICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICByZXR1cm4gZXhwO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5maWx0ZXJDaGFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xyXG4gICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5leHByZXNzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcclxuICAgICAgICBpZiAoIWlzQXNzaWduYWJsZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGEgbm9uIGwtdmFsdWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnRlcm5hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XHJcbiAgICB2YXIgYWx0ZXJuYXRlO1xyXG4gICAgdmFyIGNvbnNlcXVlbnQ7XHJcbiAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xyXG4gICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xyXG4gICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZXN0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5sb2dpY2FsT1IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8fCcpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxBTkQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xyXG4gICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZXF1YWxpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucmVsYXRpb25hbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5hZGRpdGl2ZSgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMuYWRkaXRpdmUoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuYWRkaXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcclxuICAgIHZhciB0b2tlbjtcclxuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLm11bHRpcGxpY2F0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnVuYXJ5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnByaW1hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJpbWFyeTtcclxuICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcclxuICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcclxuICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5leHQ7XHJcbiAgICB3aGlsZSAoKG5leHQgPSB0aGlzLmV4cGVjdCgnKCcsICdbJywgJy4nKSkpIHtcclxuICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaW1hcnk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChiYXNlRXhwcmVzc2lvbikge1xyXG4gICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcclxuICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbHVzIG5hbWVzcGFjZVxyXG4gICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xyXG4gICAgfSkuam9pbignLicpO1xyXG5cclxuICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XHJcblxyXG4gICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcclxuICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQXJndW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJncztcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuaWRlbnRpZmllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xyXG4gICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuY29uc3RhbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxyXG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmFycmF5RGVjbGFyYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25zdW1lKCddJyk7XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUub2JqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XHJcbiAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xyXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25zdW1lKCd9Jyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uIChlMSkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlbjtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVla1Rva2VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoZTEsIGUyLCBlMywgZTQpIHtcclxuICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnBlZWtBaGVhZCA9IGZ1bmN0aW9uIChpLCBlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcclxuICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XHJcbiAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cGVjdCA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgUGFyc2VyIH07IiwiXHJcbmZ1bmN0aW9uIGdldENoaWxkTm9kZXMobm9kZSkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGUuY2hpbGROb2RlcywgMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ2hpbGROb2Rlcyhub2RlKSB7XHJcbiAgICBnZXRDaGlsZE5vZGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVmTm9kZSwgbmV3Tm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZSk7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZWZOb2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOb2RlQmV0d2VlbihiZWdpbk5vZGUsIGVuZE5vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gYmVnaW5Ob2RlLnBhcmVudE5vZGU7XHJcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkTm9kZXMocGFyZW50Tm9kZSk7XHJcblxyXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgPT09IGJlZ2luTm9kZSAmJiBjaGlsZCAhPT0gZW5kTm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nID09PSBlbmROb2RlICYmIGNoaWxkICE9PSBiZWdpbk5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydE5vZGVBZnRlcihyZWZOb2RlLCBuZXdOb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICBpZiAocGFyZW50Tm9kZS5sYXN0Q2hpbGQgPT09IHJlZk5vZGUpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld05vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlLm5leHRTaWJsaW5nKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0Q2hpbGROb2RlcywgY2xlYXJDaGlsZE5vZGVzLCByZXBsYWNlTm9kZSwgcmVtb3ZlTm9kZSwgcmVtb3ZlTm9kZUJldHdlZW4sIGluc2VydE5vZGVBZnRlciB9OyIsImltcG9ydCB7IGlzT2JqZWN0LCBpc0FycmF5IH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBTZXRQcm9wZXJ0eUhhbmRsZXIob25jaGFuZ2UsIHBhcmVudEtleSwgZGVlcFByb3h5KSB7XHJcbiAgICB0aGlzLnNlbGZLZXkgPSAnX19zZWxmX18nO1xyXG4gICAgdGhpcy5vbmNoYW5nZSA9IG9uY2hhbmdlO1xyXG4gICAgdGhpcy5wYXJlbnRLZXkgPSBwYXJlbnRLZXk7XHJcbiAgICB0aGlzLmRlZXBQcm94eSA9IGRlZXBQcm94eTtcclxufVxyXG5cclxuU2V0UHJvcGVydHlIYW5kbGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcclxuICAgIGlmKHRoaXMuc2VsZktleSA9PT0ga2V5KXtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xyXG5cclxuICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IFNldFByb3BlcnR5SGFuZGxlcih0aGlzLm9uY2hhbmdlLCB0aGlzLnBhcmVudEtleSArIGtleSArICcuJywgdGhpcy5kZWVwUHJveHkpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5TZXRQcm9wZXJ0eUhhbmRsZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHZhbHVlW3RoaXMuc2VsZktleV07XHJcblxyXG4gICAgICAgIC8vIHZhbHVlIGlzIGEgcHJveHkgcmV0dXJuIGJ5IHRoaXMgaGFuZGxlclxyXG4gICAgICAgIGlmIChzZWxmICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzZWxmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcclxuXHJcbiAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlIHx8IChpc0FycmF5KHRhcmdldCkgJiYga2V5ID09PSAnbGVuZ3RoJykpIHtcclxuICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHtcclxuICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm9uY2hhbmdlLmZpcmVDaGFuZ2luZyh0aGlzLnBhcmVudEtleSArIGtleSwgdmFsaWRhdGlvbik7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZGF0aW9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25jaGFuZ2UuZmlyZUNoYW5nZWQodGhpcy5wYXJlbnRLZXkgKyBrZXksIHtcclxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBHZXRQcm9wZXJ0eUhhbmRsZXIocHJvcHMsIHBhcmVudEtleSwgZGVlcFByb3h5KSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnBhcmVudEtleSA9IHBhcmVudEtleTtcclxuICAgIHRoaXMuZGVlcFByb3h5ID0gZGVlcFByb3h5O1xyXG59XHJcblxyXG5HZXRQcm9wZXJ0eUhhbmRsZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xyXG4gICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XHJcbiAgICB2YXIgcHJvcCA9IHRoaXMucGFyZW50S2V5ICsga2V5O1xyXG5cclxuICAgIGlmICh0aGlzLmRlZXBQcm94eSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICB2YWx1ZSA9IG5ldyBQcm94eSh2YWx1ZSwgbmV3IEdldFByb3BlcnR5SGFuZGxlcih0aGlzLnByb3BzLCBwcm9wICsgJy4nLCB0aGlzLmRlZXBQcm94eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5wdXNoKHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFNldFByb3BlcnR5SGFuZGxlciwgR2V0UHJvcGVydHlIYW5kbGVyIH0iLCJpbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9lbGUtdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gaXNNZXNzZW5nZXIob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2VuZ2VyO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc01lc3Nlbmdlcn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBNZXNzZW5nZXIoKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XHJcbn1cclxuXHJcbk1lc3Nlbmdlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZm4pIHtcclxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChmbik7XHJcbn07XHJcblxyXG5NZXNzZW5nZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0gPT09IGZuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbk1lc3Nlbmdlci5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIChhcmdzLCBzY29wZSkge1xyXG4gICAgdmFyIHJldHVyblZhbHVlO1xyXG4gICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0aGlzLmhhbmRsZXJzW2ldLmNhbGwoc2NvcGUsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIE1lc3NlbmdlckJ1cygpIHtcclxuICAgIHRoaXMubWVzc2VuZ2VycyA9IHt9O1xyXG59XHJcblxyXG5NZXNzZW5nZXJCdXMucHJvdG90eXBlLmdldE1lc3NlbmdlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoIXRoaXMubWVzc2VuZ2Vyc1tlXSkge1xyXG4gICAgICAgIHRoaXMubWVzc2VuZ2Vyc1tlXSA9IG5ldyBNZXNzZW5nZXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm1lc3NlbmdlcnNbZV07XHJcbn07XHJcblxyXG5NZXNzZW5nZXJCdXMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGUsIGZuKSB7XHJcbiAgICB0aGlzLmdldE1lc3NlbmdlcihlKS5vbihmbik7XHJcbn07XHJcblxyXG5NZXNzZW5nZXJCdXMucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChlLCBmbikge1xyXG4gICAgdGhpcy5nZXRNZXNzZW5nZXIoZSkub2ZmKGZuKTtcclxufTtcclxuXHJcbk1lc3NlbmdlckJ1cy5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIChlLCBhcmdzLCBzY29wZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TWVzc2VuZ2VyKGUpLmZpcmUoYXJncywgc2NvcGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgTWVzc2VuZ2VyLCBNZXNzZW5nZXJCdXMgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFByb3BlcnR5Q2hhbmdlU3ViamVjdChwYXJlbnRTdWJqZWN0KXtcclxuICAgIHRoaXMucGxhaW5NYXAgPSBuZXcgTWFwKCk7XHJcbiAgICB0aGlzLnJlZ2V4TWFwID0gbmV3IE1hcCgpO1xyXG4gICAgdGhpcy5wYXJlbnRTdWJqZWN0ID0gcGFyZW50U3ViamVjdDtcclxufVxyXG5cclxuUHJvcGVydHlDaGFuZ2VTdWJqZWN0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKHByb3AsIGFjdGlvbiwgb3B0aW9ucykge1xyXG4gICAgdmFyIG1hcCA9IHV0aWxzLmlzUmVnRXhwKHByb3ApID8gdGhpcy5yZWdleE1hcCA6IHRoaXMucGxhaW5NYXA7XHJcblxyXG4gICAgaWYgKCFtYXAuaGFzKHByb3ApKSB7XHJcbiAgICAgICAgbWFwLnNldChwcm9wLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICBhY3Rpb24uYmVmb3JlQ2hhbmdlZCA9IG9wdGlvbnMuYmVmb3JlQ2hhbmdlZDtcclxuICAgIH1cclxuXHJcbiAgICBtYXAuZ2V0KHByb3ApLnB1c2goYWN0aW9uKTtcclxufTtcclxuXHJcblByb3BlcnR5Q2hhbmdlU3ViamVjdC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24ocHJvcCwgYWN0aW9uKSB7XHJcbiAgICB2YXIgbWFwID0gdXRpbHMuaXNSZWdFeHAocHJvcCkgPyB0aGlzLnJlZ2V4TWFwIDogdGhpcy5wbGFpbk1hcDtcclxuXHJcbiAgICBpZiAoIW1hcC5oYXMocHJvcCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFjdGlvbnMgPSBtYXAuZ2V0KHByb3ApO1xyXG4gICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKGFjdGlvbik7XHJcblxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufTtcclxuXHJcblByb3BlcnR5Q2hhbmdlU3ViamVjdC5wcm90b3R5cGUuZmlyZUNoYW5nZWQgPSBmdW5jdGlvbihwcm9wLCBhcmdzKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHRoaXMucGxhaW5NYXAuaGFzKHByb3ApKSB7XHJcbiAgICAgICAgdGhpcy5wbGFpbk1hcC5nZXQocHJvcCkuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCl7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xyXG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QocHJvcCkpIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmKCFhY3Rpb24uYmVmb3JlQ2hhbmdlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwoc2VsZiwgcHJvcCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmVudFN1YmplY3QgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50U3ViamVjdC5maXJlQ2hhbmdlZChwcm9wLCBhcmdzKTtcclxuICAgIH1cclxufTtcclxuXHJcblByb3BlcnR5Q2hhbmdlU3ViamVjdC5wcm90b3R5cGUuZmlyZUNoYW5naW5nID0gZnVuY3Rpb24ocHJvcCwgYXJncykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0aGlzLnBsYWluTWFwLmhhcyhwcm9wKSkge1xyXG4gICAgICAgIHRoaXMucGxhaW5NYXAuZ2V0KHByb3ApLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICBpZihhY3Rpb24uYmVmb3JlQ2hhbmdlZCl7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVnZXhNYXAuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9ucywgcGF0dGVybikge1xyXG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QocHJvcCkpIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmKGFjdGlvbi5iZWZvcmVDaGFuZ2VkKXtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY2FsbChzZWxmLCBwcm9wLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyZW50U3ViamVjdCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRTdWJqZWN0LmZpcmVDaGFuZ2luZyhwcm9wLCBhcmdzKTtcclxuICAgIH1cclxufTtcclxuXHJcblByb3BlcnR5Q2hhbmdlU3ViamVjdC5wcm90b3R5cGUuZGVzdHJveSA9ICBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMucGxhaW5NYXAuY2xlYXIoKTtcclxuICAgIHRoaXMucmVnZXhNYXAuY2xlYXIoKTtcclxuICAgIHRoaXMucGFyZW50U3ViamVjdCA9IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQcm9wZXJ0eUNoYW5nZVN1YmplY3QgfTsiLCJ2YXIgZGVidWdNb2RlID0gdHJ1ZSxcclxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcclxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAoaWdub3JlT3duIHx8IG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihwLCBvYmpbcF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWN0aW9uKG9iaiwgb2JqKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc29tZShvYmosIGFjdGlvbikge1xyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24oaW5kZXgsIG9ialtpbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24ob2JqLCBvYmopO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5KCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbaW5kZXhdO1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xyXG4gICAgICAgIGRlZXAgPSBvYmo7XHJcbiAgICAgICAgb2JqID0gYXJndW1lbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVlcCA/IGNvcHkoaXRlbSkgOiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xyXG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXdPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0ZW5kKCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSBhcmd1bWVudHNbaW5kZXhdO1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xyXG4gICAgICAgIGRlZXAgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlKCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XHJcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcclxuICAgIGZ1bmN0aW9uIEYoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgRi5wcm90b3R5cGUgPSBvO1xyXG4gICAgcmV0dXJuIG5ldyBGKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XHJcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xyXG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcclxuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xyXG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xyXG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNYXAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWFwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XHJcbiAgICB2YXIgc2FtZSA9IChvYmoxID09PSBvYmoyKTtcclxuXHJcbiAgICBpZiAoIXNhbWUpIHtcclxuICAgICAgICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoxLmxlbmd0aCA9PT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpICYmIGdldFByb3RvdHlwZU9mKG9iajEpID09PSBnZXRQcm90b3R5cGVPZihvYmoyKSkge1xyXG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xyXG4gICAgaWYgKGRlYnVnTW9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gb2JqO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gc3RyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShpdGVtKSA9PT0gbG93ZXJjYXNlKHN0cikpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAoa2V5MywgdmFsdWUzKSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNQcm9wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAoa2V5MywgdmFsdWUzKSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNQcm9wID8gdGFyZ2V0IDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UHJvcGVydHkob2JqLCBrZXksIHZhbHVlLCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFoYXNQcm9wKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25jYXQoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZvckVhY2gsXHJcbiAgICBzb21lLFxyXG4gICAgY29weSxcclxuICAgIGV4dGVuZCxcclxuICAgIG1lcmdlLFxyXG4gICAgb2JqZWN0LFxyXG4gICAgaW5oZXJpdCxcclxuICAgIGxvd2VyY2FzZSxcclxuICAgIHVwcGVyY2FzZSxcclxuICAgIGlzVW5kZWZpbmVkLFxyXG4gICAgaXNEZWZpbmVkLFxyXG4gICAgaXNPYmplY3QsXHJcbiAgICBpc0JsYW5rT2JqZWN0LFxyXG4gICAgaXNOdW1iZXIsXHJcbiAgICBpc0RhdGUsXHJcbiAgICBpc0Z1bmN0aW9uLFxyXG4gICAgaXNSZWdFeHAsXHJcbiAgICBpc0Jvb2xlYW4sXHJcbiAgICBpc0FycmF5LFxyXG4gICAgaXNTdHJpbmcsXHJcbiAgICBpc1NhbWUsXHJcbiAgICBkZWJ1ZyxcclxuICAgIGNvbnRhaW5zLFxyXG4gICAgY29udGFpbnNTdHIsXHJcbiAgICBoYXNQcm9wZXJ0eSxcclxuICAgIGdldFByb3BlcnR5LFxyXG4gICAgc2V0UHJvcGVydHksXHJcbiAgICBjb25jYXRcclxufTsiLCJpbXBvcnQgeyBpc01lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0ICogYXMgZWxlVXRpbHMgZnJvbSAnLi4vdXRpbGl0eS9lbGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eUNoYW5nZVN1YmplY3QgfSBmcm9tICcuLi91dGlsaXR5L3N1YmplY3QnO1xyXG5pbXBvcnQgeyBTZXRQcm9wZXJ0eUhhbmRsZXIgfSBmcm9tICcuLi91dGlsaXR5L2hhbmRsZXInO1xyXG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgeyBjb21waWxlIH0gZnJvbSAnLi4vcGFyc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuJCR2bm9kZXMgPSBudWxsO1xyXG4gICAgdGhpcy4kJG93bmVyVk5vZGUgPSBudWxsO1xyXG4gICAgdGhpcy4kJHBhcmVudENvbXBvbmVudCA9IG51bGw7XHJcbiAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gW107XHJcbiAgICB0aGlzLiQkY2hpbGREaXJlY3RpdmVzID0gW107XHJcbiAgICB0aGlzLiQkZGV0ZWN0VGltZW91dCA9IG51bGw7XHJcbiAgICB0aGlzLiQkcHJvcENoYW5nZWQgPSBuZXcgUHJvcGVydHlDaGFuZ2VTdWJqZWN0KCk7XHJcbn1cclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncHJveHknLCB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLCBuZXcgU2V0UHJvcGVydHlIYW5kbGVyKHRoaXMuJCRwcm9wQ2hhbmdlZCwgJycsIHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuXHJcbiAgICBpZiAodGhpcy4kJGRlZi5zdXBlckluc3RhbmNlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLiQkcHJvcENoYW5nZWQucGFyZW50U3ViamVjdCA9IHRoaXMuJCRkZWYuc3VwZXJJbnN0YW5jZS4kJHByb3BDaGFuZ2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25Jbml0KSkge1xyXG4gICAgICAgIHRoaXMuJCRkZWYub25Jbml0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRiaW5kVk5vZGUgPSBmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgIHRoaXMuJCRvd25lclZOb2RlID0gdm5vZGU7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRoYXNBdHRyID0gZnVuY3Rpb24gKHByb3ApIHtcclxuICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLiQkZGVmLnByb3BzLCBwcm9wLCB0cnVlKTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJHNldEF0dHIgPSBmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcclxuICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMucHJveHksIHByb3AsIHZhbHVlLCB0cnVlKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uQ2hhbmdlcykpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uQ2hhbmdlcy5jYWxsKHRoaXMsIHByb3AsIHZhbHVlKTtcclxuICAgIH1cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGhhc0V2ZW50ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHJldHVybiB1dGlscy5jb250YWluc1N0cih0aGlzLiQkZGVmLmV2ZW50cywgZSwgdHJ1ZSk7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRsaXN0ZW4gPSBmdW5jdGlvbiAoZSwgZm4pIHtcclxuICAgIHZhciBtZXNzZW5nZXIgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBlLCB0cnVlKTtcclxuICAgIGlmIChpc01lc3NlbmdlcihtZXNzZW5nZXIpKSB7XHJcbiAgICAgICAgbWVzc2VuZ2VyLm9uKGZuKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSArICcgaXMgbm90IGEgZXZlbnQnKTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGdldFRlbXBsYXRlID0gZnVuY3Rpb24gKHN5bmMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZihzeW5jKXtcclxuICAgICAgICByZXR1cm4gc2VsZi4kJGRlZi50ZW1wbGF0ZSB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZi4kJGRlZi50ZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLiQkZGVmLnRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZi4kJGRlZi50ZW1wbGF0ZVVybCkpIHtcclxuICAgICAgICAgICAgaW5qZWN0b3Iuc2VydmljZSgnJHRlbXBsYXRlQ2FjaGUnKS5nZXRUcGxCeVVybChzZWxmLiQkZGVmLnRlbXBsYXRlVXJsKS50aGVuKGZ1bmN0aW9uICh0cGwpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHBsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJHVzaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHZhciB1c2luZyA9IHRoaXMuJCRkZWYudXNpbmcsXHJcbiAgICAgICAgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyksXHJcbiAgICAgICAgY2xhc3NOYW1lID0gc2VnbWVudHMucG9wKCksXHJcbiAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xyXG5cclxuICAgIGlmIChzcGFjZU5hbWUgJiYgdXRpbHMuaXNPYmplY3QodXNpbmcpKSB7XHJcbiAgICAgICAgdXRpbHMuc29tZSh1c2luZywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gc3BhY2VOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gdmFsdWUgKyAnLicgKyBjbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuYW1lO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kbWFrZUNvbXBpbGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRFbWJlZFRwbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kJG93bmVyVk5vZGUuZ2V0SW5uZXJUcGwoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRhaW5zQ29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNDb21wb25lbnQoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KHNlbGYuJHVzaW5nKG5hbWUpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRhaW5zRGlyZWN0aXZlOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY29udGFpbnNEaXJlY3RpdmUoc2VsZi4kdXNpbmcobmFtZSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlRGlyZWN0aXZlOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKHNlbGYuJHVzaW5nKG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kaGFzVk5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodGhpcy4kJHZub2Rlcyk7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRmcm9tVk5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgIHRoaXMuJCR2bm9kZXMuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh2bm9kZS5nZXREb21FbGVtZW50KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZyYWdtZW50O1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kY2xlYXJWTm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgIHZub2RlLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy4kJHZub2RlcyA9IG51bGw7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRyZW5kZXIgPSBmdW5jdGlvbiAoc3luYykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBmcmFnbWVudCA9IG51bGw7XHJcblxyXG4gICAgaWYgKHN5bmMpIHtcclxuICAgICAgICBpZiAodGhpcy4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQgPSB0aGlzLiRmcm9tVk5vZGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUodGhpcy4kZ2V0VGVtcGxhdGUoc3luYyksIHRoaXMuJG1ha2VDb21waWxlT3B0aW9ucygpKSh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICBpZiAoc2VsZi4kaGFzVk5vZGVzKCkpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLiRmcm9tVk5vZGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi4kZ2V0VGVtcGxhdGUoKS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNvbXBpbGUoaHRtbCwgc2VsZi4kbWFrZUNvbXBpbGVPcHRpb25zKCkpKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmcmFnbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kcmVmcmVzaCA9IGZ1bmN0aW9uIChzeW5jKSB7XHJcbiAgICB0aGlzLiRjbGVhclZOb2RlcygpO1xyXG4gICAgcmV0dXJuIHRoaXMuJHJlbmRlcihzeW5jKTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24gKGlkT3JFbGVtZW50LCBzeW5jKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGlkT3JFbGVtZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE9yRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBlbGVtZW50ID0gaWRPckVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlVXRpbHMuY2xlYXJDaGlsZE5vZGVzKGVsZW1lbnQpO1xyXG5cclxuICAgIGlmIChzeW5jKSB7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRyZW5kZXIoc3luYykpO1xyXG4gICAgICAgIHNlbGYuJGFmdGVyVmlld0luaXQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJHJlbmRlcihzeW5jKS50aGVuKGZ1bmN0aW9uIChlbGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGUpO1xyXG4gICAgICAgICAgICBzZWxmLiRhZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRhZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kJGRlZi5hZnRlclZpZXdJbml0KSkge1xyXG4gICAgICAgIHRoaXMuJCRkZWYuYWZ0ZXJWaWV3SW5pdC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kdW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLiQkb3duZXJWTm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUuJHJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuJCRvd25lclZOb2RlLnJlbW92ZURvbUVsZW1lbnQoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuJGhhc1ZOb2RlcygpKSB7XHJcbiAgICAgICAgdGhpcy4kJHZub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICB2bm9kZS5yZW1vdmVEb21FbGVtZW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuJCRwYXJlbnRDb21wb25lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQuJHJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuJCRwYXJlbnRDb21wb25lbnQgPSBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kZGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuJCRkZXRlY3RUaW1lb3V0IHx8ICF0aGlzLiQkdm5vZGVzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuJCRkZXRlY3RUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi4kJGRldGVjdFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIHNlbGYuJCR2bm9kZXMuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICAgICAgdm5vZGUuZGV0ZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJHZhbGlkYXRlID0gZnVuY3Rpb24ocHJvcCwgYWN0aW9uKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy4kJHByb3BDaGFuZ2VkLm9uKHByb3AsIGFjdGlvbiwge1xyXG4gICAgICAgIGJlZm9yZUNoYW5nZWQ6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi4kJHByb3BDaGFuZ2VkLm9mZihwcm9wLCBhY3Rpb24pO1xyXG4gICAgfTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJHdhdGNoID0gZnVuY3Rpb24ocHJvcCwgYWN0aW9uKXtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLiQkcHJvcENoYW5nZWQub24ocHJvcCwgYWN0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgICBzZWxmLiQkcHJvcENoYW5nZWQub2ZmKHByb3AsIGFjdGlvbik7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kcmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHZhciBpbmRleCA9IHRoaXMuJCRjaGlsZENvbXBvbmVudHMuaW5kZXhPZihjaGlsZCk7XHJcblxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuJCRjaGlsZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBjaGlsZC4kJHBhcmVudENvbXBvbmVudCA9IG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRkaXNwb3NlID0gZnVuY3Rpb24gKGlzRnJvbVZOb2RlKSB7XHJcbiAgICAvLyByZW1vdmUgdmlydHVhbCBub2RlIGZpcnN0IGluIGNhc2UgaXQgdHJpZ2dlcnMgcGFyZW50IGNvbXBvbmVudCBkZXN0cm95XHJcbiAgICB0aGlzLiR1bm1vdW50KCk7XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kJGRlZi5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy4kJGRldGVjdFRpbWVvdXQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy4kJGRldGVjdFRpbWVvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJGNsZWFyVk5vZGVzKCk7XHJcbiAgICB0aGlzLiQkcHJvcENoYW5nZWQuZGVzdHJveSgpO1xyXG5cclxuICAgIGlmIChpc0Zyb21WTm9kZSkge1xyXG4gICAgICAgIHRoaXMuJCRvd25lclZOb2RlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiQkY2hpbGRDb21wb25lbnRzID0gbnVsbDtcclxuICAgIHRoaXMuJCRjaGlsZERpcmVjdGl2ZXMgPSBudWxsO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuJGRpc3Bvc2UoKTtcclxuXHJcbiAgICAvLyBkZXN0cm95IHZpcnR1YWwgbm9kZSBpbiB0aGUgZW5kIGJlY2F1c2UgaXQgbWF5IGJpbmRzIGxvZ2ljIGFib3V0IGRlc3Ryb3lcclxuICAgIGlmICh0aGlzLiQkb3duZXJWTm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy4kJG93bmVyVk5vZGUuZGlzcG9zZSh0cnVlKTtcclxuICAgICAgICB0aGlzLiQkb3duZXJWTm9kZSA9IG51bGw7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlyZWN0aXZlKCkge1xyXG4gICAgdGhpcy4kJGJpbmRpbmcgPSBudWxsO1xyXG4gICAgdGhpcy4kJHZub2RlID0gbnVsbDtcclxuICAgIHRoaXMub3V0cHV0ID0gZmFsc2U7XHJcbn1cclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uSW5pdCkpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uSW5pdC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kYmluZFZOb2RlID0gZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICB0aGlzLiQkdm5vZGUgPSB2bm9kZTtcclxufTtcclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJHNldEJpbmRpbmcgPSBmdW5jdGlvbiAoYmluZGluZykge1xyXG4gICAgdGhpcy4kJGJpbmRpbmcgPSBiaW5kaW5nO1xyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kY29tcGlsZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uQ29tcGlsZSkpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uQ29tcGlsZS5jYWxsKHRoaXMsIHRoaXMuJCR2bm9kZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiRpbnNlcnQgPSBmdW5jdGlvbiAoZWxlLCBjb20pIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25JbnNlcnQpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vbkluc2VydC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiRkZXRlY3QgPSBmdW5jdGlvbiAoZWxlLCBjb20pIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25EZXRlY3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRkZWYub25EZXRlY3QuY2FsbCh0aGlzLCBlbGUsIHRoaXMuJCRiaW5kaW5nLCBjb20pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLiQkYmluZGluZy5kZXRlY3QoKSkge1xyXG4gICAgICAgIHRoaXMuJHVwZGF0ZShlbGUsIGNvbSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiR1cGRhdGUgPSBmdW5jdGlvbiAoZWxlLCBjb20pIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25VcGRhdGUpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vblVwZGF0ZS5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kJGJpbmRpbmcsIGNvbSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiRkaXNwb3NlID0gZnVuY3Rpb24gKGlzRnJvbVZOb2RlKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uRGVzdHJveSkpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGlzRnJvbVZOb2RlKXtcclxuICAgICAgICB0aGlzLiQkdm5vZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJCRiaW5kaW5nID0gbnVsbDtcclxufTtcclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLiRkaXNwb3NlKCk7XHJcblxyXG4gICAgaWYodGhpcy4kJHZub2RlICE9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuJCR2bm9kZS5kaXNwb3NlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuJCR2bm9kZSA9IG51bGw7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsdGVyKCkge1xyXG5cclxufVxyXG5cclxuRmlsdGVyLnByb3RvdHlwZS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMpO1xyXG5cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJCRkZWYub25Jbml0KSkge1xyXG4gICAgICAgIHRoaXMuJCRkZWYub25Jbml0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5GaWx0ZXIucHJvdG90eXBlLiRleGVjdXRlID0gZnVuY3Rpb24gKGVsZSkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kJGRlZi5vbkV4ZWN1dGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRkZWYub25FeGVjdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5GaWx0ZXIucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kJGRlZi5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlZi5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcclxuaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IERpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5cclxuZnVuY3Rpb24gbmFtZXNwYWNlKG5zKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQobmFtZSwgZGVmKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpcmVjdGl2ZTogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWYgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnNlcnQ6IGRlZixcclxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogZGVmXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShuYW1lLCBkZWYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKG5hbWUsIGRlZikge1xyXG4gICAgICAgICAgICBkZWYubmFtZXNwYWNlID0gbnM7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlKG5hbWUsIGRlZik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChuYW1lLCBkZWYpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgICAgICAgICAgZGVmID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRXhlY3V0ZTogZGVmXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZi5uYW1lc3BhY2UgPSBucztcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihuYW1lLCBkZWYpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudChuYW1lLCBkZWYpIHtcclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmNvbXBvbmVudCxcclxuICAgICAgICBzdXBlckNsYXNzOiBDb21wb25lbnRcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgZGVmKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XHJcbiAgICAgICAgZGVmID0ge1xyXG4gICAgICAgICAgICBvbkluc2VydDogZGVmLFxyXG4gICAgICAgICAgICBvblVwZGF0ZTogZGVmXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcclxuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5kaXJlY3RpdmUsXHJcbiAgICAgICAgc3VwZXJDbGFzczogRGlyZWN0aXZlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyKG5hbWUsIGRlZikge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmZpbHRlcixcclxuICAgICAgICBzdXBlckNsYXNzOiBGaWx0ZXJcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGRlZikge1xyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3Quc2VydmljZSxcclxuICAgICAgICBzdXBlckNsYXNzOiBTZXJ2aWNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaXJlY3RpdmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRmlsdGVyKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZpbHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTZXJ2aWNlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNlcnZpY2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG5hbWVzcGFjZSwgaW5qZWN0b3IsIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBmaWx0ZXIsIHNlcnZpY2UsIGlzQ29tcG9uZW50LCBpc0RpcmVjdGl2ZSwgaXNGaWx0ZXIsIGlzU2VydmljZSB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xyXG5cclxudmFyIHR5cGVDb25zdCA9IHtcclxuICAgIGZpbHRlcjogJ2ZpbHRlcicsXHJcbiAgICBzZXJ2aWNlOiAnc2VydmljZScsXHJcbiAgICBjb21wb25lbnQ6ICdjb21wb25lbnQnLFxyXG4gICAgZGlyZWN0aXZlOiAnZGlyZWN0aXZlJ1xyXG59O1xyXG5cclxudmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7XHJcblxyXG5mdW5jdGlvbiBJbmplY3RvcigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0ge307XHJcbiAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHMgPSB7fTtcclxuICAgIHRoaXMuaW5zQ29udGFpbmVyID0ge307XHJcbn1cclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXRNYXBwaW5nID0gZnVuY3Rpb24gKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSA9IHt9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV07XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0SW5zdGFuY2VzID0gZnVuY3Rpb24gKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgaWYgKCF0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdKSB7XHJcbiAgICAgICAgdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV07XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlLCBjb250cmFjdE5hbWUsIGNvbnN0cnVjdG9yKSB7XHJcbiAgICBpZiAoY29udHJhY3ROYW1lLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY2hhcmFjdGVyIFwiLlwiJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcclxuXHJcbiAgICBpZiAobWFwcGluZ1tjb250cmFjdE5hbWVdID09IG51bGwpIHtcclxuICAgICAgICBtYXBwaW5nW2NvbnRyYWN0TmFtZV0gPSBbXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gbWFwcGluZ1tjb250cmFjdE5hbWVdLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRkZWYubmFtZXNwYWNlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRkZWYubmFtZXNwYWNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250cmFjdE5hbWUgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbWF0Y2hlc1swXS5wcm90b3R5cGUuJCRkZWYubmFtZXNwYWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFwcGluZ1tjb250cmFjdE5hbWVdLnB1c2goY29uc3RydWN0b3IpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSwgY29uc3RydWN0b3IpIHtcclxuICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmNvbXBvbmVudCwgY29udHJhY3ROYW1lLCBjb25zdHJ1Y3Rvcik7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUucmVnaXN0ZXJEaXJlY3RpdmUgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuZGlyZWN0aXZlLCBjb250cmFjdE5hbWUsIGNvbnN0cnVjdG9yKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUsIGNvbnRyYWN0TmFtZSwgaWdub3JlQ2FzZSkge1xyXG4gICAgdmFyIGNvbnN0cnVjdG9ycywgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xyXG4gICAgdmFyIHNlZ21lbnRzID0gY29udHJhY3ROYW1lLnNwbGl0KCcuJyk7XHJcbiAgICB2YXIgbmFtZXNwYWNlID0gJyc7XHJcblxyXG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb250cmFjdE5hbWUgPSBzZWdtZW50cy5wb3AoKTtcclxuICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlnbm9yZUNhc2UpIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShtYXBwaW5nLCBjb250cmFjdE5hbWUsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3JzID0gbWFwcGluZ1tjb250cmFjdE5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgZGVmID0gaXRlbS5wcm90b3R5cGUuJCRkZWY7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWYubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShkZWYubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY29udGFpbnNDb21wb25lbnQgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWlucyh0eXBlQ29uc3QuY29tcG9uZW50LCBjb250cmFjdE5hbWUsIHRydWUpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNvbnRhaW5zRGlyZWN0aXZlID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmRpcmVjdGl2ZSwgY29udHJhY3ROYW1lLCB0cnVlKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlLCBjb250cmFjdE5hbWUsIGlnbm9yZUNhc2UpIHtcclxuICAgIHZhciBjb25zdHJ1Y3RvcnMsIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcclxuICAgIHZhciBzZWdtZW50cyA9IGNvbnRyYWN0TmFtZS5zcGxpdCgnLicpO1xyXG4gICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29udHJhY3ROYW1lID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgY29udHJhY3ROYW1lLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9ycyA9IG1hcHBpbmdbY29udHJhY3ROYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJyAnICsgY29udHJhY3ROYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWYgPSBpdGVtLnByb3RvdHlwZS4kJGRlZjtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZi5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKGRlZi5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0TmFtZSArICcgaXMgbm90IGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbmFtZXNwYWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZXMgPSBjb25zdHJ1Y3RvcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJGRlZi5uYW1lc3BhY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsgY29udHJhY3ROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uc3RydWN0b3JzWzBdO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuY29tcG9uZW50LCBjb250cmFjdE5hbWUpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmdldERpcmVjdGl2ZSA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuZGlyZWN0aXZlLCBjb250cmFjdE5hbWUpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmdldEZpbHRlciA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3QuZmlsdGVyLCBjb250cmFjdE5hbWUpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmdldFNlcnZpY2UgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LnNlcnZpY2UsIGNvbnRyYWN0TmFtZSk7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGNvbnRyYWN0VHlwZSwgY29udHJhY3ROYW1lKSB7XHJcbiAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmdldChjb250cmFjdFR5cGUsIGNvbnRyYWN0TmFtZSksIGluc3RhbmNlO1xyXG5cclxuICAgIHN3aXRjaCAoY29udHJhY3RUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBjb250cmFjdFR5cGUuY29tcG9uZW50OlxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlQ29tcG9uZW50KGNvbnN0cnVjdG9yKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBjb250cmFjdFR5cGUuZGlyZWN0aXZlOlxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlRGlyZWN0aXZlKGNvbnN0cnVjdG9yKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBjb250cmFjdFR5cGUuZmlsdGVyOlxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlRmlsdGVyKGNvbnN0cnVjdG9yKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBjb250cmFjdFR5cGUuc2VydmljZTpcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZVNlcnZpY2UoY29uc3RydWN0b3IpOyBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpOyBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY3JlYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldENvbXBvbmVudChjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIGluc3RhbmNlLiRvbkluaXQoKTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5jcmVhdGVEaXJlY3RpdmUgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RGlyZWN0aXZlKGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgaW5zdGFuY2UuJG9uSW5pdCgpO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChjb25zdHJ1Y3Rvcikge1xyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICBpbnN0YW5jZS4kb25Jbml0KCk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY3JlYXRlU2VydmljZSA9IGZ1bmN0aW9uIChjb25zdHJ1Y3Rvcikge1xyXG4gICAgdmFyIGluc3RhbmNlLCBzZXJ2aWNlcyA9IHRoaXMuZ2V0SW5zdGFuY2VzKHR5cGVDb25zdC5zZXJ2aWNlKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldFNlcnZpY2UoY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uc3RydWN0b3IucHJvdG90eXBlLiQkZGVmLm5vblNoYXJlZCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBzZXJ2aWNlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBjb25zdHJ1Y3RvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgIGluc3RhbmNlLiRvbkluaXQoKTtcclxuICAgICAgICBzZXJ2aWNlcy5wdXNoKGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuc2VydmljZSA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZVNlcnZpY2UoY29udHJhY3ROYW1lKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXRXYWl0aW5nVG9FeHRlbmRzID0gZnVuY3Rpb24gKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgaWYgKCF0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSkge1xyXG4gICAgICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdID0gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV07XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuc2V0V2FpdGluZ1RvRXh0ZW5kcyA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUsIHZhbHVlKSB7XHJcbiAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IHZhbHVlO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmJ1aWxkQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBtYWtlQ29uc3RydWN0b3IoY29udHJhY3ROYW1lLCBkZWYsIG9wdGlvbnMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcywgY29uc3RydWN0b3IsIHdhaXRpbmdUb0V4dGVuZHMgPSBzZWxmLmdldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUpO1xyXG5cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMuZ2V0Q29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgPSBvcHRpb25zLmdldENvbnN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QodGhpcy4kJGRlZi5wcm9wcykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmV4dGVuZCh0cnVlLCB0aGlzLCB1dGlscy5jb3B5KHRydWUsIHRoaXMuJCRkZWYucHJvcHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh0aGlzLiQkZGVmLmV2ZW50cykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJCRkZWYuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmW2VdID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMuc3VwZXJDbGFzcykpIHtcclxuICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBvcHRpb25zLnN1cGVyQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHV0aWxzLmlzT2JqZWN0KGRlZi5zdXBlckluc3RhbmNlKSAmJiAoZGVmLnN1cGVySW5zdGFuY2UgaW5zdGFuY2VvZiBvcHRpb25zLnN1cGVyQ2xhc3MpKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlID0gdXRpbHMub2JqZWN0KGRlZi5zdXBlckluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRrZXkgPSBjb250cmFjdE5hbWU7XHJcblxyXG4gICAgLy8gYXBwbHkgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRlZi5leHRlbmRzKSkge1xyXG4gICAgICAgIGlmIChpbmplY3Rvci5jb250YWlucyhvcHRpb25zLmNvbnRyYWN0VHlwZSwgZGVmLmV4dGVuZHMpKSB7XHJcbiAgICAgICAgICAgIHZhciBzdXBlck9uZSA9IGluamVjdG9yLmdldChvcHRpb25zLmNvbnRyYWN0VHlwZSwgZGVmLmV4dGVuZHMpO1xyXG4gICAgICAgICAgICB2YXIgZGVmMiA9IGV4dGVuZERlZihkZWYsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3IoY29udHJhY3ROYW1lLCBkZWYyLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3VwZXJOYW1lOiBkZWYuZXh0ZW5kcyxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoc3VwZXJPbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmMiA9IGV4dGVuZERlZihkZWYsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3Rvcihjb250cmFjdE5hbWUsIGRlZjIsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVtYWluQ29uc3RydWN0b3IoY29udHJhY3ROYW1lLCBkZWYsIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBleHRlbmREZWYoZGVmLCBzdXBlck9uZSkge1xyXG4gICAgICAgIGlmIChzdXBlck9uZS5wcm90b3R5cGUuJCRkZWYgJiYgc3VwZXJPbmUucHJvdG90eXBlLiQkZGVmLnByb3RlY3RlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob3B0aW9ucy5jb250cmFjdFR5cGUgKyAnOiAnICsgZGVmLmV4dGVuZHMgKyAnIGlzIHByb3RlY3RlZCwgaXQgaXMgbm90IGFsbG93ZWQgdG8gZXh0ZW5kIScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRydWUsIHV0aWxzLmNvcHkodHJ1ZSwgc3VwZXJPbmUucHJvdG90eXBlLiQkZGVmKSwgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1haW5Db25zdHJ1Y3RvcihuYW1lLCBkZWYsIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkZGVmID0gZGVmO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xyXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChkZWYubWV0aG9kcykpIHtcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgZGVmLm1ldGhvZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50XHJcbiAgICAgICAgaWYoIWRlZi5sb2NhbCl7XHJcbiAgICAgICAgICAgIGluamVjdG9yLnJlZ2lzdGVyKG9wdGlvbnMuY29udHJhY3RUeXBlLCBuYW1lLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhbnkgY29tcG9uZW50IGV4dGVuZHMgY3VycmVudCBjb21wb25lbnRcclxuICAgICAgICB2YXIgd2FpdGluZ1RvRXh0ZW5kczIgPSBbXTtcclxuICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uc3VwZXJOYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNhbGxiYWNrLmNhbGwobnVsbCwgY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kczIucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYuc2V0V2FpdGluZ1RvRXh0ZW5kcyhvcHRpb25zLmNvbnRyYWN0VHlwZSwgd2FpdGluZ1RvRXh0ZW5kczIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5pbmplY3RTZXJ2aWNlcyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICh1dGlscy5pc09iamVjdChpbnN0YW5jZS4kJGRlZi5pbmplY3QpKSB7XHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaChpbnN0YW5jZS4kJGRlZi5pbmplY3QsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlW2tleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdHlwZUNvbnN0LCBJbmplY3RvciwgaW5qZWN0b3IgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHtpbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlKCkge1xyXG5cclxufVxyXG5cclxuU2VydmljZS5wcm90b3R5cGUuJG9uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uSW5pdCkpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uSW5pdC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuU2VydmljZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiQkZGVmLm9uRGVzdHJveSkpIHtcclxuICAgICAgICB0aGlzLiQkZGVmLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fOyJdLCJzb3VyY2VSb290IjoiIn0=