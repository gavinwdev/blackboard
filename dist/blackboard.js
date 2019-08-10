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
/*! exports provided: isMessenger, injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService, bootstrap, compile, compute, parse, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["clearChildNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["replaceNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeNodeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["insertNodeAfter"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view/index.js");
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

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-selected', makeAttrSetter('selected'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-disabled', makeAttrSetter('disabled'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-checked', makeAttrSetter('checked'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-readonly', makeAttrSetter('readonly'));

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-style', function (ele, binding) {
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
    }
    else {
        throw new Error('Parameter of b-style should be string or object');
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-show', function (ele, binding) {
    ele.style.display = binding.compute() ? 'initial' : 'none';
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-hide', function (el, binding) {
    el.style.display = binding.compute() ? 'none' : 'initial';
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-if', {
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

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-switch', {
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

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-switch-default', {
    props: {
        attrNode: null,
        comment: null
    },
    methods: {
        isMatch: function () {
            var match = true, vEle = this.attrNode.ownerVElement;

            while (vEle.previousSibling != null && match){
                var whenDir = vEle.previousSibling.searchDir('b-switch-when');

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

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-switch-when', {
    props: {
        isMatch: false,
        attrNode: null,
        comment: null
    },
    methods: {
        updateIsMatch: function (ele, binding) {
            var vEle = this.attrNode.ownerVElement;
            var switchDir = vEle.parentNode.searchDir('b-switch');

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

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-bind', function(ele, binding){
    ele.innerText = binding.compute();
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-model', {
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
                _utility__WEBPACK_IMPORTED_MODULE_2__["setProperty"](binding.scope, binding.text, e.target.value);
            });
        }
        else {
            if (_utility__WEBPACK_IMPORTED_MODULE_2__["isMessenger"](com.change)) {
                com.change.on(function (e, args) {
                    _utility__WEBPACK_IMPORTED_MODULE_2__["setProperty"](binding.scope, binding.text, args.newvalue);
                });
            }
            throw new Error('Compoent ' + com.$key + 'must define [change] event');
        }
    },
    onUpdate: function (ele, binding, com) {
        this.update(ele, binding, com);
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-repeat', {
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

        var currentScope, currentItems, start, end, childScopes = [];
        var tpl = eleNode.getOuterTpl();
        var custom = eleNode.createCustom('b-repeat', function (scope) {
            var fragment = document.createDocumentFragment();
            currentScope = scope;
            setCurrentItems(Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compute"])(itemsExp, currentScope));
            start = document.createComment('start: b-repeat');
            end = document.createComment('end: b-repeat');
            fragment.appendChild(start);
            fragment.appendChild(end);
            return fragment;
        });

        eleNode.parentNode.replaceChild(eleNode, custom);

        custom.onInsert = function () {
            build(currentItems);
        };

        custom.onDetect = function () {
            var items = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compute"])(itemsExp, currentScope);

            if (hasChange(currentItems, items)) {
                setCurrentItems(items);
                build(currentItems);
            }
            else {
                childScopes.forEach(function (childScope) {
                    childScope.$detect();
                });
            }
        };

        custom.onDestroy = function () {
            childScopes.forEach(function (childScope) {
                childScope.$destroy();
            });
            childScopes = null;
            eleNode = null;
            currentScope = null;
            currentItems = null;
            start = null;
            end = null;
            custom = null;
        };

        function hasChange(newArr, oldArr) {
            return !_utility__WEBPACK_IMPORTED_MODULE_2__["isSame"](newArr, oldArr);
        }

        function setCurrentItems(value) {
            if (_utility__WEBPACK_IMPORTED_MODULE_2__["isArray"](value)) {
                currentItems = _utility__WEBPACK_IMPORTED_MODULE_2__["copy"](value);
            }
            else {
                currentItems = [];
            }
        }

        function build(items) {
            var fragment = document.createDocumentFragment();

            ChildScope.prototype = currentScope;
            function ChildScope(value) {
                this[itemExp] = value;
            }

            childScopes.forEach(function (childScope) {
                childScope.$destroy();
            });
            childScopes = [];
            _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](items, function (key, item) {
                var childScope = new ChildScope(item);
                var element = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compile"])(tpl, options)(childScope);
                childScopes.push(childScope);
                fragment.appendChild(element);
            });

            _utility__WEBPACK_IMPORTED_MODULE_2__["removeNodeBetween"](start, end);
            end.parentNode.insertBefore(fragment, end);
        }
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-embed', {
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
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./src/inner/directives.js");
/* empty/unused harmony star reexport */

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
    return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch) || ch === '-';
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
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/parser/parser.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/parser/index.js");






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

VNode.$destroy = function (self) {
    self.childNodes.length = 0;
    self.parentNode = null;
    self.previousSibling = null;
    self.nextSibling = null;
    self.firstChild = null;
    self.lastChild = null;
    self.ownerVDocument = null;
    self.scope = null;
};

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

VNode.prototype.hasChildNodes = function () {
    return this.childNodes.length !== 0;
};

VNode.prototype.clearChildNodes = function () {
    this.childNodes.forEach(function (child) {
        child.destroy();
    });
    this.childNodes.length = 0;
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

VNode.prototype.appendChild = function (child) {
    if (child.parentNode != null) {
        throw new Error('Append child is not new');
    }

    child.parentNode = this;

    if (this.childNodes.length === 0) {
        this.firstChild = child;
    }
    else {
        this.lastChild.nextSibling = child;
        child.previousSibling = this.lastChild;
    }

    child.compile();
    this.lastChild = child;
    this.childNodes.push(child);
};

VNode.prototype.insertBefore = function (refChild, newChild) {
    if (newChild.parentNode != null) {
        throw new Error('Insert child is not new');
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

    newChild.compile();
    this.childNodes.splice(index, 0, newChild);
};

VNode.prototype.insertAfter = function (refChild, newChild) {
    if (refChild.nextSibling == null) {
        this.appendChild(newChild);
    }
    else {
        this.insertBefore(refChild.nextSibling, newChild);
    }
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

    child.destroy();
    this.childNodes.splice(index, 1);

    return child;
};

VNode.prototype.replaceChild = function (refChild, newChild) {
    if (newChild.parentNode != null) {
        throw new Error('Replace child is not new');
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

    refChild.destroy();
    newChild.compile();
    this.childNodes.splice(index, 1, newChild);
};

VNode.prototype.cloneNode = function () {

};

VNode.prototype.compile = function () {
    this.childNodes.forEach(function (child) {
        child.compile();
    });
};

VNode.prototype.getDir = function () {
    var result = [];
    this.childNodes.map(function (child) {
        return child.getDir();
    }).forEach(function (item) {
        result = result.concat(item);
    });
    return result;
};

VNode.prototype.searchDir = function () {
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
    VNode.$destroy(this);
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
    VNode.$destroy(this);
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
        target.compile();
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
    attr.compile();
    this.attributes.push(attr);
    return attr;
};

ElementNode.prototype.compile = function () {
    if (_view__WEBPACK_IMPORTED_MODULE_3__["injector"].containsComponent(this.nodeName)) {
        this.component = _view__WEBPACK_IMPORTED_MODULE_3__["injector"].createComponent(this.nodeName);
        this.component.$ownerVNode = this;
    }
    this.attributes.forEach(function (attr) {
        attr.compile();
    });
    if (this.component == null) {
        this.childNodes.forEach(function (child) {
            child.compile();
        });
    }
};

ElementNode.prototype.getDir = function () {
    var result = [];

    this.attributes.map(function (attr) {
        return attr.getDir();
    }).forEach(function (item) {
        result = result.concat(item);
    });

    if(this.component == null){
        this.childNodes.map(function (child) {
            return child.getDir();
        }).forEach(function (item) {
            result = result.concat(item);
        });
    }

    return result;
};

ElementNode.prototype.searchDir = function (selector) {
    var result = [];

    this.attributes.map(function (attr) {
        return attr.getDir();
    }).forEach(function (item) {
        result = result.concat(item);
    });

    return result.filter(function (item) {
        return item.$key === selector;
    });
};

ElementNode.prototype.link = function (scope) {
    var self = this;

    self.scope = scope;
    self.element = document.createElement(self.nodeName);

    if (self.component == null) {
        this.attributes.forEach(function (attr) {
            attr.link(scope, self.element);
        });
        self.childNodes.forEach(function (child) {
            self.element.appendChild(child.link(scope));
        });
    }
    else {
        scope.$childComponents.push(self.component);
        self.component.$parent = scope;
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
    Object(_index__WEBPACK_IMPORTED_MODULE_4__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.parentNode.insertBefore(self, vnode);
    });
    self.parentNode.removeChild(self);
};

ElementNode.prototype.setInnerTpl = function (tpl) {
    var self = this;
    this.clearChildNodes();
    Object(_index__WEBPACK_IMPORTED_MODULE_4__["parse"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.appendChild(vnode);
    });
};

ElementNode.prototype.destroy = function () {
    this.childNodes.map(function (child) {
        child.destroy();
    });
    this.attributes.map(function (attr) {
        attr.destroy();
    });
    this.attributes.length = 0;
    if (this.component != null) {
        this.component.$destroy();
        this.component = null;
    }
    this.element = null;
    VNode.$destroy(this);
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
    this.binding = new Binding();
}

AttrNode.prototype.belongTo = function (key) {
    return this.orgNodeName === key;
};

AttrNode.prototype.setValue = function (value) {
    this.nodeValue = value;
    this.compile();
}

AttrNode.prototype.compile = function () {
    this.isEvent = this.nodeName.startsWith('@');
    this.isBinding = this.nodeName.startsWith(':');
    this.isDirective = this.nodeName.startsWith('*');
    if (this.isEvent || this.isBinding || this.isDirective) {
        this.nodeName = this.nodeName.substr(1);
    }
    this.isDomEvent = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["contains"](domEvents, this.nodeName);

    if (this.isDirective) {
        if (_view__WEBPACK_IMPORTED_MODULE_3__["injector"].containsDirective(this.nodeName)) {
            this.directive = _view__WEBPACK_IMPORTED_MODULE_3__["injector"].createDirective(this.nodeName);
            this.directive.$bindNode(this);
        }
        else {
            throw new Error('directive ' + this.nodeName + ' is not defined');
        }
    }
    this.binding.setOutput(this.isEvent || (this.directive && this.directive.output));
    this.binding.bind(this.nodeValue, this.isEvent || this.isBinding || this.isDirective);
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
                        $args: null
                    }
                });
            });
        }
        else if (ownerComponent != null) {
            ownerComponent.$listen(this.nodeName, function (e, args) {
                self.binding.compute({
                    locals: {
                        $event: e,
                        $args: args
                    }
                });
            });
        }
    }
    else {
        if (this.directive) {
            scope.$directives.push(this.directive);
            this.directive.$bindValue(this.binding);
        }
        else if (ownerComponent != null && ownerComponent.$hasAttr(this.nodeName)) {
            ownerComponent.$setAttr(this.nodeName, this.binding.compute());
        }
        else {
            this.ownerElement.setAttribute(this.nodeName, this.binding.compute());
        }
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
        this.ownerComponent.$setAttr(this.nodeName, this.binding.compute());
    }
    else {
        var newValue = this.binding.compute();
        this.ownerElement.setAttribute(this.nodeName, newValue);
        if (this.ownerElement.nodeName === 'INPUT' && this.nodeName === 'value') {
            this.ownerElement.value = newValue;
        }
    }
};

AttrNode.prototype.afterLink = function () {
    if (this.directive) {
        this.directive.$insert(this.ownerElement, this.ownerComponent);
    }
};

AttrNode.prototype.getDir = function () {
    return this.directive == null ? [] : [this.directive];
};

AttrNode.prototype.getOuterTpl = function () {
    return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
};

AttrNode.prototype.getInnerTpl = function () {
    return this.orgNodeName + (this.nodeValue == null ? '' : ('=' + this.quote + this.nodeValue + this.quote));
};

AttrNode.prototype.destroy = function(){
    if(this.directive != null){
        this.directive.$destroy();
        this.directive = null;
    }
    this.binding.destroy();
    this.binding = null;
    this.ownerVElement = null;
    this.ownerElement = null;
    this.ownerComponent = null;
    VNode.$destroy(this);
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
    this.binding.setScope(scope);
    return this.render();
};

TextNode.prototype.hasChange = function () {
    return this.binding.detect();
};

TextNode.prototype.update = function () {
    _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["replaceNode"](this.element, this.render());
};

TextNode.prototype.render = function () {
    var value = this.binding.compute();
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
    VNode.$destroy(this);
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
}

ExpNode.prototype.compute = function (scope, options) {
    this.value = Object(_index__WEBPACK_IMPORTED_MODULE_4__["compute"])(this.text, scope, options);
};

ExpNode.prototype.detect = function (scope, options) {
    var oldValue = this.value;
    this.compute(scope, options);
    return !_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isSame"](this.value, oldValue);
};

function Binding() {
    this.scope = null;
    this.text = '';
    this.isExp = false;
    this.watchers = [];
    this.rightStr = '';
    this.output = false;
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
        this.watchers.push({
            exp: new ExpNode(text),
            leftStr: ''
        });
        return;
    }

    var pattern = /{{([^}]*)}}/g;
    var lastIndex = pattern.lastIndex;
    var match = pattern.exec(text);

    while (match != null) {
        this.watchers.push({
            index: match.index,
            exp: new ExpNode(match[1]),
            leftStr: text.substring(lastIndex, match.index)
        });
        lastIndex = pattern.lastIndex;
        match = pattern.exec(text);
    }

    if (this.watchers.length > 0 && lastIndex < text.length) {
        this.rightStr = text.substring(lastIndex);
    }
};

Binding.prototype.compute = function (options) {
    if (this.watchers.length === 0) {
        return this.text;
    }

    var self = this;

    if (this.isExp && this.watchers.length === 1) {
        this.watchers[0].exp.compute(self.scope, options);
        return this.watchers[0].exp.value;
    }

    var text = '';
    this.watchers.forEach(function (watcher) {
        watcher.exp.compute(self.scope, options);
        text += (watcher.leftStr + watcher.exp.value);
    });

    return text + this.rightStr;
};

Binding.prototype.detect = function (options) {
    if (this.output) {
        return false;
    }
    var self = this;
    return this.watchers.some(function (watcher) {
        return watcher.exp.detect(self.scope, options);
    });
};

Binding.prototype.destroy = function () {
    this.scope = null;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlParser, _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"]);
function HtmlParser(lexer, options) {
    HtmlParser.super.call(this, lexer, options);
}

HtmlParser.prototype.parse = function (text) {
    this.index = 0;
    this.text = text;
    this.tokens = this.lexer.lex(text);

    var root = new ElementNode('tpl');
    var doctype, allowDocType = !!this.options.allowDocType;
    while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.doctype) {
            if (allowDocType) {
                if (!doctype) {
                    doctype = this.doctype();
                    root.$pushChild(doctype);
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
            root.$pushChild(comment);
            this.next();
        }
        else if (token.textTag) {
            var text = new TextNode();
            text.nodeValue = token.text;
            root.$pushChild(text);
            this.next();
        }
        else if (token.tag && token.begin) {
            root.$pushChild(this.element());
        }
        else {
            this.throwError("impossible", token);
        }
    }

    root.$buildSibling();

    return root.childNodes;
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

    def.template = element.outerHTML;
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
            }
        },
        settings = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](defaults, options),
        astNodes = parse(html);

    astNodes.forEach(function (astNode) {
        astNode.compile();
    });

    astNodes.forEach(function (astNode) {
        astNode.getDir().forEach(function (directive) {
            directive.$compile(settings);
        });
    });

    return function (scope) {
        var fragment = document.createDocumentFragment();

        scope.$astNodes = astNodes;

        if (!Object(_view__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(scope)) {
            scope.$directives = [];
            scope.$childComponents = [];

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
    var args = [baseExpression];
    var result = new CallExpressionNode(this.identifier(), args);
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
/*! exports provided: clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: isMessenger, forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter */
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

/* harmony import */ var _ele_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ele-utils */ "./src/utility/ele-utils.js");
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
            returnValue = this.handlers[i].call(scope, scope, args);
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

/***/ "./src/utility/utils.js":
/*!******************************!*\
  !*** ./src/utility/utils.js ***!
  \******************************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, debug, contains, containsStr, hasProperty, getProperty, setProperty */
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
var debugMode = true,
    toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf;

function forEach(obj, action) {
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (action(index, obj[index])) {
                return;
            }
        }
    }
    else if (isObject(obj)) {
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
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
        });
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
        });
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
            });
        }
    }

    if (!hasProp) {
        throw new Error(key + ': Can not set property of undefined');
    }
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
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser */ "./src/parser/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);







function Component() {
    this.$astNodes = [];
    this.$ownerVNode = null;
    this.$parent = null;
    this.$childComponents = [];
    this.$directives = [];
    this.$detectTimeout = null;
}

Component.prototype.$getTemplate = function () {
    var self = this;
    return new Promise(function (resolve) {
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](self.$def.template)) {
            resolve(self.$def.template);
        }
        else if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](self.$def.templateId)) {
            var tpl = document.getElementById(self.$def.templateId);

            if (tpl == null) {
                resolve('');
            }
            else {
                resolve(tpl.innerText);
            }
        }
        else if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](self.$def.templateUrl)) {
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(self.$def.templateUrl).then(function (res) {
                resolve(res.data);
            });
        }
        else {
            resolve('');
        }
    });
};

Component.prototype.$render = function () {
    var self = this;
    return new Promise(function (resolve) {
        self.$getTemplate().then(function (html) {
            resolve(Object(_parser__WEBPACK_IMPORTED_MODULE_4__["compile"])(html, {
                getEmbedTpl: function () {
                    return self.$ownerVNode.getInnerTpl();
                }
            })(self));
        });
    });
};

Component.prototype.$mount = function (idOrElement) {
    var self = this, element;

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isString"](idOrElement)) {
        element = document.getElementById(idOrElement);
    }
    else {
        element = idOrElement;
    }

    _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"](element);
    this.$render().then(function (ele) {
        self.$onMounting();
        element.appendChild(ele);
        self.$onMounted();
    });
};

Component.prototype.$detect = function () {
    if (this.$detectTimeout) {
        return;
    }

    var self = this;
    self.$detectTimeout = setTimeout(function () {
        self.$detectTimeout = null;
        self.$onUpdating();
        self.$astNodes.forEach(function (astNode) {
            astNode.detect();
        });
        self.$onUpdated();
    });
};

Component.prototype.$destroy = function () {
    this.$onDestroying();
    this.$astNodes.forEach(function (astNode) {
        astNode.destroy();
    });
    this.$onDestroyed();
};

Component.prototype.$update = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$def.onUpdate)) {
        this.$def.onUpdate.call(this);
    }
};

Component.prototype.$hasAttr = function (prop) {
    return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["hasProperty"](this.$def.props, prop, true);
};

Component.prototype.$setAttr = function (prop, value) {
    _utility_utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"](this, prop, value, true);
};

Component.prototype.$hasEvent = function (e) {
    return _utility_utils__WEBPACK_IMPORTED_MODULE_1__["containsStr"](this.$def.events, e, true);
};

Component.prototype.$listen = function (e, fn) {
    var messenger = _utility_utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"](this, e, true);
    if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"])(messenger)) {
        messenger.on(fn);
        return;
    }
    throw new Error(e + ' is not a event');
};

Component.prototype.$onCreating = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$def.onCreating)) {
        this.$def.onCreating.call(this);
    }
};

Component.prototype.$onCreated = function () {
    var self = this;
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](this.$def.inject)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.$def.inject, function (key, value) {
            self[key] = _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].createService(value);
        });
    }
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$def.onCreated)) {
        this.$def.onCreated.call(this);
    }
};

Component.prototype.$onUpdating = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$def.onUpdating)) {
        this.$def.onUpdating.call(this);
    }
};

Component.prototype.$onUpdated = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$def.onUpdated)) {
        this.$def.onUpdated.call(this);
    }
};

Component.prototype.$onMounting = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$def.onMounting)) {
        this.$def.onMounting.call(this);
    }
};

Component.prototype.$onMounted = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$def.onMounted)) {
        this.$def.onMounted.call(this);
    }
};

Component.prototype.$onDestroying = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$def.onDestroying)) {
        this.$def.onDestroying.call(this);
    }
    if(this.$detectTimeout){
        clearTimeout(this.$detectTimeout);
    }
};

Component.prototype.$onDestroyed = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](this.$def.onDestroyed)) {
        this.$def.onDestroyed.call(this);
    }
    this.$astNodes = null;
    this.$ownerVNode = null;
    this.$parent = null;
    this.$childComponents = null;
    this.$directives = null;
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
    this.output = false;
    this.$binding = null;
    this.$node = null;
}

Directive.prototype.$onCreating = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onCreating)) {
        this.$def.onCreating.call(this);
    }
};

Directive.prototype.$onCreated = function () {
    var self = this;
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](this.$def.inject)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](this.$def.inject, function (key, value) {
            self[key] = _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].createService(value);
        });
    }
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onCreated)) {
        this.$def.onCreated.call(this);
    }
};

Directive.prototype.$bindNode = function (node) {
    this.$node = node;
};

Directive.prototype.$bindValue = function (binding) {
    this.$binding = binding;
};

Directive.prototype.$compile = function (options) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onCompile)) {
        this.$def.onCompile.call(this, this.$node, options);
    }
};

Directive.prototype.$insert = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onInsert)) {
        this.$def.onInsert.call(this, ele, this.$binding, com);
    }
};

Directive.prototype.$detect = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onDetect)) {
        return this.$def.onDetect.call(this, ele, this.$binding, com);
    }

    if (this.$binding.detect()) {
        this.$update(ele, com);
    }
};

Directive.prototype.$update = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onUpdate)) {
        this.$def.onUpdate.call(this, ele, this.$binding, com);
    }
};

Directive.prototype.$destroy = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onDestroy)) {
        this.$def.onDestroy.call(this);
    }
    this.$binding = null;
    this.$node = null;
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

Filter.prototype.$execute = function (ele) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onExecute)) {
        return this.$def.onExecute.apply(this, arguments);
    }
};

Filter.prototype.$destroy = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onDestroy)) {
        this.$def.onDestroy.call(this);
    }
};

Filter.prototype.$onCreating = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onCreating)) {
        this.$def.onCreating.call(this);
    }
};

Filter.prototype.$onCreated = function () {
    var self = this;
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](this.$def.inject)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](this.$def.inject, function (key, value) {
            self[key] = _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].createService(value);
        });
    }
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onCreated)) {
        this.$def.onCreated.call(this);
    }
};

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/*! exports provided: injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./watch */ "./src/view/watch.js");









function component(name, def) {
    return _injector__WEBPACK_IMPORTED_MODULE_2__["injector"].buildConstructor(name, def, {
        contractType: _injector__WEBPACK_IMPORTED_MODULE_2__["typeConst"].component,
        superClass: _component__WEBPACK_IMPORTED_MODULE_3__["default"],
        getConstructor: function () {
            return function constructor() {
                var self = this;
                this.$onCreating();
                constructor.super.call(this);
                // create properties
                if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](this.$def.props)) {
                    Object(_watch__WEBPACK_IMPORTED_MODULE_7__["extendAndWatchProps"])(self, this.$def.props);
                }
                if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](this.$def.events)) {
                    this.$def.events.forEach(function (e) {
                        self[e] = new _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();
                    });
                }
            };
        }
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
    var mapping = this.getMapping(contractType);

    if (mapping[contractName] != null) {
        throw new Error(contractType + ' ' + contractName + ' is already existed');
    }

    mapping[contractName] = constructor;
};

Injector.prototype.registerComponent = function (contractName, constructor) {
    this.register(typeConst.component, contractName, constructor);
};

Injector.prototype.registerDirective = function (contractName, constructor) {
    this.register(typeConst.directive, contractName, constructor);
};

Injector.prototype.contains = function (contractType, contractName, ignoreCase) {
    var mapping = this.getMapping(contractType);

    if (ignoreCase) {
        return _utility_utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"](mapping, contractName, ignoreCase);
    }

    return mapping[contractName] != null;
};

Injector.prototype.containsComponent = function (contractName) {
    return this.contains(typeConst.component, contractName, true)
};

Injector.prototype.containsDirective = function (contractName) {
    return this.contains(typeConst.directive, contractName, true)
};

Injector.prototype.get = function (contractType, contractName, ignoreCase) {
    var constructor, mapping = this.getMapping(contractType);

    if (ignoreCase) {
        constructor = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](mapping, contractName, true);
    }
    else {
        constructor = mapping[contractName]
    }

    if (constructor == null) {
        throw new Error(contractType + ' ' + contractName + ' is not defined');
    }

    return constructor;
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
    instance.$onCreated();
    return instance;
};

Injector.prototype.createDirective = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getDirective(constructor);
    }
    var instance = new constructor();
    instance.$onCreated();
    return instance;
};

Injector.prototype.createFilter = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getFilter(constructor);
    }
    var instance = new constructor();
    instance.$onCreated();
    return instance;
};

Injector.prototype.createService = function (constructor) {
    var instance, services = this.getInstances(typeConst.service);

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getService(constructor);
    }

    if (!constructor.prototype.$def.nonShared) {
        var result = services.filter(function (item) {
            return item instanceof constructor;
        });

        if (result.length) {
            instance = result[0];
        }
    }

    if (!instance) {
        instance = new constructor();
        instance.$onCreated();
        services.push(instance);
    }

    return instance;
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
            this.$onCreating();
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](constructor.super)) {
                constructor.super.call(this);
            }
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](this.$def.props)) {
                _utility_utils__WEBPACK_IMPORTED_MODULE_0__["extend"](this, this.$def.props);
            }
            if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](this.$def.events)) {
                this.$def.events.forEach(function (e) {
                    self[e] = new _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();
                });
            }
        };
    }

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](options.superClass)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, options.superClass);
    }

    constructor.prototype.$key = contractName;

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
        if (superOne.prototype.$def && superOne.prototype.$def.protected) {
            throw new Error(options.contractType + ': ' + def.extends + ' is protected, it is not allowed to extend!');
        }

        return _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](true, _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, superOne.prototype.$def), def);
    }

    function remainConstructor(name, def, constructor) {
        constructor.prototype.$def = def;

        // create methods
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](def.methods)) {
            _utility_utils__WEBPACK_IMPORTED_MODULE_0__["extend"](constructor.prototype, def.methods);
        }

        // register component
        injector.register(options.contractType, name, constructor);

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

Service.prototype.$destroy = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onDestroy)) {
        this.$def.onDestroy.call(this);
    }
};

Service.prototype.$onCreating = function () {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onCreating)) {
        this.$def.onCreating.call(this);
    }
};

Service.prototype.$onCreated = function () {
    var self = this;
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](this.$def.inject)) {
        _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](this.$def.inject, function (key, value) {
            self[key] = _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].createService(value);
        });
    }
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onCreated)) {
        this.$def.onCreated.call(this);
    }
};

/***/ }),

/***/ "./src/view/watch.js":
/*!***************************!*\
  !*** ./src/view/watch.js ***!
  \***************************/
/*! exports provided: extendAndWatchProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendAndWatchProps", function() { return extendAndWatchProps; });
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var _utility_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/message */ "./src/utility/message.js");



var prefix = '$$';

function extendAndWatchProps(instance, props) {
    _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](props, function (key, value) {
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

    _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](obj, function (key, value) {
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
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](value)) {
        var newValue = ReactiveArray.fromArray(value);
        newValue.onchange.on(function () {
            onchange.call(this);
        });
        return newValue;
    }

    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](value)) {
        watchProps(value, onchange);
    }

    return value;
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ReactiveArray, Array);
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

ReactiveArray.prototype.onchange = new _utility_message__WEBPACK_IMPORTED_MODULE_1__["Messenger"]();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibGFja2JvYXJkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibGFja2JvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy9pbm5lci9kaXJlY3RpdmVzLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvaW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy9wYXJzZXIvaHRtbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3BhcnNlci9odG1sLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3BhcnNlci9sZXhlci5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3BhcnNlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy91dGlsaXR5L2VsZS11dGlscy5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3V0aWxpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy91dGlsaXR5L21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy91dGlsaXR5L3V0aWxzLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvdmlldy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3ZpZXcvaW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy92aWV3L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy92aWV3L3dhdGNoLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImF4aW9zXCIsXCJjb21tb25qczJcIjpcImF4aW9zXCIsXCJhbWRcIjpcImF4aW9zXCIsXCJyb290XCI6XCJheGlvc1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUEwQjtBQUNIO0FBQ0U7Ozs7Ozs7Ozs7Ozs7QUNGekI7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDUTtBQUNSOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEQUFTOztBQUVULHVEQUFTOztBQUVULHVEQUFTOztBQUVULHVEQUFTOztBQUVULHVEQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsaURBQWM7QUFDdEI7QUFDQTtBQUNBLGFBQWEsaURBQWM7QUFDM0IsUUFBUSxnREFBYTtBQUNyQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsdURBQVM7QUFDVDtBQUNBLENBQUM7O0FBRUQsdURBQVM7QUFDVDtBQUNBLENBQUM7O0FBRUQsdURBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQWlCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQWlCO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1REFBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHVEQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsWUFBWSxvREFBaUI7QUFDN0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBaUI7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsdURBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksb0RBQWlCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixvREFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQWlCO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHVEQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVELHVEQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixvREFBaUI7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQWlCO0FBQ2pDO0FBQ0Esb0JBQW9CLG9EQUFpQjtBQUNyQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsdURBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHVEQUFPOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLCtDQUFZO0FBQ2hDOztBQUVBO0FBQ0EsZ0JBQWdCLGdEQUFhO0FBQzdCLCtCQUErQiw2Q0FBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFlBQVksZ0RBQWE7QUFDekI7QUFDQSw4QkFBOEIsdURBQU87QUFDckM7QUFDQTtBQUNBLGFBQWE7O0FBRWIsWUFBWSwwREFBdUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1REFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDblZEO0FBQUE7QUFBQSx3Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDVjs7QUFFaEMsc0RBQWEsWUFBWSw0Q0FBSztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNkZBQTZGO0FBQ25IO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRUFBb0U7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRDQUE0QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDTztBQUNmO0FBQ0M7QUFDTTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDhDQUFRO0FBQ2hCLHlCQUF5Qiw4Q0FBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFLO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQUs7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFjOztBQUVwQztBQUNBLFlBQVksOENBQVE7QUFDcEIsNkJBQTZCLDhDQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhEQUFvQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNEQUFPO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQVk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxxQkFBcUIsSUFBSSxLQUFLO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNEQUFhLGFBQWEsOENBQU07QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDaUI7QUFDM0I7QUFDRTtBQUNPO0FBQ0U7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSx1REFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksOENBQVEsaUJBQWlCLHVEQUFTO0FBQ3RDOztBQUVBO0FBQ0Esb0JBQW9CLHFEQUFTO0FBQzdCLHFCQUFxQix1REFBVTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLG9EQUFXO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYSx5REFBVztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQsb0JBQW9CLDRDQUFLO0FBQ3pCLHFCQUFxQiw4Q0FBTTtBQUMzQjtBQUNBO0FBQ0EsZUFBZSw4Q0FBUTtBQUN2QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEhBO0FBQUE7QUFBQTtBQUEwQzs7QUFFMUM7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUywyQkFBMkIsS0FBSztBQUN6Qyw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlEQUFpRDtBQUNuRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix3REFBZTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFlO0FBQ2hDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BOQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNUOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsS0FBSztBQUNMOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELHVCQUF1QjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxlQUFlO0FBQ3RFO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxZQUFZLHNEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLHNEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0Msb0JBQW9CO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFVBQVU7QUFDN0Q7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUssd0JBQXdCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2puQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNkO0FBQ0k7O0FBRTVCO0FBQ0EsMEJBQTBCLGtEQUFTO0FBQ25DOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0MsWUFBWSxpREFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ0c7QUFDTztBQUNYO0FBQ0o7QUFDUjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQWM7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQix1REFBYztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBYztBQUMvQixZQUFZLDRDQUFLO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSx1REFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksa0VBQXdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVywwREFBaUI7QUFDNUI7O0FBRUE7QUFDQSxJQUFJLDBEQUFpQjtBQUNyQjs7QUFFQTtBQUNBLFdBQVcsMERBQWlCO0FBQzVCOztBQUVBO0FBQ0Esb0JBQW9CLDBEQUFpQjtBQUNyQyxRQUFRLDREQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdURBQWM7QUFDdEIsUUFBUSxzREFBYTtBQUNyQix3QkFBd0Isa0RBQVE7QUFDaEMsU0FBUztBQUNUO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUN6TEE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDTjs7QUFFckI7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1REFBYztBQUN0QixRQUFRLHNEQUFhO0FBQ3JCLHdCQUF3QixrREFBUTtBQUNoQyxTQUFTO0FBQ1Q7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNOOztBQUVyQjs7QUFFZjs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1REFBYztBQUN0QixRQUFRLHNEQUFhO0FBQ3JCLHdCQUF3QixrREFBUTtBQUNoQyxTQUFTO0FBQ1Q7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0s7QUFDRTtBQUNiO0FBQ0E7QUFDTjtBQUNFO0FBQ2M7O0FBRTlDO0FBQ0EsV0FBVyxrREFBUTtBQUNuQixzQkFBc0IsbURBQVM7QUFDL0Isb0JBQW9CLGtEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBYztBQUNsQyxvQkFBb0Isa0VBQW1CO0FBQ3ZDO0FBQ0Esb0JBQW9CLHNEQUFhO0FBQ2pDO0FBQ0Esc0NBQXNDLDBEQUFTO0FBQy9DLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsa0RBQVE7QUFDbkIsc0JBQXNCLG1EQUFTO0FBQy9CLG9CQUFvQixrREFBUztBQUM3QixLQUFLO0FBQ0w7O0FBRUE7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGtEQUFRO0FBQ25CLHNCQUFzQixtREFBUztBQUMvQixvQkFBb0IsK0NBQU07QUFDMUIsS0FBSztBQUNMOztBQUVBO0FBQ0EsV0FBVyxrREFBUTtBQUNuQixzQkFBc0IsbURBQVM7QUFDL0Isb0JBQW9CLGdEQUFPO0FBQzNCLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDBCQUEwQixrREFBUztBQUNuQzs7QUFFQTtBQUNBLDBCQUEwQixrREFBUztBQUNuQzs7QUFFQTtBQUNBLDBCQUEwQiwrQ0FBTTtBQUNoQzs7QUFFQTtBQUNBLDBCQUEwQixnREFBTztBQUNqQzs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0s7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDBEQUFpQjtBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwREFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1REFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHVEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsdURBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSx1REFBYztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQWdCO0FBQ2hDO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQWM7QUFDOUIsZ0JBQWdCLHFEQUFZO0FBQzVCO0FBQ0EsZ0JBQWdCLHNEQUFhO0FBQzdCO0FBQ0Esa0NBQWtDLDBEQUFTO0FBQzNDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx5REFBZ0I7QUFDeEIsUUFBUSxzREFBYTtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsdURBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxvREFBVyxPQUFPLG1EQUFVO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHVEQUFjO0FBQzFCLFlBQVkscURBQVk7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNOOztBQUVyQjs7QUFFZjs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1REFBYztBQUN0QixRQUFRLHNEQUFhO0FBQ3JCLHdCQUF3QixrREFBUTtBQUNoQyxTQUFTO0FBQ1Q7QUFDQSxRQUFRLHlEQUFnQjtBQUN4QjtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0s7O0FBRS9DOztBQUVBO0FBQ0EsSUFBSSxzREFBYTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxzREFBYTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHNEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLFFBQVEsdURBQWM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsMERBQVM7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUdBLG1EIiwiZmlsZSI6ImJsYWNrYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJheGlvc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJheGlvc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJibGFja2JvYXJkXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYXhpb3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJsYWNrYm9hcmRcIl0gPSBmYWN0b3J5KHJvb3RbXCJheGlvc1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYXhpb3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi91dGlsaXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9wYXJzZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2lubmVyJzsiLCJpbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHtjb21wdXRlICwgY29tcGlsZX0gZnJvbSAnLi4vcGFyc2VyJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eSc7XHJcblxyXG5mdW5jdGlvbiBtYWtlQXR0clNldHRlcihhdHRyTmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICBpZiAoYmluZGluZy5jb21wdXRlKCkpIHtcclxuICAgICAgICAgICAgaWYgKCFlbGUuaGFzQXR0cmlidXRlKGF0dHJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZWxlLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZGlyZWN0aXZlKCdiLXNlbGVjdGVkJywgbWFrZUF0dHJTZXR0ZXIoJ3NlbGVjdGVkJykpO1xyXG5cclxuZGlyZWN0aXZlKCdiLWRpc2FibGVkJywgbWFrZUF0dHJTZXR0ZXIoJ2Rpc2FibGVkJykpO1xyXG5cclxuZGlyZWN0aXZlKCdiLWNoZWNrZWQnLCBtYWtlQXR0clNldHRlcignY2hlY2tlZCcpKTtcclxuXHJcbmRpcmVjdGl2ZSgnYi1yZWFkb25seScsIG1ha2VBdHRyU2V0dGVyKCdyZWFkb25seScpKTtcclxuXHJcbmRpcmVjdGl2ZSgnYi1zdHlsZScsIGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgIHZhciB2YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG5cclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICBlbGUuc3R5bGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVsZS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBvZiBiLXN0eWxlIHNob3VsZCBiZSBzdHJpbmcgb3Igb2JqZWN0Jyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZGlyZWN0aXZlKCdiLXNob3cnLCBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICBlbGUuc3R5bGUuZGlzcGxheSA9IGJpbmRpbmcuY29tcHV0ZSgpID8gJ2luaXRpYWwnIDogJ25vbmUnO1xyXG59KTtcclxuXHJcbmRpcmVjdGl2ZSgnYi1oaWRlJywgZnVuY3Rpb24gKGVsLCBiaW5kaW5nKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gYmluZGluZy5jb21wdXRlKCkgPyAnbm9uZScgOiAnaW5pdGlhbCc7XHJcbn0pO1xyXG5cclxuZGlyZWN0aXZlKCdiLWlmJywge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBjb21tZW50OiBudWxsXHJcbiAgICB9LFxyXG4gICAgb25JbnNlcnQ6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdiLWlmJyk7XHJcbiAgICAgICAgaWYgKCFiaW5kaW5nLmNvbXB1dGUoKSkge1xyXG4gICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKGJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgIH1cclxufSk7XHJcblxyXG5kaXJlY3RpdmUoJ2Itc3dpdGNoJywge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB2YWx1ZTogbnVsbFxyXG4gICAgfSxcclxuICAgIG9uSW5zZXJ0OiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAoZWxlLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmRpcmVjdGl2ZSgnYi1zd2l0Y2gtZGVmYXVsdCcsIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgYXR0ck5vZGU6IG51bGwsXHJcbiAgICAgICAgY29tbWVudDogbnVsbFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpc01hdGNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IHRydWUsIHZFbGUgPSB0aGlzLmF0dHJOb2RlLm93bmVyVkVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodkVsZS5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCAmJiBtYXRjaCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2hlbkRpciA9IHZFbGUucHJldmlvdXNTaWJsaW5nLnNlYXJjaERpcignYi1zd2l0Y2gtd2hlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZFbGUgPSB2RWxlLnByZXZpb3VzU2libGluZztcclxuXHJcbiAgICAgICAgICAgICAgICBpZighd2hlbkRpci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtYXRjaCA9ICF3aGVuRGlyWzBdLmlzTWF0Y2g7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Db21waWxlOiBmdW5jdGlvbiAoYXR0ck5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmF0dHJOb2RlID0gYXR0ck5vZGU7XHJcbiAgICB9LFxyXG4gICAgb25JbnNlcnQ6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdiLXN3aXRjaC1kZWZhdWx0Jyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc01hdGNoKCkpIHtcclxuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRldGVjdDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTWF0Y2goKSkge1xyXG4gICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUodGhpcy5jb21tZW50LCBlbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZWxlLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZGlyZWN0aXZlKCdiLXN3aXRjaC13aGVuJywge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBpc01hdGNoOiBmYWxzZSxcclxuICAgICAgICBhdHRyTm9kZTogbnVsbCxcclxuICAgICAgICBjb21tZW50OiBudWxsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZUlzTWF0Y2g6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHZFbGUgPSB0aGlzLmF0dHJOb2RlLm93bmVyVkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBzd2l0Y2hEaXIgPSB2RWxlLnBhcmVudE5vZGUuc2VhcmNoRGlyKCdiLXN3aXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXN3aXRjaERpci5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIGItc3dpdGNoIGRpcmVjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzTWF0Y2ggPSBiaW5kaW5nLmNvbXB1dGUoKSA9PT0gc3dpdGNoRGlyWzBdLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNvbXBpbGU6IGZ1bmN0aW9uIChhdHRyTm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYXR0ck5vZGUgPSBhdHRyTm9kZTtcclxuICAgIH0sXHJcbiAgICBvbkluc2VydDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2Itc3dpdGNoLXdoZW4nKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUlzTWF0Y2goZWxlLCBiaW5kaW5nKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgdXRpbHMucmVwbGFjZU5vZGUoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRldGVjdDogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXNNYXRjaChlbGUsIGJpbmRpbmcpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc01hdGNoKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZSh0aGlzLmNvbW1lbnQsIGVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGUucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlTm9kZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyTm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50ID0gbnVsbDtcclxuICAgIH1cclxufSk7XHJcblxyXG5kaXJlY3RpdmUoJ2ItYmluZCcsIGZ1bmN0aW9uKGVsZSwgYmluZGluZyl7XHJcbiAgICBlbGUuaW5uZXJUZXh0ID0gYmluZGluZy5jb21wdXRlKCk7XHJcbn0pO1xyXG5cclxuZGlyZWN0aXZlKCdiLW1vZGVsJywge1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGVsZSwgYmluZGluZywgY29tKSB7XHJcbiAgICAgICAgICAgIGlmIChjb20gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZWxlLnZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb20udmFsdWUgPSBiaW5kaW5nLmNvbXB1dGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkluc2VydDogZnVuY3Rpb24gKGVsZSwgYmluZGluZywgY29tKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoZWxlLCBiaW5kaW5nLCBjb20pO1xyXG5cclxuICAgICAgICBpZiAoY29tID09IG51bGwpIHtcclxuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShiaW5kaW5nLnNjb3BlLCBiaW5kaW5nLnRleHQsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNNZXNzZW5nZXIoY29tLmNoYW5nZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbS5jaGFuZ2Uub24oZnVuY3Rpb24gKGUsIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShiaW5kaW5nLnNjb3BlLCBiaW5kaW5nLnRleHQsIGFyZ3MubmV3dmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb2VudCAnICsgY29tLiRrZXkgKyAnbXVzdCBkZWZpbmUgW2NoYW5nZV0gZXZlbnQnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGU6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcsIGNvbSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGVsZSwgYmluZGluZywgY29tKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5kaXJlY3RpdmUoJ2ItcmVwZWF0Jywge1xyXG4gICAgb25Db21waWxlOiBmdW5jdGlvbiAoYXR0ck5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgYXJnID0gYXR0ck5vZGUubm9kZVZhbHVlO1xyXG4gICAgICAgIHZhciBlbGVOb2RlID0gYXR0ck5vZGUub3duZXJWRWxlbWVudDtcclxuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFxcdyspXFxzK2luXFxzKyhcXHcrKSQvaTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiLXJlcGVhdDogcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpdGVtRXhwID0gcmVzdWx0WzFdO1xyXG4gICAgICAgIHZhciBpdGVtc0V4cCA9IHJlc3VsdFsyXTtcclxuXHJcbiAgICAgICAgZWxlTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5vZGUpO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFNjb3BlLCBjdXJyZW50SXRlbXMsIHN0YXJ0LCBlbmQsIGNoaWxkU2NvcGVzID0gW107XHJcbiAgICAgICAgdmFyIHRwbCA9IGVsZU5vZGUuZ2V0T3V0ZXJUcGwoKTtcclxuICAgICAgICB2YXIgY3VzdG9tID0gZWxlTm9kZS5jcmVhdGVDdXN0b20oJ2ItcmVwZWF0JywgZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgY3VycmVudFNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRJdGVtcyhjb21wdXRlKGl0ZW1zRXhwLCBjdXJyZW50U2NvcGUpKTtcclxuICAgICAgICAgICAgc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogYi1yZXBlYXQnKTtcclxuICAgICAgICAgICAgZW5kID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBiLXJlcGVhdCcpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdGFydCk7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVuZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlTm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbGVOb2RlLCBjdXN0b20pO1xyXG5cclxuICAgICAgICBjdXN0b20ub25JbnNlcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJ1aWxkKGN1cnJlbnRJdGVtcyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY3VzdG9tLm9uRGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBjb21wdXRlKGl0ZW1zRXhwLCBjdXJyZW50U2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhhc0NoYW5nZShjdXJyZW50SXRlbXMsIGl0ZW1zKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkKGN1cnJlbnRJdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZFNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZFNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRTY29wZS4kZGV0ZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGN1c3RvbS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNoaWxkU2NvcGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkU2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkU2NvcGUuJGRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNoaWxkU2NvcGVzID0gbnVsbDtcclxuICAgICAgICAgICAgZWxlTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTY29wZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICAgICAgZW5kID0gbnVsbDtcclxuICAgICAgICAgICAgY3VzdG9tID0gbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYXNDaGFuZ2UobmV3QXJyLCBvbGRBcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF1dGlscy5pc1NhbWUobmV3QXJyLCBvbGRBcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Q3VycmVudEl0ZW1zKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1zID0gdXRpbHMuY29weSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYnVpbGQoaXRlbXMpIHtcclxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgQ2hpbGRTY29wZS5wcm90b3R5cGUgPSBjdXJyZW50U2NvcGU7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIENoaWxkU2NvcGUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbaXRlbUV4cF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hpbGRTY29wZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRTY29wZSkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRTY29wZS4kZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hpbGRTY29wZXMgPSBbXTtcclxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKGtleSwgaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkU2NvcGUgPSBuZXcgQ2hpbGRTY29wZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gY29tcGlsZSh0cGwsIG9wdGlvbnMpKGNoaWxkU2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGRTY29wZXMucHVzaChjaGlsZFNjb3BlKTtcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZU5vZGVCZXR3ZWVuKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICBlbmQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIGVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmRpcmVjdGl2ZSgnYi1lbWJlZCcsIHtcclxuICAgIG9uQ29tcGlsZTogZnVuY3Rpb24gKGF0dHJOb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGVtYmVkVHBsID0gb3B0aW9ucy5nZXRFbWJlZFRwbCgpO1xyXG4gICAgICAgIGlmKGVtYmVkVHBsKXtcclxuICAgICAgICAgICAgYXR0ck5vZGUub3duZXJWRWxlbWVudC5zZXRJbm5lclRwbChlbWJlZFRwbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiLCJleHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMnOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBMZXhlciB9IGZyb20gJy4vbGV4ZXInO1xyXG5cclxudXRpbHMuaW5oZXJpdChIdG1sTGV4ZXIsIExleGVyKTtcclxuZnVuY3Rpb24gSHRtbExleGVyKG9wdGlvbnMpIHtcclxuICAgIEh0bWxMZXhlci5zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcgfHxcclxuICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJztcclxufTtcclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuZXhwZWN0U3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XHJcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XHJcbn07XHJcblxyXG4vLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXHJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZENvbW1lbnQgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcclxuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xyXG59O1xyXG5cclxuLy8gaHRtbCB0ZXh0XHJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHx8IGNoMiA9PT0gJy8nKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICB0ZXh0VGFnOiB0cnVlXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIGh0bWwgdGFnXHJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRhZyA9IGZ1bmN0aW9uIChiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xyXG4gICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XHJcbiAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcblxyXG4gICAgICAgIGlmICghY2xvc2luZykge1xyXG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcclxuICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcclxuICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxyXG4gICAgICAgICAgICAgICAgZW5kOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRva2VucztcclxufTtcclxuXHJcbmV4cG9ydCB7IEh0bWxMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XHJcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcclxuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgY29tcHV0ZSwgcGFyc2UgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbi8vIC8vIFdpbmRvdyBFdmVudHNcclxuLy8gY2FzZSAnb24tbG9hZCc6XHJcbi8vIGNhc2UgJ29uLXVubG9hZCc6XHJcbi8vIC8vIEZvcm0gRWxlbWVudCBFdmVudHNcclxuLy8gY2FzZSAnb24tY2hhbmdlJzpcclxuLy8gY2FzZSAnb24tc3VibWl0JzpcclxuLy8gY2FzZSAnb24tcmVzZXQnOlxyXG4vLyBjYXNlICdvbi1zZWxlY3QnOlxyXG4vLyBjYXNlICdvbi1ibHVyJzpcclxuLy8gY2FzZSAnb24tZm9jdXMnOlxyXG4vLyAvLyBJbWFnZSBFdmVudHNcclxuLy8gY2FzZSAnb24tYWJvcnQnOlxyXG4vLyAvLyBLZXlib2FyZCBFdmVudHNcclxuLy8gY2FzZSAnb24ta2V5ZG93bic6XHJcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcclxuLy8gY2FzZSAnb24ta2V5dXAnOlxyXG4vLyAvLyBNb3VzZSBFdmVudHNcclxuLy8gY2FzZSAnb24tY2xpY2snOlxyXG4vLyBjYXNlICdvbi1kYmxjbGljayc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlZG93bic6XHJcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlb3V0JzpcclxuLy8gY2FzZSAnb24tbW91c2VvdmVyJzpcclxuLy8gY2FzZSAnb24tbW91c2V1cCc6XHJcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xyXG52YXIgZG9tRXZlbnRzID0gZXZlbnRUZXh0LnNwbGl0KCcgJyk7XHJcbnZhciBXTm9kZVR5cGUgPSB7XHJcbiAgICBlbGVtZW50OiAxLFxyXG4gICAgYXR0cmlidXRlOiAyLFxyXG4gICAgdGV4dDogMyxcclxuICAgIGNkYXRhU2VjdGlvbjogNCxcclxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcclxuICAgIGVudGl0eTogNixcclxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcclxuICAgIGNvbW1lbnQ6IDgsXHJcbiAgICBkb2N1bWVudDogOSxcclxuICAgIGRvY3VtZW50VHlwZTogMTAsXHJcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcclxuICAgIG5vdGF0aW9uOiAxMixcclxuICAgIGN1c3RvbTogMTAxXHJcbn07XHJcblxyXG4vLyBiYXNpYyBub2RlXHJcbmZ1bmN0aW9uIFZOb2RlKHR5cGUsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcclxuICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xyXG4gICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcclxuICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcclxuICAgIHRoaXMub3duZXJWRG9jdW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbn1cclxuXHJcblZOb2RlLiRkZXN0cm95ID0gZnVuY3Rpb24gKHNlbGYpIHtcclxuICAgIHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgc2VsZi5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgIHNlbGYucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgIHNlbGYubmV4dFNpYmxpbmcgPSBudWxsO1xyXG4gICAgc2VsZi5maXJzdENoaWxkID0gbnVsbDtcclxuICAgIHNlbGYubGFzdENoaWxkID0gbnVsbDtcclxuICAgIHNlbGYub3duZXJWRG9jdW1lbnQgPSBudWxsO1xyXG4gICAgc2VsZi5zY29wZSA9IG51bGw7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJHB1c2hDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuJGJ1aWxkU2libGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuJGJ1aWxkU2libGluZygpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuaGFzQ2hpbGROb2RlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmNsZWFyQ2hpbGROb2RlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKG5hbWUpe1xyXG4gICAgcmV0dXJuIG5ldyBFbGVtZW50Tm9kZShuYW1lKTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5jcmVhdGVBdHRyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHJldHVybiBuZXcgQXR0ck5vZGUobmFtZSk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuY3JlYXRlQ3VzdG9tID0gZnVuY3Rpb24gKG5hbWUsIGxpbmtlcikge1xyXG4gICAgcmV0dXJuIG5ldyBDdXN0b21Ob2RlKG5hbWUsIGxpbmtlcik7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcGVuZCBjaGlsZCBpcyBub3QgbmV3Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkLm5leHRTaWJsaW5nID0gY2hpbGQ7XHJcbiAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGQuY29tcGlsZSgpO1xyXG4gICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnNlcnQgY2hpbGQgaXMgbm90IG5ldycpO1xyXG4gICAgfVxyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuXHJcbiAgICBpZihyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xyXG4gICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3Q2hpbGQ7XHJcblxyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3Q2hpbGQuY29tcGlsZSgpO1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLm5leHRTaWJsaW5nLCBuZXdDaGlsZCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZSBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpe1xyXG4gICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaW5kZXggPT09IDApIHtcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICBpZihpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLTEpKXtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgIH1cclxuXHJcbiAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUucmVwbGFjZUNoaWxkID0gZnVuY3Rpb24gKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVwbGFjZSBjaGlsZCBpcyBub3QgbmV3Jyk7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcclxuXHJcbiAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZkNoaWxkLmRlc3Ryb3koKTtcclxuICAgIG5ld0NoaWxkLmNvbXBpbGUoKTtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5jbG9uZU5vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5jb21waWxlKCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5nZXREaXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZC5nZXREaXIoKTtcclxuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLnNlYXJjaERpciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBbXTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5saW5rKHNjb3BlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmFmdGVyTGluayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLmFmdGVyTGluaygpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5WTm9kZS5wcm90b3R5cGUuZGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmhhc0NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblZOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG59O1xyXG5cclxuVk5vZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgVk5vZGUuJGRlc3Ryb3kodGhpcyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEN1c3RvbU5vZGUsIFZOb2RlKTtcclxuLy8gY3VzdG9tIG5vZGVcclxuZnVuY3Rpb24gQ3VzdG9tTm9kZShuYW1lLCBsaW5rZXIpIHtcclxuICAgIEN1c3RvbU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBXTm9kZVR5cGUuY3VzdG9tLCBuYW1lKTtcclxuICAgIHRoaXMubGlua2VyID0gbGlua2VyO1xyXG59XHJcblxyXG5DdXN0b21Ob2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24oc2NvcGUpIHtcclxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgIHJldHVybiB0aGlzLmxpbmtlci5jYWxsKHRoaXMsIHNjb3BlKTtcclxufTtcclxuXHJcbkN1c3RvbU5vZGUucHJvdG90eXBlLmFmdGVyTGluayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkluc2VydCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkluc2VydC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ3VzdG9tTm9kZS5wcm90b3R5cGUuZGV0ZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLm9uRGV0ZWN0KSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uRGV0ZWN0LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5DdXN0b21Ob2RlLnByb3RvdHlwZS5oYXNDaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMub25IYXNDaGFuZ2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25IYXNDaGFuZ2UuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkN1c3RvbU5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vblVwZGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ3VzdG9tTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBWTm9kZS4kZGVzdHJveSh0aGlzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoRG9jdW1lbnROb2RlLCBWTm9kZSk7XHJcbi8vIGRvY3VtZW50IG5vZGVcclxuZnVuY3Rpb24gRG9jdW1lbnROb2RlKCkge1xyXG4gICAgQ3VzdG9tTm9kZS5zdXBlci5jYWxsKHRoaXMsIFdOb2RlVHlwZS5kb2N1bWVudCk7XHJcbn1cclxuXHJcbnV0aWxzLmluaGVyaXQoRWxlbWVudE5vZGUsIFZOb2RlKTtcclxuLy8gZWxlbWVudCBub2RlXHJcbmZ1bmN0aW9uIEVsZW1lbnROb2RlKG5hbWUpIHtcclxuICAgIEVsZW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgV05vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xyXG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gW107XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XHJcbn1cclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS4kcHVzaEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICBhdHRyLm93bmVyVkVsZW1lbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cik7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuaGFzQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gbWF0Y2hlc1swXTtcclxuICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gbmV3IEF0dHJOb2RlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHRhcmdldC5vd25lclZFbGVtZW50ID0gdGhpcztcclxuICAgICAgICB0YXJnZXQuY29tcGlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXR0ck5vZGUpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmF0dHJpYnV0ZXMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5hdHRyaWJ1dGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHNlbGYuYXR0cmlidXRlcy5pbmRleE9mKG1hdGNoKTtcclxuICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBzZWxmLmF0dHJpYnV0ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCA+IDAgPyB0YXJnZXRbMF0gOiBudWxsO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmFwcGVuZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICBpZiAoYXR0ci5vd25lclZFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyLm93bmVyVkVsZW1lbnQgPSB0aGlzO1xyXG4gICAgYXR0ci5jb21waWxlKCk7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyKTtcclxuICAgIHJldHVybiBhdHRyO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaW5qZWN0b3IuY29udGFpbnNDb21wb25lbnQodGhpcy5ub2RlTmFtZSkpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudCh0aGlzLm5vZGVOYW1lKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC4kb3duZXJWTm9kZSA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGF0dHIuY29tcGlsZSgpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5jb21waWxlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0RGlyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gYXR0ci5nZXREaXIoKTtcclxuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGhpcy5jb21wb25lbnQgPT0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmdldERpcigpO1xyXG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLnNlYXJjaERpciA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICByZXR1cm4gYXR0ci5nZXREaXIoKTtcclxuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS4ka2V5ID09PSBzZWxlY3RvcjtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLnNjb3BlID0gc2NvcGU7XHJcbiAgICBzZWxmLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlbGYubm9kZU5hbWUpO1xyXG5cclxuICAgIGlmIChzZWxmLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBzZWxmLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQubGluayhzY29wZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc2NvcGUuJGNoaWxkQ29tcG9uZW50cy5wdXNoKHNlbGYuY29tcG9uZW50KTtcclxuICAgICAgICBzZWxmLmNvbXBvbmVudC4kcGFyZW50ID0gc2NvcGU7XHJcbiAgICAgICAgc2VsZi5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5saW5rKHNjb3BlLCBzZWxmLmVsZW1lbnQsIHNlbGYuY29tcG9uZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLmNvbXBvbmVudC4kbW91bnQoc2VsZi5lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VsZi5lbGVtZW50O1xyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmFmdGVyTGluayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgYXR0ci5hZnRlckxpbmsoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbXBvbmVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFmdGVyTGluaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRWxlbWVudE5vZGUucHJvdG90eXBlLmRldGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgYXR0ci5kZXRlY3QoKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50ID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGV0ZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuZ2V0T3V0ZXJUcGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXR0clRwbCA9ICcnLCBjaGlsZFRwbCA9ICcnO1xyXG5cclxuICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgYXR0clRwbCArPSAnICc7XHJcbiAgICAgICAgYXR0clRwbCArPSBhdHRyLmdldE91dGVyVHBsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZFRwbCArPSBjaGlsZC5nZXRPdXRlclRwbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHRwbCA9ICc8JyArIHRoaXMubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XHJcblxyXG4gICAgaWYoIXRoaXMuc2VsZkNsb3NlZCl7XHJcbiAgICAgICAgdHBsICs9ICgnPC8nICsgdGhpcy5ub2RlTmFtZSArICc+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRwbDtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5nZXRJbm5lclRwbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaGlsZFRwbCA9ICcnO1xyXG5cclxuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkVHBsICs9IGNoaWxkLmdldE91dGVyVHBsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGRUcGw7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuc2V0T3V0ZXJUcGwgPSBmdW5jdGlvbiAodHBsKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5zZXRJbm5lclRwbCA9IGZ1bmN0aW9uICh0cGwpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XHJcbiAgICBwYXJzZSh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXR0cmlidXRlcy5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICBhdHRyLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aCA9IDA7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LiRkZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIFZOb2RlLiRkZXN0cm95KHRoaXMpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChBdHRyTm9kZSwgVk5vZGUpO1xyXG4vLyBhdHRyaWJ1dGUgbm9kZVxyXG5mdW5jdGlvbiBBdHRyTm9kZShuYW1lLCB2YWx1ZSkge1xyXG4gICAgQXR0ck5vZGUuc3VwZXIuY2FsbCh0aGlzLCBXTm9kZVR5cGUuYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICB0aGlzLnF1b3RlID0gJ1wiJztcclxuICAgIHRoaXMub3JnTm9kZU5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pc0V2ZW50ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQmluZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0RvbUV2ZW50ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRGlyZWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmRpcmVjdGl2ZSA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyVkVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xyXG59XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuYmVsb25nVG8gPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSA9PT0ga2V5O1xyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jb21waWxlKCk7XHJcbn1cclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pc0V2ZW50ID0gdGhpcy5ub2RlTmFtZS5zdGFydHNXaXRoKCdAJyk7XHJcbiAgICB0aGlzLmlzQmluZGluZyA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnOicpO1xyXG4gICAgdGhpcy5pc0RpcmVjdGl2ZSA9IHRoaXMubm9kZU5hbWUuc3RhcnRzV2l0aCgnKicpO1xyXG4gICAgaWYgKHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IHRoaXMubm9kZU5hbWUuc3Vic3RyKDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0RvbUV2ZW50ID0gdXRpbHMuY29udGFpbnMoZG9tRXZlbnRzLCB0aGlzLm5vZGVOYW1lKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgIGlmIChpbmplY3Rvci5jb250YWluc0RpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZSA9IGluamVjdG9yLmNyZWF0ZURpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGJpbmROb2RlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3RpdmUgJyArIHRoaXMubm9kZU5hbWUgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5iaW5kaW5nLnNldE91dHB1dCh0aGlzLmlzRXZlbnQgfHwgKHRoaXMuZGlyZWN0aXZlICYmIHRoaXMuZGlyZWN0aXZlLm91dHB1dCkpO1xyXG4gICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUsIHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKTtcclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNjb3BlLCBvd25lckVsZW1lbnQsIG93bmVyQ29tcG9uZW50KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgdGhpcy5vd25lckVsZW1lbnQgPSBvd25lckVsZW1lbnQ7XHJcbiAgICB0aGlzLm93bmVyQ29tcG9uZW50ID0gb3duZXJDb21wb25lbnQ7XHJcbiAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RvbUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ub2RlTmFtZSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3duZXJDb21wb25lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvd25lckNvbXBvbmVudC4kbGlzdGVuKHRoaXMubm9kZU5hbWUsIGZ1bmN0aW9uIChlLCBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmJpbmRpbmcuY29tcHV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudDogZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGFyZ3M6IGFyZ3NcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLiRkaXJlY3RpdmVzLnB1c2godGhpcy5kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kYmluZFZhbHVlKHRoaXMuYmluZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgb3duZXJDb21wb25lbnQuJGhhc0F0dHIodGhpcy5ub2RlTmFtZSkpIHtcclxuICAgICAgICAgICAgb3duZXJDb21wb25lbnQuJHNldEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmRldGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGl2ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kZGV0ZWN0KHRoaXMub3duZXJFbGVtZW50LCB0aGlzLm93bmVyQ29tcG9uZW50KTtcclxuICAgIH1cclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5oYXNDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iaW5kaW5nLmRldGVjdCgpO1xyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLm93bmVyQ29tcG9uZW50ICE9IG51bGwgJiYgdGhpcy5vd25lckNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lKSkge1xyXG4gICAgICAgIHRoaXMub3duZXJDb21wb25lbnQuJHNldEF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgICAgIHRoaXMub3duZXJFbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5vZGVOYW1lLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnICYmIHRoaXMubm9kZU5hbWUgPT09ICd2YWx1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5vd25lckVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuYWZ0ZXJMaW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuZGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUuJGluc2VydCh0aGlzLm93bmVyRWxlbWVudCwgdGhpcy5vd25lckNvbXBvbmVudCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuZ2V0RGlyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlID09IG51bGwgPyBbXSA6IFt0aGlzLmRpcmVjdGl2ZV07XHJcbn07XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuZ2V0T3V0ZXJUcGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcmdOb2RlTmFtZSArICh0aGlzLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdGhpcy5xdW90ZSArIHRoaXMubm9kZVZhbHVlICsgdGhpcy5xdW90ZSkpO1xyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmdldElubmVyVHBsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3JnTm9kZU5hbWUgKyAodGhpcy5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHRoaXMucXVvdGUgKyB0aGlzLm5vZGVWYWx1ZSArIHRoaXMucXVvdGUpKTtcclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKXtcclxuICAgIGlmKHRoaXMuZGlyZWN0aXZlICE9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlLiRkZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuYmluZGluZyA9IG51bGw7XHJcbiAgICB0aGlzLm93bmVyVkVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5vd25lckVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5vd25lckNvbXBvbmVudCA9IG51bGw7XHJcbiAgICBWTm9kZS4kZGVzdHJveSh0aGlzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoVGV4dE5vZGUsIFZOb2RlKTtcclxuLy8gdGV4dCBub2RlXHJcbmZ1bmN0aW9uIFRleHROb2RlKCkge1xyXG4gICAgVGV4dE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBXTm9kZVR5cGUudGV4dCwgJyN0ZXh0Jyk7XHJcbiAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxufVxyXG5cclxuVGV4dE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZSk7XHJcbn07XHJcblxyXG5UZXh0Tm9kZS5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgdGhpcy5iaW5kaW5nLnNldFNjb3BlKHNjb3BlKTtcclxuICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xyXG59O1xyXG5cclxuVGV4dE5vZGUucHJvdG90eXBlLmhhc0NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmJpbmRpbmcuZGV0ZWN0KCk7XHJcbn07XHJcblxyXG5UZXh0Tm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZWxlVXRpbHMucmVwbGFjZU5vZGUodGhpcy5lbGVtZW50LCB0aGlzLnJlbmRlcigpKTtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5nZXRPdXRlclRwbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5nZXRJbm5lclRwbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5iaW5kaW5nLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuYmluZGluZyA9IG51bGw7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgVk5vZGUuJGRlc3Ryb3kodGhpcyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KENvbW1lbnROb2RlLCBWTm9kZSk7XHJcbi8vIGNvbW1lbnQgbm9kZVxyXG5mdW5jdGlvbiBDb21tZW50Tm9kZSgpIHtcclxuICAgIENvbW1lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgV05vZGVUeXBlLmNvbW1lbnQsICcjY29tbWVudCcpO1xyXG59XHJcblxyXG5Db21tZW50Tm9kZS5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMubm9kZVZhbHVlKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQ0RhdGFTZWN0aW9uTm9kZSwgVk5vZGUpO1xyXG4vLyBDRGF0YVNlY3Rpb24gbm9kZVxyXG5mdW5jdGlvbiBDRGF0YVNlY3Rpb25Ob2RlKCkge1xyXG4gICAgQ0RhdGFTZWN0aW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIFdOb2RlVHlwZS5jZGF0YVNlY3Rpb24pO1xyXG59XHJcblxyXG51dGlscy5pbmhlcml0KERvY3VtZW50VHlwZU5vZGUsIFZOb2RlKTtcclxuLy8gZG9jdW1lbnQgdHlwZSBub2RlXHJcbmZ1bmN0aW9uIERvY3VtZW50VHlwZU5vZGUoKSB7XHJcbiAgICBEb2N1bWVudFR5cGVOb2RlLnN1cGVyLmNhbGwodGhpcywgV05vZGVUeXBlLmRvY3VtZW50VHlwZSk7XHJcbn1cclxuXHJcbnV0aWxzLmluaGVyaXQoRG9jdW1lbnRGcmFnbWVudE5vZGUsIFZOb2RlKTtcclxuLy8gZG9jdW1lbnQgZnJhZ21lbnQgbm9kZVxyXG5mdW5jdGlvbiBEb2N1bWVudEZyYWdtZW50Tm9kZSgpIHtcclxuICAgIERvY3VtZW50RnJhZ21lbnROb2RlLnN1cGVyLmNhbGwodGhpcywgV05vZGVUeXBlLmRvY3VtZW50RnJhZ21lbnQsICcjZG9jdW1lbnQtZnJhZ21lbnQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRXhwTm9kZSh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcbkV4cE5vZGUucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHRoaXMudmFsdWUgPSBjb21wdXRlKHRoaXMudGV4dCwgc2NvcGUsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuRXhwTm9kZS5wcm90b3R5cGUuZGV0ZWN0ID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgdGhpcy5jb21wdXRlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHJldHVybiAhdXRpbHMuaXNTYW1lKHRoaXMudmFsdWUsIG9sZFZhbHVlKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEJpbmRpbmcoKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgIHRoaXMudGV4dCA9ICcnO1xyXG4gICAgdGhpcy5pc0V4cCA9IGZhbHNlO1xyXG4gICAgdGhpcy53YXRjaGVycyA9IFtdO1xyXG4gICAgdGhpcy5yaWdodFN0ciA9ICcnO1xyXG4gICAgdGhpcy5vdXRwdXQgPSBmYWxzZTtcclxufVxyXG5cclxuQmluZGluZy5wcm90b3R5cGUuc2V0U2NvcGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHRoaXMuc2NvcGUgPSB2YWx1ZTtcclxufTtcclxuXHJcbkJpbmRpbmcucHJvdG90eXBlLnNldE91dHB1dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgdGhpcy5vdXRwdXQgPSB2YWx1ZTtcclxufTtcclxuXHJcbkJpbmRpbmcucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAodGV4dCwgaXNFeHApIHtcclxuICAgIGlmKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pc0V4cCA9IGlzRXhwO1xyXG5cclxuICAgIGlmIChpc0V4cCkge1xyXG4gICAgICAgIHRoaXMud2F0Y2hlcnMucHVzaCh7XHJcbiAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUodGV4dCksXHJcbiAgICAgICAgICAgIGxlZnRTdHI6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XHJcbiAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcbiAgICB2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XHJcblxyXG4gICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBpbmRleDogbWF0Y2guaW5kZXgsXHJcbiAgICAgICAgICAgIGV4cDogbmV3IEV4cE5vZGUobWF0Y2hbMV0pLFxyXG4gICAgICAgICAgICBsZWZ0U3RyOiB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLndhdGNoZXJzLmxlbmd0aCA+IDAgJiYgbGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnJpZ2h0U3RyID0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcclxuICAgIH1cclxufTtcclxuXHJcbkJpbmRpbmcucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKHRoaXMud2F0Y2hlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNFeHAgJiYgdGhpcy53YXRjaGVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJzWzBdLmV4cC5jb21wdXRlKHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhdGNoZXJzWzBdLmV4cC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGV4dCA9ICcnO1xyXG4gICAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3YXRjaGVyKSB7XHJcbiAgICAgICAgd2F0Y2hlci5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcclxuICAgICAgICB0ZXh0ICs9ICh3YXRjaGVyLmxlZnRTdHIgKyB3YXRjaGVyLmV4cC52YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGV4dCArIHRoaXMucmlnaHRTdHI7XHJcbn07XHJcblxyXG5CaW5kaW5nLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKHRoaXMub3V0cHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMud2F0Y2hlcnMuc29tZShmdW5jdGlvbiAod2F0Y2hlcikge1xyXG4gICAgICAgIHJldHVybiB3YXRjaGVyLmV4cC5kZXRlY3Qoc2VsZi5zY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbkJpbmRpbmcucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoSHRtbFBhcnNlciwgUGFyc2VyKTtcclxuZnVuY3Rpb24gSHRtbFBhcnNlcihsZXhlciwgb3B0aW9ucykge1xyXG4gICAgSHRtbFBhcnNlci5zdXBlci5jYWxsKHRoaXMsIGxleGVyLCBvcHRpb25zKTtcclxufVxyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcclxuXHJcbiAgICB2YXIgcm9vdCA9IG5ldyBFbGVtZW50Tm9kZSgndHBsJyk7XHJcbiAgICB2YXIgZG9jdHlwZSwgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkb2N0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3QuJHB1c2hDaGlsZChkb2N0eXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xyXG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIHJvb3QuJHB1c2hDaGlsZChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcclxuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICByb290LiRwdXNoQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcclxuICAgICAgICAgICAgcm9vdC4kcHVzaENoaWxkKHRoaXMuZWxlbWVudCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByb290LiRidWlsZFNpYmxpbmcoKTtcclxuXHJcbiAgICByZXR1cm4gcm9vdC5jaGlsZE5vZGVzO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuZG9jdHlwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubmV4dCgpO1xyXG4gICAgdmFyIGRvY1R5cGUgPSBuZXcgRG9jdW1lbnRUeXBlTm9kZSgpO1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICBkb2NUeXBlLm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0cnMoZG9jVHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgIGRvY1R5cGUuY2hpbGROb2Rlcy5wdXNoKGF0dHIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkb2NUeXBlO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuICAgIHZhciBlbGUgPSBuZXcgRWxlbWVudE5vZGUoKTtcclxuICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRycyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICBlbGUuJHB1c2hBdHRyaWJ1dGUoYXR0cik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGVsZS4kcHVzaENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSB0b2tlbi50ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbGU7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5jaGlsZEVsZW1lbnRzID0gZnVuY3Rpb24gKHApIHtcclxuICAgIHZhciBlbGVzID0gW107XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IENvbW1lbnROb2RlKCk7XHJcbiAgICAgICAgICAgIGNvbW1lbnQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgZWxlcy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBUZXh0Tm9kZSgpO1xyXG4gICAgICAgICAgICB0ZXh0Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGVsZXMucHVzaCh0ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xyXG4gICAgICAgICAgICBlbGVzLnB1c2godGhpcy5lbGVtZW50KHApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbGVzO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuYXR0cnMgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgdmFyIGF0dHJzID0gW107XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYXR0ciA9IG5ldyBBdHRyTm9kZSgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICBhdHRyLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgYXR0ci5vcmdOb2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4uZXF1YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5jb25zdGFudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhdHRycztcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcclxuICAgIH1cclxuICAgIHJldHVybiB7fTtcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmluZGV4Kys7XHJcbn07XHJcblxyXG5leHBvcnQgeyBIdG1sUGFyc2VyIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IGNvbXBvbmVudCwgaW5qZWN0b3IsIGlzQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XHJcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcclxuaW1wb3J0IHsgSHRtbExleGVyIH0gZnJvbSAnLi9odG1sLWxleGVyJztcclxuaW1wb3J0IHsgSHRtbFBhcnNlciB9IGZyb20gJy4vaHRtbC1wYXJzZXInO1xyXG5cclxudmFyIHBhcnNlT3B0aW9ucyA9IHtcclxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcclxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcclxuICAgIGxpdGVyYWxzOiB7XHJcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxyXG4gICAgICAgIG51bGw6IG51bGwsXHJcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcclxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYm9vdHN0cmFwKGlkT3JFbGVtZW50LCBkZWYpIHtcclxuICAgIHZhciBlbGVtZW50LCBlbGVtZW50SWQ7XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGlkT3JFbGVtZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnRJZCA9IGlkT3JFbGVtZW50O1xyXG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE9yRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBlbGVtZW50SWQgPSBpZE9yRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRJZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGlkIGF0dHJpYnV0ZSBmb3Igcm9vdCBjb21wb25lbnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudCA9IGlkT3JFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRlZi50ZW1wbGF0ZSA9IGVsZW1lbnQub3V0ZXJIVE1MO1xyXG4gICAgaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudChlbGVtZW50SWQsIGRlZikpLiRtb3VudChpZE9yRWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlKGh0bWwpIHtcclxuICAgIHZhciBsZXhlciA9IG5ldyBIdG1sTGV4ZXIocGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBwYXJzZXIgPSBuZXcgSHRtbFBhcnNlcihsZXhlciwgcGFyc2VPcHRpb25zKTtcclxuICAgIHJldHVybiBwYXJzZXIucGFyc2UoaHRtbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBpbGUoaHRtbCwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICAgICAgICBnZXRFbWJlZFRwbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXR0aW5ncyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKSxcclxuICAgICAgICBhc3ROb2RlcyA9IHBhcnNlKGh0bWwpO1xyXG5cclxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICBhc3ROb2RlLmNvbXBpbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICBhc3ROb2RlLmdldERpcigpLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBkaXJlY3RpdmUuJGNvbXBpbGUoc2V0dGluZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgc2NvcGUuJGFzdE5vZGVzID0gYXN0Tm9kZXM7XHJcblxyXG4gICAgICAgIGlmICghaXNDb21wb25lbnQoc2NvcGUpKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLiRkaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgICAgIHNjb3BlLiRjaGlsZENvbXBvbmVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLiRkZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN0Tm9kZS5kZXRlY3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN0Tm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZS5saW5rKHNjb3BlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5hZnRlckxpbmsoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZShleHAsIHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoZXhwID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAudHJpbSgpO1xyXG4gICAgaWYgKGV4cC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleHAgPSBleHAucmVwbGFjZSgnJmd0OycsICc+JykucmVwbGFjZSgnJmx0OycsICc8Jyk7XHJcbiAgICB2YXIgbGV4ZXIgPSBuZXcgTGV4ZXIocGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKGxleGVyLCBwYXJzZU9wdGlvbnMpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBvcHRpb25zLmNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGluamVjdG9yLmNyZWF0ZUZpbHRlcihuYW1lKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGV4cCkuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGJvb3RzdHJhcCwgY29tcGlsZSwgY29tcHV0ZSwgcGFyc2UgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuXHJcbnZhciBPUEVSQVRPUlMgPSB7fTtcclxudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xyXG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcclxuXHJcbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XHJcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBMZXhlcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMudG9rZW5zID0gW107XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XHJcbiAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xyXG4gICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XHJcbiAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcclxuICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXMgPSBmdW5jdGlvbiAoY2gsIGNoYXJzKSB7XHJcbiAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgdmFyIG51bSA9IGkgfHwgMTtcclxuICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzTnVtYmVyID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNXaGl0ZXNwYWNlID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcclxuICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XHJcbiAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc0lkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxyXG4gICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNWYWxpZElkZW50aWZpZXJTdGFydCA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuY29kZVBvaW50QXQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5wZWVrTXVsdGljaGFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XHJcbiAgICBpZiAoIXBlZWspIHtcclxuICAgICAgICByZXR1cm4gY2g7XHJcbiAgICB9XHJcbiAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcclxuICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XHJcbiAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xyXG4gICAgICAgIHJldHVybiBjaCArIHBlZWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2g7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNFeHBPcGVyYXRvciA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnRocm93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcclxuICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xyXG4gICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcclxuICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnJlYWROdW1iZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbnVtYmVyID0gJyc7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xyXG4gICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XHJcbiAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxyXG4gICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxyXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXHJcbiAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiBudW1iZXIsXHJcbiAgICAgICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkSWRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxyXG4gICAgICAgIGlkZW50aWZpZXI6IHRydWVcclxuICAgIH0pO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLnJlYWRTdHJpbmcgPSBmdW5jdGlvbiAocXVvdGUpIHtcclxuICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB2YXIgc3RyaW5nID0gJyc7XHJcbiAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XHJcbiAgICB2YXIgZXNjYXBlID0gZmFsc2U7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHJhd1N0cmluZyArPSBjaDtcclxuICAgICAgICBpZiAoZXNjYXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcclxuICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IExleGVyIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aXNGaWx0ZXJ9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxudmFyIEFTVCA9IHt9O1xyXG5BU1QuUHJvZ3JhbSA9ICdQcm9ncmFtJztcclxuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XHJcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XHJcbkFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24gPSAnQ29uZGl0aW9uYWxFeHByZXNzaW9uJztcclxuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcclxuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5VbmFyeUV4cHJlc3Npb24gPSAnVW5hcnlFeHByZXNzaW9uJztcclxuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcclxuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XHJcbkFTVC5JZGVudGlmaWVyID0gJ0lkZW50aWZpZXInO1xyXG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcclxuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xyXG5BU1QuUHJvcGVydHkgPSAnUHJvcGVydHknO1xyXG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcclxuXHJcbmZ1bmN0aW9uIEFzdE5vZGUodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xyXG59XHJcblxyXG5Bc3ROb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG59O1xyXG5cclxuQXN0Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucywgaW50ZXJuYWxzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGQuY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgaW50ZXJuYWxzKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChQcm9ncmFtTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIFByb2dyYW1Ob2RlKCkge1xyXG4gICAgUHJvZ3JhbU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvZ3JhbSk7XHJcbn1cclxuXHJcblByb2dyYW1Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzWzBdLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30pO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCkge1xyXG4gICAgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XHJcbn1cclxuXHJcbkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgaW50ZXJuYWxzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xyXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbn1cclxuXHJcbkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHRhcmdldCA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IGFzc2lnbm1lbnRMZWZ0OiB0cnVlIH0pO1xyXG4gICAgdmFyIHZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xyXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcclxuICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xyXG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcclxufVxyXG5cclxuQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKHRoaXMudGVzdC5jb21waWxlKHNjb3BlKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsdGVybmF0ZS5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KExvZ2ljYWxFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIExvZ2ljYWxFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG59XHJcblxyXG5Mb2dpY2FsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQ7XHJcbiAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5sZWZ0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJyYmJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3x8JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEJpbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQmluYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlci5jYWxsKHRoaXMsIEFTVC5CaW5hcnlFeHByZXNzaW9uKTtcclxuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbn1cclxuXHJcbkJpbmFyeUV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMubGVmdC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5yaWdodC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xyXG4gICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICcqJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyUnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc8JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJzw9JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz49JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz09JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyE9JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz09PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnIT09JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChVbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gVW5hcnlFeHByZXNzaW9uTm9kZShvcGVyYXRvciwgYXJnKSB7XHJcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULlVuYXJ5RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnByZWZpeCA9IHRydWU7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmFyZyA9IGFyZztcclxufVxyXG5cclxuVW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdCwgdmFsdWUgPSB0aGlzLmFyZy5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcclxuICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyEnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSAhdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KExpdGVyYWxOb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gTGl0ZXJhbE5vZGUodmFsdWUpIHtcclxuICAgIExpdGVyYWxOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULkxpdGVyYWwpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblxyXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDYWxsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbk5vZGUoY2FsbGVlLCBhcmdzKSB7XHJcbiAgICBDYWxsRXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQ2FsbEV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XHJcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcclxufVxyXG5cclxuQ2FsbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FsbGVlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHsgY2FsbGVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIGFyZ1ZhbHVlcyA9IHRoaXMuYXJncy5tYXAoZnVuY3Rpb24gKGFyZykge1xyXG4gICAgICAgIHJldHVybiBhcmcuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcclxuICAgICAgICB2YXIgZmlsdGVySW5zID0gb3B0aW9ucy5jcmVhdGVGaWx0ZXIoY29udGV4dC5wcm9wKTtcclxuICAgICAgICBpZiAoaXNGaWx0ZXIoZmlsdGVySW5zKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVySW5zLiRleGVjdXRlLmFwcGx5KGZpbHRlcklucywgYXJnVmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgZm4gPSBjb250ZXh0Lm9ialtjb250ZXh0LnByb3BdO1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KE1lbWJlckV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gTWVtYmVyRXhwcmVzc2lvbk5vZGUob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcclxuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLnN1cGVyLmNhbGwodGhpcywgQVNULk1lbWJlckV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XHJcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbiAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XHJcbn1cclxuXHJcbk1lbWJlckV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIHZhciBvYmogPSB0aGlzLm9iamVjdC5jb21waWxlKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpO1xyXG5cclxuICAgIGlmICh1dGlscy5pc0FycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqW3RoaXMucHJvcGVydHkuY29tcGlsZShvYmosIG9wdGlvbnMsIGludGVybmFscyldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnByb3BlcnR5LmNvbXBpbGUob2JqLCBvcHRpb25zLCBpbnRlcm5hbHMpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChJZGVudGlmaWVyTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIElkZW50aWZpZXJOb2RlKG5hbWUpIHtcclxuICAgIElkZW50aWZpZXJOb2RlLnN1cGVyLmNhbGwodGhpcywgQVNULklkZW50aWZpZXIpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxufVxyXG5cclxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgaWYgKGludGVybmFscykge1xyXG4gICAgICAgIGlmIChpbnRlcm5hbHMuYXNzaWdubWVudExlZnQgfHwgaW50ZXJuYWxzLmNhbGxlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBzY29wZSxcclxuICAgICAgICAgICAgICAgIHByb3A6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbnRlcm5hbHMucHJvcGVydHlLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzdWx0ID0gc2NvcGVbdGhpcy5uYW1lXTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBvcHRpb25zLmxvY2Fscykge1xyXG4gICAgICAgIHJlc3VsdCA9IG9wdGlvbnMubG9jYWxzW3RoaXMubmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChBcnJheUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uTm9kZSgpIHtcclxuICAgIEFycmF5RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuQXJyYXlFeHByZXNzaW9uKTtcclxufVxyXG5cclxudXRpbHMuaW5oZXJpdChQcm9wZXJ0eU5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBQcm9wZXJ0eU5vZGUoKSB7XHJcbiAgICBQcm9wZXJ0eU5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuUHJvcGVydHkpO1xyXG4gICAgdGhpcy5raW5kID0gJ2luaXQnO1xyXG4gICAgdGhpcy5rZXkgPSBudWxsO1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXB1dGVkID0gZmFsc2U7XHJcbn1cclxuXHJcblByb3BlcnR5Tm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBrZXk6IHRoaXMua2V5LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIHsgcHJvcGVydHlLZXk6IHRydWUgfSksXHJcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUuY29tcGlsZShzY29wZSwgb3B0aW9ucylcclxuICAgIH07XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KE9iamVjdEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcykge1xyXG4gICAgT2JqZWN0RXhwcmVzc2lvbk5vZGUuc3VwZXIuY2FsbCh0aGlzLCBBU1QuT2JqZWN0RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5PYmplY3RFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG5cclxuICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdmFyIGRlZiA9IGl0ZW0uY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzQXNzaWduYWJsZShhc3QpIHtcclxuICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcclxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn1cclxuXHJcblBhcnNlci5wcm90b3R5cGUudGhyb3dFcnJvciA9IGZ1bmN0aW9uIChtc2csIHRva2VuKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXHJcbiAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XHJcblxyXG4gICAgdmFyIHZhbHVlID0gdGhpcy5wcm9ncmFtKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnByb2dyYW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gMCAmJiAhdGhpcy5wZWVrKCd9JywgJyknLCAnOycsICddJykpIHtcclxuICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5leHBlY3QoJzsnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb25TdGF0ZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XHJcbiAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgIHJldHVybiBleHA7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlckNoYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xyXG4gICAgICAgIGlmICghaXNBc3NpZ25hYmxlKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUudGVybmFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcclxuICAgIHZhciBhbHRlcm5hdGU7XHJcbiAgICB2YXIgY29uc2VxdWVudDtcclxuICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XHJcbiAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uc3VtZSgnOicpKSB7XHJcbiAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxPUiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5sb2dpY2FsQU5EKCk7XHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUubG9naWNhbEFORCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5lcXVhbGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJz09JywgJyE9JywgJz09PScsICchPT0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5yZWxhdGlvbmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJzwnLCAnPicsICc8PScsICc+PScpKSkge1xyXG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5hZGRpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUubXVsdGlwbGljYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcclxuICAgIHZhciB0b2tlbjtcclxuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKicsICcvJywgJyUnKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUudW5hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcclxuICAgIH1cclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucHJpbWFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcmltYXJ5O1xyXG4gICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xyXG4gICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV4dDtcclxuICAgIHdoaWxlICgobmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpKSkge1xyXG4gICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpbWFyeTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGJhc2VFeHByZXNzaW9uKSB7XHJcbiAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl07XHJcbiAgICB2YXIgcmVzdWx0ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZSh0aGlzLmlkZW50aWZpZXIoKSwgYXJncyk7XHJcbiAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xyXG4gICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcmdzO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5pZGVudGlmaWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XHJcbiAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5jb25zdGFudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XHJcbiAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuYXJyYXlEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xyXG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5vYmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnN1bWUoJ30nKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24gKGUxKSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5wZWVrVG9rZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVla0FoZWFkID0gZnVuY3Rpb24gKGksIGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xyXG4gICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcclxuICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcclxuICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZXhwZWN0ID0gZnVuY3Rpb24gKGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcclxuICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQYXJzZXIgfTsiLCJcclxuZnVuY3Rpb24gZ2V0Q2hpbGROb2Rlcyhub2RlKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzLCAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIGdldENoaWxkTm9kZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlTm9kZShyZWZOb2RlLCBuZXdOb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcclxuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlKTtcclxuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlZk5vZGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGVCZXR3ZWVuKGJlZ2luTm9kZSwgZW5kTm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBiZWdpbk5vZGUucGFyZW50Tm9kZTtcclxuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhwYXJlbnROb2RlKTtcclxuXHJcbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gYmVnaW5Ob2RlICYmIGNoaWxkICE9PSBlbmROb2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZE5vZGUgJiYgY2hpbGQgIT09IGJlZ2luTm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0Tm9kZUFmdGVyKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gcmVmTm9kZSkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjbGVhckNoaWxkTm9kZXMsIHJlcGxhY2VOb2RlLCByZW1vdmVOb2RlLCByZW1vdmVOb2RlQmV0d2VlbiwgaW5zZXJ0Tm9kZUFmdGVyIH07IiwiaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZWxlLXV0aWxzJztcclxuXHJcbmZ1bmN0aW9uIGlzTWVzc2VuZ2VyKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NlbmdlcjtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNNZXNzZW5nZXJ9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gTWVzc2VuZ2VyKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xyXG59XHJcblxyXG5NZXNzZW5nZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xyXG59O1xyXG5cclxuTWVzc2VuZ2VyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZm4pIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldID09PSBmbikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5NZXNzZW5nZXIucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoYXJncywgc2NvcGUpIHtcclxuICAgIHZhciByZXR1cm5WYWx1ZTtcclxuICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuaGFuZGxlcnNbaV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVyc1tpXS5jYWxsKHNjb3BlLCBzY29wZSwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTWVzc2VuZ2VyQnVzKCkge1xyXG4gICAgdGhpcy5tZXNzZW5nZXJzID0ge307XHJcbn1cclxuXHJcbk1lc3NlbmdlckJ1cy5wcm90b3R5cGUuZ2V0TWVzc2VuZ2VyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICghdGhpcy5tZXNzZW5nZXJzW2VdKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzZW5nZXJzW2VdID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubWVzc2VuZ2Vyc1tlXTtcclxufTtcclxuXHJcbk1lc3NlbmdlckJ1cy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZSwgZm4pIHtcclxuICAgIHRoaXMuZ2V0TWVzc2VuZ2VyKGUpLm9uKGZuKTtcclxufTtcclxuXHJcbk1lc3NlbmdlckJ1cy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGUsIGZuKSB7XHJcbiAgICB0aGlzLmdldE1lc3NlbmdlcihlKS5vZmYoZm4pO1xyXG59O1xyXG5cclxuTWVzc2VuZ2VyQnVzLnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKGUsIGFyZ3MsIHNjb3BlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNZXNzZW5nZXIoZSkuZmlyZShhcmdzLCBzY29wZSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBNZXNzZW5nZXIsIE1lc3NlbmdlckJ1cyB9OyIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxyXG4gICAgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxyXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY3Rpb24ob2JqLCBvYmopO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzb21lKG9iaiwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbihvYmosIG9iaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tpbmRleF07XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XHJcbiAgICAgICAgZGVlcCA9IG9iajtcclxuICAgICAgICBvYmogPSBhcmd1bWVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWVwID8gY29weShpdGVtKSA6IGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICB2YXIgbmV3T2JqID0gb2JqZWN0KG9iaik7XHJcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkodmFsdWUpIDogdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld09iajtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRlbmQoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XHJcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcclxuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZXApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2UoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcclxuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmplY3Qobykge1xyXG4gICAgZnVuY3Rpb24gRigpIHtcclxuICAgIH1cclxuXHJcbiAgICBGLnByb3RvdHlwZSA9IG87XHJcbiAgICByZXR1cm4gbmV3IEYoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcclxuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XHJcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xyXG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XHJcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XHJcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XHJcbiAgICB2YXIgc2FtZSA9IChvYmoxID09PSBvYmoyKTtcclxuXHJcbiAgICBpZiAoIXNhbWUpIHtcclxuICAgICAgICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoxLmxlbmd0aCA9PT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpICYmIGdldFByb3RvdHlwZU9mKG9iajEpID09PSBnZXRQcm90b3R5cGVPZihvYmoyKSkge1xyXG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xyXG4gICAgaWYgKGRlYnVnTW9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gb2JqO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gc3RyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShpdGVtKSA9PT0gbG93ZXJjYXNlKHN0cikpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAoa2V5MywgdmFsdWUzKSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNQcm9wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAoa2V5MywgdmFsdWUzKSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNQcm9wID8gdGFyZ2V0IDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UHJvcGVydHkob2JqLCBrZXksIHZhbHVlLCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFoYXNQcm9wKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZm9yRWFjaCxcclxuICAgIHNvbWUsXHJcbiAgICBjb3B5LFxyXG4gICAgZXh0ZW5kLFxyXG4gICAgbWVyZ2UsXHJcbiAgICBvYmplY3QsXHJcbiAgICBpbmhlcml0LFxyXG4gICAgbG93ZXJjYXNlLFxyXG4gICAgdXBwZXJjYXNlLFxyXG4gICAgaXNVbmRlZmluZWQsXHJcbiAgICBpc0RlZmluZWQsXHJcbiAgICBpc09iamVjdCxcclxuICAgIGlzQmxhbmtPYmplY3QsXHJcbiAgICBpc051bWJlcixcclxuICAgIGlzRGF0ZSxcclxuICAgIGlzRnVuY3Rpb24sXHJcbiAgICBpc1JlZ0V4cCxcclxuICAgIGlzQm9vbGVhbixcclxuICAgIGlzQXJyYXksXHJcbiAgICBpc1N0cmluZyxcclxuICAgIGlzU2FtZSxcclxuICAgIGRlYnVnLFxyXG4gICAgY29udGFpbnMsXHJcbiAgICBjb250YWluc1N0cixcclxuICAgIGhhc1Byb3BlcnR5LFxyXG4gICAgZ2V0UHJvcGVydHksXHJcbiAgICBzZXRQcm9wZXJ0eVxyXG59OyIsImltcG9ydCB7aXNNZXNzZW5nZXJ9IGZyb20gJy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0ICogYXMgZWxlVXRpbHMgZnJvbSAnLi4vdXRpbGl0eS9lbGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQge2NvbXBpbGV9IGZyb20gJy4uL3BhcnNlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQoKSB7XHJcbiAgICB0aGlzLiRhc3ROb2RlcyA9IFtdO1xyXG4gICAgdGhpcy4kb3duZXJWTm9kZSA9IG51bGw7XHJcbiAgICB0aGlzLiRwYXJlbnQgPSBudWxsO1xyXG4gICAgdGhpcy4kY2hpbGRDb21wb25lbnRzID0gW107XHJcbiAgICB0aGlzLiRkaXJlY3RpdmVzID0gW107XHJcbiAgICB0aGlzLiRkZXRlY3RUaW1lb3V0ID0gbnVsbDtcclxufVxyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZi4kZGVmLnRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuJGRlZi50ZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGYuJGRlZi50ZW1wbGF0ZUlkKSkge1xyXG4gICAgICAgICAgICB2YXIgdHBsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi4kZGVmLnRlbXBsYXRlSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRwbCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHBsLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZi4kZGVmLnRlbXBsYXRlVXJsKSkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoc2VsZi4kZGVmLnRlbXBsYXRlVXJsKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kcmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgc2VsZi4kZ2V0VGVtcGxhdGUoKS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoY29tcGlsZShodG1sLCB7XHJcbiAgICAgICAgICAgICAgICBnZXRFbWJlZFRwbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLiRvd25lclZOb2RlLmdldElubmVyVHBsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKHNlbGYpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kbW91bnQgPSBmdW5jdGlvbiAoaWRPckVsZW1lbnQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcywgZWxlbWVudDtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoaWRPckVsZW1lbnQpKSB7XHJcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkT3JFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQgPSBpZE9yRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBlbGVVdGlscy5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XHJcbiAgICB0aGlzLiRyZW5kZXIoKS50aGVuKGZ1bmN0aW9uIChlbGUpIHtcclxuICAgICAgICBzZWxmLiRvbk1vdW50aW5nKCk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGUpO1xyXG4gICAgICAgIHNlbGYuJG9uTW91bnRlZCgpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRkZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy4kZGV0ZWN0VGltZW91dCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRkZXRlY3RUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi4kZGV0ZWN0VGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgc2VsZi4kb25VcGRhdGluZygpO1xyXG4gICAgICAgIHNlbGYuJGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICAgICAgYXN0Tm9kZS5kZXRlY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLiRvblVwZGF0ZWQoKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuJG9uRGVzdHJveWluZygpO1xyXG4gICAgdGhpcy4kYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xyXG4gICAgICAgIGFzdE5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLiRvbkRlc3Ryb3llZCgpO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kdXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uVXBkYXRlKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kaGFzQXR0ciA9IGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcy4kZGVmLnByb3BzLCBwcm9wLCB0cnVlKTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJHNldEF0dHIgPSBmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcclxuICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMsIHByb3AsIHZhbHVlLCB0cnVlKTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGhhc0V2ZW50ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHJldHVybiB1dGlscy5jb250YWluc1N0cih0aGlzLiRkZWYuZXZlbnRzLCBlLCB0cnVlKTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGxpc3RlbiA9IGZ1bmN0aW9uIChlLCBmbikge1xyXG4gICAgdmFyIG1lc3NlbmdlciA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIGUsIHRydWUpO1xyXG4gICAgaWYgKGlzTWVzc2VuZ2VyKG1lc3NlbmdlcikpIHtcclxuICAgICAgICBtZXNzZW5nZXIub24oZm4pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihlICsgJyBpcyBub3QgYSBldmVudCcpO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kb25DcmVhdGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkNyZWF0aW5nKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbkNyZWF0aW5nLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRvbkNyZWF0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAodXRpbHMuaXNPYmplY3QodGhpcy4kZGVmLmluamVjdCkpIHtcclxuICAgICAgICB1dGlscy5mb3JFYWNoKHRoaXMuJGRlZi5pbmplY3QsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNlbGZba2V5XSA9IGluamVjdG9yLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uQ3JlYXRlZCkpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25DcmVhdGVkLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRvblVwZGF0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uVXBkYXRpbmcpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uVXBkYXRpbmcuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJG9uVXBkYXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vblVwZGF0ZWQpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uVXBkYXRlZC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kb25Nb3VudGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbk1vdW50aW5nKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbk1vdW50aW5nLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRvbk1vdW50ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25Nb3VudGVkKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbk1vdW50ZWQuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJG9uRGVzdHJveWluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkRlc3Ryb3lpbmcpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uRGVzdHJveWluZy5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy4kZGV0ZWN0VGltZW91dCl7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuJGRldGVjdFRpbWVvdXQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kb25EZXN0cm95ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25EZXN0cm95ZWQpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uRGVzdHJveWVkLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLiRhc3ROb2RlcyA9IG51bGw7XHJcbiAgICB0aGlzLiRvd25lclZOb2RlID0gbnVsbDtcclxuICAgIHRoaXMuJHBhcmVudCA9IG51bGw7XHJcbiAgICB0aGlzLiRjaGlsZENvbXBvbmVudHMgPSBudWxsO1xyXG4gICAgdGhpcy4kZGlyZWN0aXZlcyA9IG51bGw7XHJcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlyZWN0aXZlKCkge1xyXG4gICAgdGhpcy5vdXRwdXQgPSBmYWxzZTtcclxuICAgIHRoaXMuJGJpbmRpbmcgPSBudWxsO1xyXG4gICAgdGhpcy4kbm9kZSA9IG51bGw7XHJcbn1cclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJG9uQ3JlYXRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25DcmVhdGluZykpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25DcmVhdGluZy5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kb25DcmVhdGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHRoaXMuJGRlZi5pbmplY3QpKSB7XHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaCh0aGlzLiRkZWYuaW5qZWN0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBzZWxmW2tleV0gPSBpbmplY3Rvci5jcmVhdGVTZXJ2aWNlKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkNyZWF0ZWQpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uQ3JlYXRlZC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kYmluZE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgdGhpcy4kbm9kZSA9IG5vZGU7XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiRiaW5kVmFsdWUgPSBmdW5jdGlvbiAoYmluZGluZykge1xyXG4gICAgdGhpcy4kYmluZGluZyA9IGJpbmRpbmc7XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiRjb21waWxlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkNvbXBpbGUpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uQ29tcGlsZS5jYWxsKHRoaXMsIHRoaXMuJG5vZGUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kaW5zZXJ0ID0gZnVuY3Rpb24gKGVsZSwgY29tKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25JbnNlcnQpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uSW5zZXJ0LmNhbGwodGhpcywgZWxlLCB0aGlzLiRiaW5kaW5nLCBjb20pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kZGV0ZWN0ID0gZnVuY3Rpb24gKGVsZSwgY29tKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25EZXRlY3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGRlZi5vbkRldGVjdC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kYmluZGluZywgY29tKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy4kYmluZGluZy5kZXRlY3QoKSkge1xyXG4gICAgICAgIHRoaXMuJHVwZGF0ZShlbGUsIGNvbSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiR1cGRhdGUgPSBmdW5jdGlvbiAoZWxlLCBjb20pIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vblVwZGF0ZSkpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25VcGRhdGUuY2FsbCh0aGlzLCBlbGUsIHRoaXMuJGJpbmRpbmcsIGNvbSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5EaXJlY3RpdmUucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uRGVzdHJveSkpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLiRiaW5kaW5nID0gbnVsbDtcclxuICAgIHRoaXMuJG5vZGUgPSBudWxsO1xyXG59OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcigpIHtcclxuXHJcbn1cclxuXHJcbkZpbHRlci5wcm90b3R5cGUuJGV4ZWN1dGUgPSBmdW5jdGlvbiAoZWxlKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25FeGVjdXRlKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRkZWYub25FeGVjdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5GaWx0ZXIucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uRGVzdHJveSkpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5GaWx0ZXIucHJvdG90eXBlLiRvbkNyZWF0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uQ3JlYXRpbmcpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uQ3JlYXRpbmcuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkZpbHRlci5wcm90b3R5cGUuJG9uQ3JlYXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmICh1dGlscy5pc09iamVjdCh0aGlzLiRkZWYuaW5qZWN0KSkge1xyXG4gICAgICAgIHV0aWxzLmZvckVhY2godGhpcy4kZGVmLmluamVjdCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgc2VsZltrZXldID0gaW5qZWN0b3IuY3JlYXRlU2VydmljZSh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25DcmVhdGVkKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbkNyZWF0ZWQuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcclxuaW1wb3J0IHsgdHlwZUNvbnN0LCBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IERpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBleHRlbmRBbmRXYXRjaFByb3BzIH0gZnJvbSAnLi93YXRjaCc7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQobmFtZSwgZGVmKSB7XHJcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcclxuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5jb21wb25lbnQsXHJcbiAgICAgICAgc3VwZXJDbGFzczogQ29tcG9uZW50LFxyXG4gICAgICAgIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuJG9uQ3JlYXRpbmcoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnN1cGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KHRoaXMuJGRlZi5wcm9wcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHRlbmRBbmRXYXRjaFByb3BzKHNlbGYsIHRoaXMuJGRlZi5wcm9wcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh0aGlzLiRkZWYuZXZlbnRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGRlZi5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmW2VdID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgZGVmKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkZWYpKSB7XHJcbiAgICAgICAgZGVmID0ge1xyXG4gICAgICAgICAgICBvbkluc2VydDogZGVmLFxyXG4gICAgICAgICAgICBvblVwZGF0ZTogZGVmXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcclxuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5kaXJlY3RpdmUsXHJcbiAgICAgICAgc3VwZXJDbGFzczogRGlyZWN0aXZlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyKG5hbWUsIGRlZikge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGVmKSkge1xyXG4gICAgICAgIGRlZiA9IHtcclxuICAgICAgICAgICAgb25FeGVjdXRlOiBkZWZcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LmZpbHRlcixcclxuICAgICAgICBzdXBlckNsYXNzOiBGaWx0ZXJcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGRlZikge1xyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3Quc2VydmljZSxcclxuICAgICAgICBzdXBlckNsYXNzOiBTZXJ2aWNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaXJlY3RpdmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRmlsdGVyKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZpbHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTZXJ2aWNlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFNlcnZpY2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGluamVjdG9yLCBjb21wb25lbnQsIGRpcmVjdGl2ZSwgZmlsdGVyLCBzZXJ2aWNlLCBpc0NvbXBvbmVudCwgaXNEaXJlY3RpdmUsIGlzRmlsdGVyLCBpc1NlcnZpY2UgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi4vdXRpbGl0eS9tZXNzYWdlJztcclxuXHJcbnZhciB0eXBlQ29uc3QgPSB7XHJcbiAgICBmaWx0ZXI6ICdmaWx0ZXInLFxyXG4gICAgc2VydmljZTogJ3NlcnZpY2UnLFxyXG4gICAgY29tcG9uZW50OiAnY29tcG9uZW50JyxcclxuICAgIGRpcmVjdGl2ZTogJ2RpcmVjdGl2ZSdcclxufTtcclxuXHJcbnZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpO1xyXG5cclxuZnVuY3Rpb24gSW5qZWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHt9O1xyXG4gICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzID0ge307XHJcbiAgICB0aGlzLmluc0NvbnRhaW5lciA9IHt9O1xyXG59XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0TWFwcGluZyA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUpIHtcclxuICAgIGlmICghdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV0gPSB7fTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmdldEluc3RhbmNlcyA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUpIHtcclxuICAgIGlmICghdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXSkge1xyXG4gICAgICAgIHRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0gPSBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGNvbnRyYWN0VHlwZSwgY29udHJhY3ROYW1lLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgdmFyIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcclxuXHJcbiAgICBpZiAobWFwcGluZ1tjb250cmFjdE5hbWVdICE9IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJyAnICsgY29udHJhY3ROYW1lICsgJyBpcyBhbHJlYWR5IGV4aXN0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXBwaW5nW2NvbnRyYWN0TmFtZV0gPSBjb25zdHJ1Y3RvcjtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5yZWdpc3RlckNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUsIGNvbnN0cnVjdG9yKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyKHR5cGVDb25zdC5jb21wb25lbnQsIGNvbnRyYWN0TmFtZSwgY29uc3RydWN0b3IpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLnJlZ2lzdGVyRGlyZWN0aXZlID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSwgY29uc3RydWN0b3IpIHtcclxuICAgIHRoaXMucmVnaXN0ZXIodHlwZUNvbnN0LmRpcmVjdGl2ZSwgY29udHJhY3ROYW1lLCBjb25zdHJ1Y3Rvcik7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlLCBjb250cmFjdE5hbWUsIGlnbm9yZUNhc2UpIHtcclxuICAgIHZhciBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XHJcblxyXG4gICAgaWYgKGlnbm9yZUNhc2UpIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkobWFwcGluZywgY29udHJhY3ROYW1lLCBpZ25vcmVDYXNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWFwcGluZ1tjb250cmFjdE5hbWVdICE9IG51bGw7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY29udGFpbnNDb21wb25lbnQgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWlucyh0eXBlQ29uc3QuY29tcG9uZW50LCBjb250cmFjdE5hbWUsIHRydWUpXHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY29udGFpbnNEaXJlY3RpdmUgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWlucyh0eXBlQ29uc3QuZGlyZWN0aXZlLCBjb250cmFjdE5hbWUsIHRydWUpXHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGNvbnRyYWN0VHlwZSwgY29udHJhY3ROYW1lLCBpZ25vcmVDYXNlKSB7XHJcbiAgICB2YXIgY29uc3RydWN0b3IsIG1hcHBpbmcgPSB0aGlzLmdldE1hcHBpbmcoY29udHJhY3RUeXBlKTtcclxuXHJcbiAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gdXRpbHMuZ2V0UHJvcGVydHkobWFwcGluZywgY29udHJhY3ROYW1lLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbWFwcGluZ1tjb250cmFjdE5hbWVdXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnN0cnVjdG9yID09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udHJhY3RUeXBlICsgJyAnICsgY29udHJhY3ROYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmNvbXBvbmVudCwgY29udHJhY3ROYW1lKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXREaXJlY3RpdmUgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmRpcmVjdGl2ZSwgY29udHJhY3ROYW1lKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXRGaWx0ZXIgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQodHlwZUNvbnN0LmZpbHRlciwgY29udHJhY3ROYW1lKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXRTZXJ2aWNlID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5zZXJ2aWNlLCBjb250cmFjdE5hbWUpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUsIGNvbnRyYWN0TmFtZSkge1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5nZXQoY29udHJhY3RUeXBlLCBjb250cmFjdE5hbWUpLCBpbnN0YW5jZTtcclxuXHJcbiAgICBzd2l0Y2ggKGNvbnRyYWN0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgY29udHJhY3RUeXBlLmNvbXBvbmVudDpcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChjb25zdHJ1Y3Rvcik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgY29udHJhY3RUeXBlLmRpcmVjdGl2ZTpcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZURpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgY29udHJhY3RUeXBlLmZpbHRlcjpcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUZpbHRlcihjb25zdHJ1Y3Rvcik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgY29udHJhY3RUeXBlLnNlcnZpY2U6XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVTZXJ2aWNlKGNvbnN0cnVjdG9yKTsgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTsgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNyZWF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25zdHJ1Y3Rvcikge1xyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICBpbnN0YW5jZS4kb25DcmVhdGVkKCk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY3JlYXRlRGlyZWN0aXZlID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldERpcmVjdGl2ZShjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIGluc3RhbmNlLiRvbkNyZWF0ZWQoKTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5jcmVhdGVGaWx0ZXIgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RmlsdGVyKGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgaW5zdGFuY2UuJG9uQ3JlYXRlZCgpO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNyZWF0ZVNlcnZpY2UgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcclxuICAgIHZhciBpbnN0YW5jZSwgc2VydmljZXMgPSB0aGlzLmdldEluc3RhbmNlcyh0eXBlQ29uc3Quc2VydmljZSk7XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbnN0cnVjdG9yLnByb3RvdHlwZS4kZGVmLm5vblNoYXJlZCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBzZXJ2aWNlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBjb25zdHJ1Y3RvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgICBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgIGluc3RhbmNlLiRvbkNyZWF0ZWQoKTtcclxuICAgICAgICBzZXJ2aWNlcy5wdXNoKGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0V2FpdGluZ1RvRXh0ZW5kcyA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUpIHtcclxuICAgIGlmICghdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLnNldFdhaXRpbmdUb0V4dGVuZHMgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlLCB2YWx1ZSkge1xyXG4gICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSB2YWx1ZTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5idWlsZENvbnN0cnVjdG9yID0gZnVuY3Rpb24gbWFrZUNvbnN0cnVjdG9yKGNvbnRyYWN0TmFtZSwgZGVmLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGNvbnN0cnVjdG9yLCB3YWl0aW5nVG9FeHRlbmRzID0gc2VsZi5nZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihvcHRpb25zLmdldENvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gb3B0aW9ucy5nZXRDb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgPSBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLiRvbkNyZWF0aW5nKCk7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QodGhpcy4kZGVmLnByb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKHRoaXMsIHRoaXMuJGRlZi5wcm9wcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodGhpcy4kZGVmLmV2ZW50cykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRlZi5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGZbZV0gPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucy5zdXBlckNsYXNzKSkge1xyXG4gICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIG9wdGlvbnMuc3VwZXJDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IucHJvdG90eXBlLiRrZXkgPSBjb250cmFjdE5hbWU7XHJcblxyXG4gICAgLy8gYXBwbHkgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRlZi5leHRlbmRzKSkge1xyXG4gICAgICAgIGlmIChpbmplY3Rvci5jb250YWlucyhvcHRpb25zLmNvbnRyYWN0VHlwZSwgZGVmLmV4dGVuZHMpKSB7XHJcbiAgICAgICAgICAgIHZhciBzdXBlck9uZSA9IGluamVjdG9yLmdldChvcHRpb25zLmNvbnRyYWN0VHlwZSwgZGVmLmV4dGVuZHMpO1xyXG4gICAgICAgICAgICB2YXIgZGVmMiA9IGV4dGVuZERlZihkZWYsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3IoY29udHJhY3ROYW1lLCBkZWYyLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3VwZXJOYW1lOiBkZWYuZXh0ZW5kcyxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoc3VwZXJPbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmMiA9IGV4dGVuZERlZihkZWYsIHN1cGVyT25lKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5Db25zdHJ1Y3Rvcihjb250cmFjdE5hbWUsIGRlZjIsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVtYWluQ29uc3RydWN0b3IoY29udHJhY3ROYW1lLCBkZWYsIGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBleHRlbmREZWYoZGVmLCBzdXBlck9uZSkge1xyXG4gICAgICAgIGlmIChzdXBlck9uZS5wcm90b3R5cGUuJGRlZiAmJiBzdXBlck9uZS5wcm90b3R5cGUuJGRlZi5wcm90ZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG9wdGlvbnMuY29udHJhY3RUeXBlICsgJzogJyArIGRlZi5leHRlbmRzICsgJyBpcyBwcm90ZWN0ZWQsIGl0IGlzIG5vdCBhbGxvd2VkIHRvIGV4dGVuZCEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0cnVlLCB1dGlscy5jb3B5KHRydWUsIHN1cGVyT25lLnByb3RvdHlwZS4kZGVmKSwgZGVmKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1haW5Db25zdHJ1Y3RvcihuYW1lLCBkZWYsIGNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiRkZWYgPSBkZWY7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBtZXRob2RzXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRlZi5tZXRob2RzKSkge1xyXG4gICAgICAgICAgICB1dGlscy5leHRlbmQoY29uc3RydWN0b3IucHJvdG90eXBlLCBkZWYubWV0aG9kcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnRcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlcihvcHRpb25zLmNvbnRyYWN0VHlwZSwgbmFtZSwgY29uc3RydWN0b3IpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhbnkgY29tcG9uZW50IGV4dGVuZHMgY3VycmVudCBjb21wb25lbnRcclxuICAgICAgICB2YXIgd2FpdGluZ1RvRXh0ZW5kczIgPSBbXTtcclxuICAgICAgICB3YWl0aW5nVG9FeHRlbmRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uc3VwZXJOYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNhbGxiYWNrLmNhbGwobnVsbCwgY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kczIucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYuc2V0V2FpdGluZ1RvRXh0ZW5kcyhvcHRpb25zLmNvbnRyYWN0VHlwZSwgd2FpdGluZ1RvRXh0ZW5kczIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufTtcclxuXHJcbmV4cG9ydCB7IHR5cGVDb25zdCwgSW5qZWN0b3IsIGluamVjdG9yIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7aW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZSgpIHtcclxuXHJcbn1cclxuXHJcblNlcnZpY2UucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uRGVzdHJveSkpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25EZXN0cm95LmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5TZXJ2aWNlLnByb3RvdHlwZS4kb25DcmVhdGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkNyZWF0aW5nKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbkNyZWF0aW5nLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5TZXJ2aWNlLnByb3RvdHlwZS4kb25DcmVhdGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHRoaXMuJGRlZi5pbmplY3QpKSB7XHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaCh0aGlzLiRkZWYuaW5qZWN0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBzZWxmW2tleV0gPSBpbmplY3Rvci5jcmVhdGVTZXJ2aWNlKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkNyZWF0ZWQpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uQ3JlYXRlZC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuLi91dGlsaXR5L21lc3NhZ2UnO1xyXG5cclxudmFyIHByZWZpeCA9ICckJCc7XHJcblxyXG5mdW5jdGlvbiBleHRlbmRBbmRXYXRjaFByb3BzKGluc3RhbmNlLCBwcm9wcykge1xyXG4gICAgdXRpbHMuZm9yRWFjaChwcm9wcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpbnN0YW5jZVtwcmVmaXggKyBrZXldID0gY29udmVydFZhbHVlKHZhbHVlLCBvbmNoYW5nZSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW3ByZWZpeCArIGtleV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJlZml4ICsga2V5XSAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVtwcmVmaXggKyBrZXldID0gY29udmVydFZhbHVlKG5ld1ZhbHVlLCBvbmNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb25jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25jaGFuZ2UoKSB7XHJcbiAgICAgICAgaW5zdGFuY2UuJGRldGVjdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgcnhGbGFnID0gJ3JlYWN0aXZlJztcclxuXHJcbmZ1bmN0aW9uIHdhdGNoUHJvcHMob2JqLCBvbmNoYW5nZSkge1xyXG4gICAgaWYgKG9ialtwcmVmaXggKyByeEZsYWddKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHV0aWxzLmZvckVhY2gob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChwcmVmaXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9ialtwcmVmaXggKyBrZXldID0gY29udmVydFZhbHVlKHZhbHVlLCBvbmNoYW5nZSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpbcHJlZml4ICsga2V5XTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmpbcHJlZml4ICsga2V5XSAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbcHJlZml4ICsga2V5XSA9IGNvbnZlcnRWYWx1ZShuZXdWYWx1ZSwgb25jaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uY2hhbmdlLmNhbGwodGhpcywga2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgb2JqW3ByZWZpeCArIHJ4RmxhZ10gPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VmFsdWUodmFsdWUsIG9uY2hhbmdlKSB7XHJcbiAgICBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBSZWFjdGl2ZUFycmF5LmZyb21BcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgbmV3VmFsdWUub25jaGFuZ2Uub24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBvbmNoYW5nZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgd2F0Y2hQcm9wcyh2YWx1ZSwgb25jaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxudXRpbHMuaW5oZXJpdChSZWFjdGl2ZUFycmF5LCBBcnJheSk7XHJcbmZ1bmN0aW9uIFJlYWN0aXZlQXJyYXkoKSB7XHJcbiAgICBSZWFjdGl2ZUFycmF5LnN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcblJlYWN0aXZlQXJyYXkuZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xyXG4gICAgdmFyIG5ld0FyciA9IG5ldyBSZWFjdGl2ZUFycmF5KCk7XHJcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIG5ld0Fyci5wdXNoKGNvbnZlcnRWYWx1ZShpdGVtLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG5ld0Fyci5vbmNoYW5nZS5maXJlKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgICBuZXdBcnIub25jaGFuZ2UuZmlyZSgpO1xyXG4gICAgcmV0dXJuIG5ld0FycjtcclxufTtcclxuXHJcblJlYWN0aXZlQXJyYXkucHJvdG90eXBlLm9uY2hhbmdlID0gbmV3IE1lc3NlbmdlcigpO1xyXG5cclxudmFyIHByb3h5TWV0aG9kID0gJ3B1c2ggcG9wIHNoaWZ0IHVuc2hpZnQgcmV2ZXJzZSBzb3J0IHNwbGljZScsXHJcbiAgICBwcm94eU1ldGhvZHMgPSBwcm94eU1ldGhvZC5zcGxpdCgnICcpO1xyXG5cclxucHJveHlNZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgUmVhY3RpdmVBcnJheS5wcm90b3R5cGVba2V5XSA9IG1ha2VQcm94eU1ldGhvZChrZXkpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VQcm94eU1ldGhvZChuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb252ZXJ0VmFsdWUoaXRlbSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbmNoYW5nZS5maXJlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBBcnJheS5wcm90b3R5cGVbbmFtZV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgdGhpcy5vbmNoYW5nZS5maXJlKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZXh0ZW5kQW5kV2F0Y2hQcm9wcyB9OyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fOyJdLCJzb3VyY2VSb290IjoiIn0=