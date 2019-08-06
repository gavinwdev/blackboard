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
/*! exports provided: injector, component, directive, filter, service, isComponent, isDirective, isFilter, isService, bootstrap, compile, compute, forEach, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, debug, contains, containsStr, hasProperty, getProperty, setProperty, empty, replace, remove, insertAfter, removeBetween, isMessenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeBetween", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["removeBetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return _utility__WEBPACK_IMPORTED_MODULE_0__["isMessenger"]; });

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
    onInserted: function (ele, binding) {
        if (!binding.compute()) {
            this.comment = document.createComment(ele.outerHTML);
            _utility__WEBPACK_IMPORTED_MODULE_2__["replace"](ele, this.comment);
        }
    },
    onUpdate: function (ele, binding) {
        if (binding.compute()) {
            if (this.comment) {
                _utility__WEBPACK_IMPORTED_MODULE_2__["replace"](this.comment, ele);
                this.comment = null;
            }
        }
        else {
            if (!this.comment) {
                this.comment = document.createComment(ele.outerHTML);
                _utility__WEBPACK_IMPORTED_MODULE_2__["replace"](ele, this.comment);
            }
        }
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-bind', function(ele, binding){
    ele.innerText = binding.compute();
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-model', {
    onInserted: function (ele, binding, com) {
        this.$update(ele, com);

        if(com == null){
           ele.addEventListener('change', function(e){
                _utility__WEBPACK_IMPORTED_MODULE_2__["setProperty"](binding.scope, binding.text, e.target.value);
           });
        }
        else{
            if(_utility__WEBPACK_IMPORTED_MODULE_2__["isMessenger"](com.change)){
                com.change.on(function(e, args){
                    _utility__WEBPACK_IMPORTED_MODULE_2__["setProperty"](binding.scope, binding.text, args.newvalue);
                });
            }
            throw new Error('Compoent ' + com.$key + 'must define [change] event');
        }
    },
    onUpdate:function(ele, binding, com){
        if(com == null){
            ele.value = binding.compute();
         }
         else{
             com.value = binding.compute();
         }
    }
});

Object(_view__WEBPACK_IMPORTED_MODULE_0__["directive"])('b-repeat', {
    onInserted: function(ele, binding){
        this.start = document.createComment('start: ' + ele.outerHTML);
        this.end = document.createComment('end: ' + ele.outerHTML);
    
        ele.parentNode.insertBefore(this.start, ele);
        _utility__WEBPACK_IMPORTED_MODULE_2__["insertAfter"](this.end, ele);

        this.$update(ele);
    },
    onUpdate: function (ele, binding) {
        var pattern =  /^(\w+)\s+in\s+(\w+)$/i;
        var result = pattern.exec(binding.text);
    
        if(result == null){
            throw new Error("b-repeat: parameter is not valid");
        }
    
        var itemExp = result[0];
        var itemsExp = result[1];
        var items = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compute"])(itemsExp, binding.scope);
    
        if(items == null){
           _utility__WEBPACK_IMPORTED_MODULE_2__["remove"](ele);
        }
    
        this.comment = null;
    
        var fragment = document.createDocumentFragment();
    
        _utility__WEBPACK_IMPORTED_MODULE_2__["forEach"](items, function(key, value){
            var childScope = _utility__WEBPACK_IMPORTED_MODULE_2__["object"](binding.scope);
            childScope[itemExp] = value;
            fragment.appendChild(Object(_parser__WEBPACK_IMPORTED_MODULE_1__["compile"])(ele.outerHTML)(childScope));
        });

        _utility__WEBPACK_IMPORTED_MODULE_2__["removeBetween"](this.start, this.end);
        this.end.parentNode.insertBefore(fragment, this.end);
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
    HtmlLexer.super(this, options);
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
    notation: 12
};

// basic node
function SNode(type, name) {
    this.nodeType = type;
    this.nodeName = name;
    this.nodeValue = '';
    this.childNodes = [];
    this.parentNode = null;
    this.previousSibling = null;
    this.nextSibling = null;
    this.firstChild = null;
    this.lastChild = null;
    this.ownerDocument = null;
    this.scope = null;
}

SNode.prototype.hasChildNodes = function () {
    return this.childNodes.length !== 0;
};

SNode.prototype.compile = function () {
    this.childNodes.forEach(function (child) {
        child.compile();
    });
};

SNode.prototype.link = function (scope) {
    this.scope = scope;
    return this.childNodes.map(function (child) {
        child.link(scope);
    });
};

SNode.prototype.detect = function () {
    this.childNodes.forEach(function (child) {
        child.detect();
    });
};

SNode.prototype.inserting = function () {
    this.childNodes.forEach(function (child) {
        child.inserting();
    });
};

SNode.prototype.inserted = function () {
    this.childNodes.forEach(function (child) {
        child.inserted();
    });
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](DocumentNode, SNode);
// document node
function DocumentNode() {
    DocumentNode.super(this, WNodeType.document);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ElementNode, SNode);
// element node
function ElementNode() {
    ElementNode.super(this, WNodeType.element);
    this.element = null;
    this.component = null;
}

ElementNode.prototype.link = function (scope) {
    var self = this;

    self.scope = scope;
    self.element = document.createElement(self.nodeName);

    if (_view__WEBPACK_IMPORTED_MODULE_3__["injector"].containsComponent(this.nodeName)) {
        self.component = _view__WEBPACK_IMPORTED_MODULE_3__["injector"].createComponent(this.nodeName);
        self.component.$parent = scope;
        if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](scope.$children)) {
            scope.$children.push(self.component);
        }
        self.childNodes.forEach(function (child) {
            switch (child.nodeType) {
                case WNodeType.attribute: {
                    child.link(scope, self.element, self.component);
                }
                    break;
            }
        });
        self.component.$mount(self.element);
    }
    else {
        self.childNodes.forEach(function (child) {
            switch (child.nodeType) {
                case WNodeType.element:
                case WNodeType.text: {
                    self.element.appendChild(child.link(scope));
                }
                    break;
                case WNodeType.attribute: {
                    child.link(scope, self.element);
                }
                    break;
            }
        });
    }

    self.inserting();

    return self.element;
};

ElementNode.prototype.detect = function () {
    this.childNodes.forEach(function (child) {
        child.detect();
    });
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](TextNode, SNode);
// text node
function TextNode() {
    TextNode.super(this, WNodeType.text, '#text');
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

TextNode.prototype.detect = function () {
    if (this.binding.detect()) {
        _utility_ele_utils__WEBPACK_IMPORTED_MODULE_1__["replace"](this.element, this.render());
    }
};

TextNode.prototype.render = function () {
    var value = this.binding.compute();
    this.element = document.createTextNode(value);
    return this.element;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CommentNode, SNode);
// comment node
function CommentNode() {
    CommentNode.super(this, WNodeType.comment, '#comment');
}

CommentNode.prototype.link = function () {
    return document.createComment(this.nodeValue);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CDataSectionNode, SNode);
// CDataSection node
function CDataSectionNode() {
    CDataSectionNode.super(this, WNodeType.cdataSection);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](DocumentTypeNode, SNode);
// document type node
function DocumentTypeNode() {
    DocumentTypeNode.super(this, WNodeType.documentType);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](DocumentFragmentNode, SNode);
// document fragment node
function DocumentFragmentNode() {
    DocumentFragmentNode.super(this, WNodeType.documentFragment, '#document-fragment');
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](AttrNode, SNode);
// attribute node
function AttrNode() {
    AttrNode.super(this, WNodeType.attribute);
    this.binding = new Binding();
    this.element = null;
    this.component = null;
    this.nodeName2 = '';
    this.nodeValue2 = '';
    this.directive = null;
    this.isEvent = false;
    this.isDirective = false;
    this.isBinding = false;
    this.isDomEvent = false;
}

AttrNode.prototype.compile = function () {
    if (this.nodeName.startsWith('data-')) {
        this.nodeName2 = this.nodeName.substr(5);
    }
    else {
        this.nodeName2 = this.nodeName;
    }
    this.isEvent = this.nodeName2.startsWith('@');
    this.isBinding = this.nodeName2.startsWith(':');
    this.isDirective = this.nodeName2.startsWith('*');
    if (this.isEvent || this.isBinding || this.isDirective) {
        this.nodeName2 = this.nodeName2.substr(1);
    }
    this.isDomEvent = _utility_utils__WEBPACK_IMPORTED_MODULE_0__["contains"](domEvents, this.nodeName2);

    if (this.isDirective) {
        if (_view__WEBPACK_IMPORTED_MODULE_3__["injector"].containsDirective(this.nodeName2)) {
            this.directive = _view__WEBPACK_IMPORTED_MODULE_3__["injector"].createDirective(this.nodeName2);

        }
        else {
            throw new Error('directive ' + this.nodeName2 + ' is not defined');
        }
    }
    if (this.nodeValue) {
        this.nodeValue2 = this.nodeValue.substring(1, this.nodeValue.length - 1);
    }
    this.binding.setOutput(this.isEvent || (this.directive && this.directive.output));
    this.binding.bind(this.nodeValue2, this.isEvent || this.isBinding || this.isDirective);
};

AttrNode.prototype.link = function (scope, element, component) {
    var self = this;

    this.scope = scope;
    this.element = element;
    this.component = component;
    this.binding.setScope(scope);

    if (this.isEvent) {
        if (this.isDomEvent) {
            this.element.addEventListener(this.nodeName2, function (e) {
                self.binding.compute({
                    locals: {
                        $event: e,
                        $args: null
                    }
                });
            });
        }
        else if (component != null) {
            component.$listen(this.nodeName2, function (e, args) {
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
            this.directive.$bind(this.binding);
        }
        else if (component != null && component.$hasAttr(this.nodeName2)) {
            component.$setAttr(this.nodeName2, this.binding.compute());
        }
        else {
            this.element.setAttribute(this.nodeName2, this.binding.compute());
        }
    }
};

AttrNode.prototype.detect = function () {
    if (this.binding.detect(this.scope)) {
        if (this.directive) {
            this.directive.$update(this.element, this.component);
        }
        else if (this.component != null && this.component.$hasAttr(this.nodeName2)) {
            this.component.$setAttr(this.nodeName2, this.binding.compute());
        }
        else {
            var newValue = this.binding.compute();
            this.element.setAttribute(this.nodeName2, newValue);
            if (this.element.nodeName === 'INPUT' && this.nodeName2 === 'value') {
                this.element.value = newValue;
            }
        }
    }
};

AttrNode.prototype.inserting = function () {
    if (this.directive) {
        this.directive.$inserting(this.element, this.component);
    }
};

AttrNode.prototype.inserted = function () {
    if (this.directive) {
        this.directive.$inserted(this.element, this.component);
    }
};

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
    return this.value !== oldValue;
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

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](HtmlParser, _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"]);
function HtmlParser(lexer, options) {
    HtmlParser.super(this, lexer, options);
}

HtmlParser.prototype.parse = function (text) {
    this.index = 0;
    this.text = text;
    this.tokens = this.lexer.lex(text);

    var nodes = [];
    var doctype, allowDocType = !!this.options.allowDocType;
    while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.doctype) {
            if (allowDocType) {
                if (!doctype) {
                    doctype = this.doctype();
                    nodes.push(doctype);
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
            nodes.push(comment);
            this.next();
        }
        else if (token.textTag) {
            var text = new TextNode();
            text.nodeValue = token.text;
            nodes.push(text);
            this.next();
        }
        else if (token.tag && token.begin) {
            nodes.push(this.element());
        }
        else {
            this.throwError("impossible", token);
        }
    }

    return nodes;
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
    ele.parentNode = p;

    if (token.identifier) {
        ele.nodeName = token.text;
        this.next();
    }
    else {
        this.throwError(" Unexpected ", token);
    }

    this.attrs(ele).forEach(function (attr) {
        ele.childNodes.push(attr);
    });

    token = this.current();

    if (token.tag && token.end) {
        this.next();
        if (ele.nodeName === 'input') {
            return ele;
        }
        if (!token.closing) {
            this.childElements(ele).forEach(function (child) {
                ele.childNodes.push(child);
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
            comment.parentNode = p;
            eles.push(comment);
            this.next();
        }
        else if (token.textTag) {
            var text = new TextNode();
            text.nodeValue = token.text;
            text.parentNode = p;
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
        attr.parentNode = p;

        if (token.identifier) {
            attr.nodeName = token.text;
            this.next();
            token = this.current();
            if (token.equal) {
                this.next();
                token = this.current();
                if (token.constant) {
                    attr.nodeValue = token.text;
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
/*! exports provided: bootstrap, compile, compute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute", function() { return compute; });
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

function compile(html) {
    var lexer = new _html_lexer__WEBPACK_IMPORTED_MODULE_4__["HtmlLexer"](parseOptions);
    var parser = new _html_parser__WEBPACK_IMPORTED_MODULE_5__["HtmlParser"](lexer, parseOptions);
    var astNodes = parser.parse(html);

    astNodes.forEach(function (astNode) {
        astNode.compile();
    });

    return function (scope) {
        var fragment = document.createDocumentFragment();

        scope.$astNodes = astNodes;

        if (!Object(_view__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(scope)) {
            scope.$detect = function () {
                astNodes.forEach(function (astNode) {
                    astNode.detect();
                });
            };
        }

        astNodes.forEach(function (node) {
            fragment.appendChild(node.link(scope));
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
    ProgramNode.super(this, AST.Program);
}

ProgramNode.prototype.compile = function (scope, options) {
    return this.childNodes[0].compile(scope, options || {});
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](ExpressionStatementNode, AstNode);
function ExpressionStatementNode() {
    ExpressionStatementNode.super(this, AST.ExpressionStatement);
}

ExpressionStatementNode.prototype.compile = function (scope, options, internals) {
    return this.childNodes[0].compile(scope, options || {}, internals);
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](AssignmentExpressionNode, AstNode);
function AssignmentExpressionNode(left, right, operator) {
    AssignmentExpressionNode.super(this, AST.AssignmentExpression);
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
    ConditionalExpressionNode.super(this, AST.ConditionalExpression);
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
    LogicalExpressionNode.super(this, AST.LogicalExpression);
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
    BinaryExpressionNode.super(this, AST.BinaryExpression);
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
    UnaryExpressionNode.super(this, AST.UnaryExpression);
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
    LiteralNode.super(this, AST.Literal);
    this.value = value;
}

LiteralNode.prototype.compile = function () {
    return this.value;
};

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](CallExpressionNode, AstNode);
function CallExpressionNode(callee, args) {
    CallExpressionNode.super(this, AST.CallExpression);
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
    MemberExpressionNode.super(this, AST.MemberExpression);
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
    IdentifierNode.super(this, AST.Identifier);
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
    ArrayExpressionNode.super(this, AST.ArrayExpression);
}

_utility_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](PropertyNode, AstNode);
function PropertyNode() {
    PropertyNode.super(this, AST.Property);
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
    ObjectExpressionNode.super(this, AST.ObjectExpression);
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
/*! exports provided: empty, replace, remove, insertAfter, removeBetween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBetween", function() { return removeBetween; });
function empty(ele) {
    Array.prototype.slice.call(ele.childNodes, 0).forEach(function (child) {
        ele.removeChild(child);
    });
}

function replace(refEle, newEle) {
    var parentNode = refEle.parentNode;
    if (parentNode != null) {
        parentNode.insertBefore(newEle, refEle);
        parentNode.removeChild(refEle);
    }
}

function remove(ele) {
    var parentNode = ele.parentNode;
    if (parentNode != null) {
        parentNode.removeChild(ele);
    }
}

function removeBetween(ele1, ele2) {
    var parentNode = ele1.parentNode;
    var childNodes = toArray(parentNode.childNodes);

    childNodes.forEach(function (child) {
        if (child.previousSibling === ele1 && child !== ele2) {
            parentNode.removeChild(child);
        }
        if (child.nextSibling === ele2 && child !== ele1) {
            parentNode.removeChild(child);
        }
    });
}

function insertAfter(newNode, refNode) {
    var parentNode = refNode.parentNode;

    if (parentNode.lastChild === refNode) {
        parentNode.appendChild(newNode);
    } else {
        parentNode.insertBefore(newNode, refNode.nextSibling);
    }
}

function toArray(childNodes) {
    return Array.prototype.slice.call(childNodes, 0);
}




/***/ }),

/***/ "./src/utility/index.js":
/*!******************************!*\
  !*** ./src/utility/index.js ***!
  \******************************/
/*! exports provided: forEach, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, debug, contains, containsStr, hasProperty, getProperty, setProperty, empty, replace, remove, insertAfter, removeBetween, isMessenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMessenger", function() { return isMessenger; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/utility/message.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utility/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["setProperty"]; });

/* harmony import */ var _ele_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ele-utils */ "./src/utility/ele-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeBetween", function() { return _ele_utils__WEBPACK_IMPORTED_MODULE_2__["removeBetween"]; });





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
/*! exports provided: forEach, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, debug, contains, containsStr, hasProperty, getProperty, setProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return containsStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return hasProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
var debugMode = true,
    isArray = Array.isArray,
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

function copy(obj) {
    if (isArray(obj)) {
        return obj.map(function (item) {
            return copy(item);
        });
    }

    if (isObject(obj)) {
        var newObj = {};
        forEach(obj, function (key, value) {
            newObj[key] = copy(value);
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
        var self = arguments[0];
        superType.apply(self, Array.prototype.slice.call(arguments, 1));
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
    this.$parent = null;
    this.$children = [];
    this.$directives = [];
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
            resolve(Object(_parser__WEBPACK_IMPORTED_MODULE_4__["compile"])(html)(self));
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

    _utility_ele_utils__WEBPACK_IMPORTED_MODULE_2__["empty"](element);
    this.$render().then(function (ele) {
        self.$onMounting();
        element.appendChild(ele);
        self.$onMounted();
    });
};

Component.prototype.$detect = function () {
    this.$astNodes.forEach(function (astNode) {
        astNode.detect();
    });
};

Component.prototype.$destroy = function () {
    this.$onDestroying();
    this.$children.forEach(function (child) {
        child.$destroy();
    });
    this.$directives.forEach(function (child) {
        child.$destroy();
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

};

Component.prototype.$onUpdated = function () {

};

Component.prototype.$onMounting = function () {

};

Component.prototype.$onMounted = function () {
    this.$astNodes.forEach(function (item) {
        item.inserted();
    });
};

Component.prototype.$onDestroying = function () {

};

Component.prototype.$onDestroyed = function () {

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

Directive.prototype.$bind = function (binding) {
    this.$binding = binding;
};

Directive.prototype.$inserting = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onInserting)) {
        this.$def.onInserting.call(this, ele, this.$binding, com);
    }
};

Directive.prototype.$inserted = function (ele, com) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.$def.onInserted)) {
        this.$def.onInserted.call(this, ele, this.$binding, com);
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
                constructor.super(this);
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
            onInserted: def,
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

    instance.$onCreated();
    return instance;
};

Injector.prototype.createComponent = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getComponent(constructor);
    }
    var instance = new constructor();
    return instance;
};

Injector.prototype.createDirective = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getDirective(constructor);
    }
    var instance = new constructor();
    return instance;
};

Injector.prototype.createFilter = function (constructor) {
    if (_utility_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](constructor)) {
        constructor = this.getFilter(constructor);
    }
    var instance = new constructor();
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
                constructor.super(this);
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

        return _utility_utils__WEBPACK_IMPORTED_MODULE_0__["merge"](true, _utility_utils__WEBPACK_IMPORTED_MODULE_0__["copy"](superOne.prototype.$def), def);
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


function extendAndWatchProps(instance, props) {
    var prefix = '$$';
    _utility_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](props, function (key, value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibGFja2JvYXJkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibGFja2JvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy9pbm5lci9kaXJlY3RpdmVzLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvaW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy9wYXJzZXIvaHRtbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3BhcnNlci9odG1sLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3BhcnNlci9sZXhlci5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3BhcnNlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy91dGlsaXR5L2VsZS11dGlscy5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3V0aWxpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy91dGlsaXR5L21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy91dGlsaXR5L3V0aWxzLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvdmlldy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibGFja2JvYXJkLy4vc3JjL3ZpZXcvaW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy92aWV3L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYmxhY2tib2FyZC8uL3NyYy92aWV3L3dhdGNoLmpzIiwid2VicGFjazovL2JsYWNrYm9hcmQvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImF4aW9zXCIsXCJjb21tb25qczJcIjpcImF4aW9zXCIsXCJhbWRcIjpcImF4aW9zXCIsXCJyb290XCI6XCJheGlvc1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNENBQTRDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNPO0FBQ2Y7QUFDQztBQUNIOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSw4Q0FBUTtBQUNoQix5QkFBeUIsOENBQVE7QUFDakM7QUFDQSxZQUFZLHNEQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDBEQUFnQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFjOztBQUVwQztBQUNBLFlBQVksOENBQVE7QUFDcEIsNkJBQTZCLDhDQUFROztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNEQUFPO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLHFCQUFxQixJQUFJLEtBQUs7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxzREFBYSxhQUFhLDhDQUFNO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaHBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNpQjtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsS0FBSztBQUNMOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELHVCQUF1QjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxlQUFlO0FBQ3RFO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxZQUFZLHNEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLHNEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0Msb0JBQW9CO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFVBQVU7QUFDN0Q7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUssd0JBQXdCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbG5CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFOEQ7Ozs7Ozs7Ozs7Ozs7QUNqRDlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDZDtBQUNJOztBQUU1QjtBQUNBLDBCQUEwQixrREFBUztBQUNuQzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFpQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDLFlBQVksaURBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Y2tib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImF4aW9zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImF4aW9zXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJsYWNrYm9hcmRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJheGlvc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmxhY2tib2FyZFwiXSA9IGZhY3Rvcnkocm9vdFtcImF4aW9zXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL3V0aWxpdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BhcnNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5uZXInOyIsImltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQge2NvbXB1dGUgLCBjb21waWxlfSBmcm9tICcuLi9wYXJzZXInO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5JztcclxuXHJcbmRpcmVjdGl2ZSgnYi1zaG93JywgZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgZWxlLnN0eWxlLmRpc3BsYXkgPSBiaW5kaW5nLmNvbXB1dGUoKSA/ICdpbml0aWFsJyA6ICdub25lJztcclxufSk7XHJcblxyXG5kaXJlY3RpdmUoJ2ItaGlkZScsIGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGJpbmRpbmcuY29tcHV0ZSgpID8gJ25vbmUnIDogJ2luaXRpYWwnO1xyXG59KTtcclxuXHJcbmRpcmVjdGl2ZSgnYi1pZicsIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgY29tbWVudDogbnVsbFxyXG4gICAgfSxcclxuICAgIG9uSW5zZXJ0ZWQ6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcpIHtcclxuICAgICAgICBpZiAoIWJpbmRpbmcuY29tcHV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoZWxlLm91dGVySFRNTCk7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlcGxhY2UoZWxlLCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblVwZGF0ZTogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIGlmIChiaW5kaW5nLmNvbXB1dGUoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5yZXBsYWNlKHRoaXMuY29tbWVudCwgZWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KGVsZS5vdXRlckhUTUwpO1xyXG4gICAgICAgICAgICAgICAgdXRpbHMucmVwbGFjZShlbGUsIHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZGlyZWN0aXZlKCdiLWJpbmQnLCBmdW5jdGlvbihlbGUsIGJpbmRpbmcpe1xyXG4gICAgZWxlLmlubmVyVGV4dCA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG59KTtcclxuXHJcbmRpcmVjdGl2ZSgnYi1tb2RlbCcsIHtcclxuICAgIG9uSW5zZXJ0ZWQ6IGZ1bmN0aW9uIChlbGUsIGJpbmRpbmcsIGNvbSkge1xyXG4gICAgICAgIHRoaXMuJHVwZGF0ZShlbGUsIGNvbSk7XHJcblxyXG4gICAgICAgIGlmKGNvbSA9PSBudWxsKXtcclxuICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShiaW5kaW5nLnNjb3BlLCBiaW5kaW5nLnRleHQsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaWYodXRpbHMuaXNNZXNzZW5nZXIoY29tLmNoYW5nZSkpe1xyXG4gICAgICAgICAgICAgICAgY29tLmNoYW5nZS5vbihmdW5jdGlvbihlLCBhcmdzKXtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShiaW5kaW5nLnNjb3BlLCBiaW5kaW5nLnRleHQsIGFyZ3MubmV3dmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb2VudCAnICsgY29tLiRrZXkgKyAnbXVzdCBkZWZpbmUgW2NoYW5nZV0gZXZlbnQnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGU6ZnVuY3Rpb24oZWxlLCBiaW5kaW5nLCBjb20pe1xyXG4gICAgICAgIGlmKGNvbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgZWxlLnZhbHVlID0gYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgIGNvbS52YWx1ZSA9IGJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZGlyZWN0aXZlKCdiLXJlcGVhdCcsIHtcclxuICAgIG9uSW5zZXJ0ZWQ6IGZ1bmN0aW9uKGVsZSwgYmluZGluZyl7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiAnICsgZWxlLm91dGVySFRNTCk7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6ICcgKyBlbGUub3V0ZXJIVE1MKTtcclxuICAgIFxyXG4gICAgICAgIGVsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnN0YXJ0LCBlbGUpO1xyXG4gICAgICAgIHV0aWxzLmluc2VydEFmdGVyKHRoaXMuZW5kLCBlbGUpO1xyXG5cclxuICAgICAgICB0aGlzLiR1cGRhdGUoZWxlKTtcclxuICAgIH0sXHJcbiAgICBvblVwZGF0ZTogZnVuY3Rpb24gKGVsZSwgYmluZGluZykge1xyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gIC9eKFxcdyspXFxzK2luXFxzKyhcXHcrKSQvaTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGJpbmRpbmcudGV4dCk7XHJcbiAgICBcclxuICAgICAgICBpZihyZXN1bHQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImItcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHZhciBpdGVtRXhwID0gcmVzdWx0WzBdO1xyXG4gICAgICAgIHZhciBpdGVtc0V4cCA9IHJlc3VsdFsxXTtcclxuICAgICAgICB2YXIgaXRlbXMgPSBjb21wdXRlKGl0ZW1zRXhwLCBiaW5kaW5nLnNjb3BlKTtcclxuICAgIFxyXG4gICAgICAgIGlmKGl0ZW1zID09IG51bGwpe1xyXG4gICAgICAgICAgIHV0aWxzLnJlbW92ZShlbGUpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICBcclxuICAgICAgICB1dGlscy5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICAgICAgdmFyIGNoaWxkU2NvcGUgPSB1dGlscy5vYmplY3QoYmluZGluZy5zY29wZSk7XHJcbiAgICAgICAgICAgIGNoaWxkU2NvcGVbaXRlbUV4cF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29tcGlsZShlbGUub3V0ZXJIVE1MKShjaGlsZFNjb3BlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHV0aWxzLnJlbW92ZUJldHdlZW4odGhpcy5zdGFydCwgdGhpcy5lbmQpO1xyXG4gICAgICAgIHRoaXMuZW5kLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCB0aGlzLmVuZCk7XHJcbiAgICB9XHJcbn0pOyIsImV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcyc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XHJcblxyXG51dGlscy5pbmhlcml0KEh0bWxMZXhlciwgTGV4ZXIpO1xyXG5mdW5jdGlvbiBIdG1sTGV4ZXIob3B0aW9ucykge1xyXG4gICAgSHRtbExleGVyLnN1cGVyKHRoaXMsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcgfHxcclxuICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUgPSBmdW5jdGlvbiAoY2gsIGNwKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJztcclxufTtcclxuXHJcbkh0bWxMZXhlci5wcm90b3R5cGUuZXhwZWN0U3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XHJcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XHJcbn07XHJcblxyXG4vLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXHJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZENvbW1lbnQgPSBmdW5jdGlvbiAoYmVnaW4sIGVuZCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcclxuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xyXG59O1xyXG5cclxuLy8gaHRtbCB0ZXh0XHJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHx8IGNoMiA9PT0gJy8nKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICB0ZXh0VGFnOiB0cnVlXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIGh0bWwgdGFnXHJcbkh0bWxMZXhlci5wcm90b3R5cGUucmVhZFRhZyA9IGZ1bmN0aW9uIChiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xyXG4gICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XHJcbiAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcblxyXG4gICAgICAgIGlmICghY2xvc2luZykge1xyXG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcclxuICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcclxuICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxyXG4gICAgICAgICAgICAgICAgZW5kOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5IdG1sTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRva2VucztcclxufTtcclxuXHJcbmV4cG9ydCB7IEh0bWxMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBlbGVVdGlscyBmcm9tICcuLi91dGlsaXR5L2VsZS11dGlscyc7XHJcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcclxuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHtjb21wdXRlfSBmcm9tICcuL2luZGV4JztcclxuXHJcbi8vIC8vIFdpbmRvdyBFdmVudHNcclxuLy8gY2FzZSAnb24tbG9hZCc6XHJcbi8vIGNhc2UgJ29uLXVubG9hZCc6XHJcbi8vIC8vIEZvcm0gRWxlbWVudCBFdmVudHNcclxuLy8gY2FzZSAnb24tY2hhbmdlJzpcclxuLy8gY2FzZSAnb24tc3VibWl0JzpcclxuLy8gY2FzZSAnb24tcmVzZXQnOlxyXG4vLyBjYXNlICdvbi1zZWxlY3QnOlxyXG4vLyBjYXNlICdvbi1ibHVyJzpcclxuLy8gY2FzZSAnb24tZm9jdXMnOlxyXG4vLyAvLyBJbWFnZSBFdmVudHNcclxuLy8gY2FzZSAnb24tYWJvcnQnOlxyXG4vLyAvLyBLZXlib2FyZCBFdmVudHNcclxuLy8gY2FzZSAnb24ta2V5ZG93bic6XHJcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcclxuLy8gY2FzZSAnb24ta2V5dXAnOlxyXG4vLyAvLyBNb3VzZSBFdmVudHNcclxuLy8gY2FzZSAnb24tY2xpY2snOlxyXG4vLyBjYXNlICdvbi1kYmxjbGljayc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlZG93bic6XHJcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlb3V0JzpcclxuLy8gY2FzZSAnb24tbW91c2VvdmVyJzpcclxuLy8gY2FzZSAnb24tbW91c2V1cCc6XHJcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xyXG52YXIgZG9tRXZlbnRzID0gZXZlbnRUZXh0LnNwbGl0KCcgJyk7XHJcbnZhciBXTm9kZVR5cGUgPSB7XHJcbiAgICBlbGVtZW50OiAxLFxyXG4gICAgYXR0cmlidXRlOiAyLFxyXG4gICAgdGV4dDogMyxcclxuICAgIGNkYXRhU2VjdGlvbjogNCxcclxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcclxuICAgIGVudGl0eTogNixcclxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcclxuICAgIGNvbW1lbnQ6IDgsXHJcbiAgICBkb2N1bWVudDogOSxcclxuICAgIGRvY3VtZW50VHlwZTogMTAsXHJcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcclxuICAgIG5vdGF0aW9uOiAxMlxyXG59O1xyXG5cclxuLy8gYmFzaWMgbm9kZVxyXG5mdW5jdGlvbiBTTm9kZSh0eXBlLCBuYW1lKSB7XHJcbiAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcclxuICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5ub2RlVmFsdWUgPSAnJztcclxuICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xyXG4gICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcclxuICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcclxuICAgIHRoaXMub3duZXJEb2N1bWVudCA9IG51bGw7XHJcbiAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxufVxyXG5cclxuU05vZGUucHJvdG90eXBlLmhhc0NoaWxkTm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcclxufTtcclxuXHJcblNOb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuY29tcGlsZSgpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5TTm9kZS5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uIChzY29wZSkge1xyXG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQubGluayhzY29wZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblNOb2RlLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5kZXRlY3QoKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuU05vZGUucHJvdG90eXBlLmluc2VydGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLmluc2VydGluZygpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5TTm9kZS5wcm90b3R5cGUuaW5zZXJ0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5pbnNlcnRlZCgpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KERvY3VtZW50Tm9kZSwgU05vZGUpO1xyXG4vLyBkb2N1bWVudCBub2RlXHJcbmZ1bmN0aW9uIERvY3VtZW50Tm9kZSgpIHtcclxuICAgIERvY3VtZW50Tm9kZS5zdXBlcih0aGlzLCBXTm9kZVR5cGUuZG9jdW1lbnQpO1xyXG59XHJcblxyXG51dGlscy5pbmhlcml0KEVsZW1lbnROb2RlLCBTTm9kZSk7XHJcbi8vIGVsZW1lbnQgbm9kZVxyXG5mdW5jdGlvbiBFbGVtZW50Tm9kZSgpIHtcclxuICAgIEVsZW1lbnROb2RlLnN1cGVyKHRoaXMsIFdOb2RlVHlwZS5lbGVtZW50KTtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XHJcbn1cclxuXHJcbkVsZW1lbnROb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgc2VsZi5zY29wZSA9IHNjb3BlO1xyXG4gICAgc2VsZi5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxmLm5vZGVOYW1lKTtcclxuXHJcbiAgICBpZiAoaW5qZWN0b3IuY29udGFpbnNDb21wb25lbnQodGhpcy5ub2RlTmFtZSkpIHtcclxuICAgICAgICBzZWxmLmNvbXBvbmVudCA9IGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudCh0aGlzLm5vZGVOYW1lKTtcclxuICAgICAgICBzZWxmLmNvbXBvbmVudC4kcGFyZW50ID0gc2NvcGU7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkoc2NvcGUuJGNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBzY29wZS4kY2hpbGRyZW4ucHVzaChzZWxmLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkLm5vZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFdOb2RlVHlwZS5hdHRyaWJ1dGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5saW5rKHNjb3BlLCBzZWxmLmVsZW1lbnQsIHNlbGYuY29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYuY29tcG9uZW50LiRtb3VudChzZWxmLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc2VsZi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGQubm9kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgV05vZGVUeXBlLmVsZW1lbnQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFdOb2RlVHlwZS50ZXh0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkLmxpbmsoc2NvcGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgV05vZGVUeXBlLmF0dHJpYnV0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxpbmsoc2NvcGUsIHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmluc2VydGluZygpO1xyXG5cclxuICAgIHJldHVybiBzZWxmLmVsZW1lbnQ7XHJcbn07XHJcblxyXG5FbGVtZW50Tm9kZS5wcm90b3R5cGUuZGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuZGV0ZWN0KCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoVGV4dE5vZGUsIFNOb2RlKTtcclxuLy8gdGV4dCBub2RlXHJcbmZ1bmN0aW9uIFRleHROb2RlKCkge1xyXG4gICAgVGV4dE5vZGUuc3VwZXIodGhpcywgV05vZGVUeXBlLnRleHQsICcjdGV4dCcpO1xyXG4gICAgdGhpcy5iaW5kaW5nID0gbmV3IEJpbmRpbmcoKTtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbn1cclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5iaW5kaW5nLmJpbmQodGhpcy5ub2RlVmFsdWUpO1xyXG59O1xyXG5cclxuVGV4dE5vZGUucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiAoc2NvcGUpIHtcclxuICAgIHRoaXMuYmluZGluZy5zZXRTY29wZShzY29wZSk7XHJcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcclxufTtcclxuXHJcblRleHROb2RlLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5iaW5kaW5nLmRldGVjdCgpKSB7XHJcbiAgICAgICAgZWxlVXRpbHMucmVwbGFjZSh0aGlzLmVsZW1lbnQsIHRoaXMucmVuZGVyKCkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuVGV4dE5vZGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXMuYmluZGluZy5jb21wdXRlKCk7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDb21tZW50Tm9kZSwgU05vZGUpO1xyXG4vLyBjb21tZW50IG5vZGVcclxuZnVuY3Rpb24gQ29tbWVudE5vZGUoKSB7XHJcbiAgICBDb21tZW50Tm9kZS5zdXBlcih0aGlzLCBXTm9kZVR5cGUuY29tbWVudCwgJyNjb21tZW50Jyk7XHJcbn1cclxuXHJcbkNvbW1lbnROb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5ub2RlVmFsdWUpO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDRGF0YVNlY3Rpb25Ob2RlLCBTTm9kZSk7XHJcbi8vIENEYXRhU2VjdGlvbiBub2RlXHJcbmZ1bmN0aW9uIENEYXRhU2VjdGlvbk5vZGUoKSB7XHJcbiAgICBDRGF0YVNlY3Rpb25Ob2RlLnN1cGVyKHRoaXMsIFdOb2RlVHlwZS5jZGF0YVNlY3Rpb24pO1xyXG59XHJcblxyXG51dGlscy5pbmhlcml0KERvY3VtZW50VHlwZU5vZGUsIFNOb2RlKTtcclxuLy8gZG9jdW1lbnQgdHlwZSBub2RlXHJcbmZ1bmN0aW9uIERvY3VtZW50VHlwZU5vZGUoKSB7XHJcbiAgICBEb2N1bWVudFR5cGVOb2RlLnN1cGVyKHRoaXMsIFdOb2RlVHlwZS5kb2N1bWVudFR5cGUpO1xyXG59XHJcblxyXG51dGlscy5pbmhlcml0KERvY3VtZW50RnJhZ21lbnROb2RlLCBTTm9kZSk7XHJcbi8vIGRvY3VtZW50IGZyYWdtZW50IG5vZGVcclxuZnVuY3Rpb24gRG9jdW1lbnRGcmFnbWVudE5vZGUoKSB7XHJcbiAgICBEb2N1bWVudEZyYWdtZW50Tm9kZS5zdXBlcih0aGlzLCBXTm9kZVR5cGUuZG9jdW1lbnRGcmFnbWVudCwgJyNkb2N1bWVudC1mcmFnbWVudCcpO1xyXG59XHJcblxyXG51dGlscy5pbmhlcml0KEF0dHJOb2RlLCBTTm9kZSk7XHJcbi8vIGF0dHJpYnV0ZSBub2RlXHJcbmZ1bmN0aW9uIEF0dHJOb2RlKCkge1xyXG4gICAgQXR0ck5vZGUuc3VwZXIodGhpcywgV05vZGVUeXBlLmF0dHJpYnV0ZSk7XHJcbiAgICB0aGlzLmJpbmRpbmcgPSBuZXcgQmluZGluZygpO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgIHRoaXMubm9kZU5hbWUyID0gJyc7XHJcbiAgICB0aGlzLm5vZGVWYWx1ZTIgPSAnJztcclxuICAgIHRoaXMuZGlyZWN0aXZlID0gbnVsbDtcclxuICAgIHRoaXMuaXNFdmVudCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0RpcmVjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0JpbmRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNEb21FdmVudCA9IGZhbHNlO1xyXG59XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcclxuICAgICAgICB0aGlzLm5vZGVOYW1lMiA9IHRoaXMubm9kZU5hbWUuc3Vic3RyKDUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTmFtZTIgPSB0aGlzLm5vZGVOYW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0V2ZW50ID0gdGhpcy5ub2RlTmFtZTIuc3RhcnRzV2l0aCgnQCcpO1xyXG4gICAgdGhpcy5pc0JpbmRpbmcgPSB0aGlzLm5vZGVOYW1lMi5zdGFydHNXaXRoKCc6Jyk7XHJcbiAgICB0aGlzLmlzRGlyZWN0aXZlID0gdGhpcy5ub2RlTmFtZTIuc3RhcnRzV2l0aCgnKicpO1xyXG4gICAgaWYgKHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTmFtZTIgPSB0aGlzLm5vZGVOYW1lMi5zdWJzdHIoMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIHRoaXMubm9kZU5hbWUyKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgIGlmIChpbmplY3Rvci5jb250YWluc0RpcmVjdGl2ZSh0aGlzLm5vZGVOYW1lMikpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmUgPSBpbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUodGhpcy5ub2RlTmFtZTIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB0aGlzLm5vZGVOYW1lMiArICcgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ub2RlVmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGVWYWx1ZTIgPSB0aGlzLm5vZGVWYWx1ZS5zdWJzdHJpbmcoMSwgdGhpcy5ub2RlVmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmJpbmRpbmcuc2V0T3V0cHV0KHRoaXMuaXNFdmVudCB8fCAodGhpcy5kaXJlY3RpdmUgJiYgdGhpcy5kaXJlY3RpdmUub3V0cHV0KSk7XHJcbiAgICB0aGlzLmJpbmRpbmcuYmluZCh0aGlzLm5vZGVWYWx1ZTIsIHRoaXMuaXNFdmVudCB8fCB0aGlzLmlzQmluZGluZyB8fCB0aGlzLmlzRGlyZWN0aXZlKTtcclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBjb21wb25lbnQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICB0aGlzLmJpbmRpbmcuc2V0U2NvcGUoc2NvcGUpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RvbUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubm9kZU5hbWUyLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5iaW5kaW5nLmNvbXB1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2Fsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQ6IGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRhcmdzOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb21wb25lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuJGxpc3Rlbih0aGlzLm5vZGVOYW1lMiwgZnVuY3Rpb24gKGUsIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50OiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkYXJnczogYXJnc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgc2NvcGUuJGRpcmVjdGl2ZXMucHVzaCh0aGlzLmRpcmVjdGl2ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlLiRiaW5kKHRoaXMuYmluZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvbXBvbmVudCAhPSBudWxsICYmIGNvbXBvbmVudC4kaGFzQXR0cih0aGlzLm5vZGVOYW1lMikpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LiRzZXRBdHRyKHRoaXMubm9kZU5hbWUyLCB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5ub2RlTmFtZTIsIHRoaXMuYmluZGluZy5jb21wdXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbkF0dHJOb2RlLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5iaW5kaW5nLmRldGVjdCh0aGlzLnNjb3BlKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kdXBkYXRlKHRoaXMuZWxlbWVudCwgdGhpcy5jb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbXBvbmVudCAhPSBudWxsICYmIHRoaXMuY29tcG9uZW50LiRoYXNBdHRyKHRoaXMubm9kZU5hbWUyKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC4kc2V0QXR0cih0aGlzLm5vZGVOYW1lMiwgdGhpcy5iaW5kaW5nLmNvbXB1dGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmJpbmRpbmcuY29tcHV0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubm9kZU5hbWUyLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgdGhpcy5ub2RlTmFtZTIgPT09ICd2YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuQXR0ck5vZGUucHJvdG90eXBlLmluc2VydGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlLiRpbnNlcnRpbmcodGhpcy5lbGVtZW50LCB0aGlzLmNvbXBvbmVudCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5BdHRyTm9kZS5wcm90b3R5cGUuaW5zZXJ0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5kaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZS4kaW5zZXJ0ZWQodGhpcy5lbGVtZW50LCB0aGlzLmNvbXBvbmVudCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBFeHBOb2RlKHRleHQpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxufVxyXG5cclxuRXhwTm9kZS5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdGhpcy52YWx1ZSA9IGNvbXB1dGUodGhpcy50ZXh0LCBzY29wZSwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5FeHBOb2RlLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICB0aGlzLmNvbXB1dGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgIT09IG9sZFZhbHVlO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQmluZGluZygpIHtcclxuICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgdGhpcy50ZXh0ID0gJyc7XHJcbiAgICB0aGlzLmlzRXhwID0gZmFsc2U7XHJcbiAgICB0aGlzLndhdGNoZXJzID0gW107XHJcbiAgICB0aGlzLnJpZ2h0U3RyID0gJyc7XHJcbiAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xyXG59XHJcblxyXG5CaW5kaW5nLnByb3RvdHlwZS5zZXRTY29wZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgdGhpcy5zY29wZSA9IHZhbHVlO1xyXG59O1xyXG5cclxuQmluZGluZy5wcm90b3R5cGUuc2V0T3V0cHV0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICB0aGlzLm91dHB1dCA9IHZhbHVlO1xyXG59O1xyXG5cclxuQmluZGluZy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICh0ZXh0LCBpc0V4cCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuaXNFeHAgPSBpc0V4cDtcclxuXHJcbiAgICBpZiAoaXNFeHApIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBleHA6IG5ldyBFeHBOb2RlKHRleHQpLFxyXG4gICAgICAgICAgICBsZWZ0U3RyOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xyXG4gICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgdmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xyXG5cclxuICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy53YXRjaGVycy5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IG1hdGNoLmluZGV4LFxyXG4gICAgICAgICAgICBleHA6IG5ldyBFeHBOb2RlKG1hdGNoWzFdKSxcclxuICAgICAgICAgICAgbGVmdFN0cjogdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleClcclxuICAgICAgICB9KTtcclxuICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy53YXRjaGVycy5sZW5ndGggPiAwICYmIGxhc3RJbmRleCA8IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5yaWdodFN0ciA9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5CaW5kaW5nLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGlmICh0aGlzLndhdGNoZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRXhwICYmIHRoaXMud2F0Y2hlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy53YXRjaGVyc1swXS5leHAuY29tcHV0ZShzZWxmLnNjb3BlLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy53YXRjaGVyc1swXS5leHAudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRleHQgPSAnJztcclxuICAgIHRoaXMud2F0Y2hlcnMuZm9yRWFjaChmdW5jdGlvbiAod2F0Y2hlcikge1xyXG4gICAgICAgIHdhdGNoZXIuZXhwLmNvbXB1dGUoc2VsZi5zY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGV4dCArPSAod2F0Y2hlci5sZWZ0U3RyICsgd2F0Y2hlci5leHAudmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRleHQgKyB0aGlzLnJpZ2h0U3RyO1xyXG59O1xyXG5cclxuQmluZGluZy5wcm90b3R5cGUuZGV0ZWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGlmICh0aGlzLm91dHB1dCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLndhdGNoZXJzLnNvbWUoZnVuY3Rpb24gKHdhdGNoZXIpIHtcclxuICAgICAgICByZXR1cm4gd2F0Y2hlci5leHAuZGV0ZWN0KHNlbGYuc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEh0bWxQYXJzZXIsIFBhcnNlcik7XHJcbmZ1bmN0aW9uIEh0bWxQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcclxuICAgIEh0bWxQYXJzZXIuc3VwZXIodGhpcywgbGV4ZXIsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgIHZhciBub2RlcyA9IFtdO1xyXG4gICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKGRvY3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IENvbW1lbnROb2RlKCk7XHJcbiAgICAgICAgICAgIGNvbW1lbnQubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgbm9kZXMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcclxuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2godGhpcy5lbGVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBub2RlcztcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmRvY3R5cGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuICAgIHZhciBkb2NUeXBlID0gbmV3IERvY3VtZW50VHlwZU5vZGUoKTtcclxuICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZG9jVHlwZTtcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmVsZW1lbnQgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgdGhpcy5uZXh0KCk7XHJcbiAgICB2YXIgZWxlID0gbmV3IEVsZW1lbnROb2RlKCk7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgIGVsZS5wYXJlbnROb2RlID0gcDtcclxuXHJcbiAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgZWxlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlO1xyXG59O1xyXG5cclxuSHRtbFBhcnNlci5wcm90b3R5cGUuY2hpbGRFbGVtZW50cyA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICB2YXIgZWxlcyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBDb21tZW50Tm9kZSgpO1xyXG4gICAgICAgICAgICBjb21tZW50Lm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGNvbW1lbnQucGFyZW50Tm9kZSA9IHA7XHJcbiAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVGV4dE5vZGUoKTtcclxuICAgICAgICAgICAgdGV4dC5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICB0ZXh0LnBhcmVudE5vZGUgPSBwO1xyXG4gICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcclxuICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlcztcclxufTtcclxuXHJcbkh0bWxQYXJzZXIucHJvdG90eXBlLmF0dHJzID0gZnVuY3Rpb24gKHApIHtcclxuICAgIHZhciBhdHRycyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGF0dHIgPSBuZXcgQXR0ck5vZGUoKTtcclxuICAgICAgICBhdHRyLnBhcmVudE5vZGUgPSBwO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICBhdHRyLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXR0cnM7XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5IdG1sUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pbmRleCsrO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgSHRtbFBhcnNlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBjb21wb25lbnQsIGluamVjdG9yLCBpc0NvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBMZXhlciB9IGZyb20gJy4vbGV4ZXInO1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XHJcbmltcG9ydCB7IEh0bWxMZXhlciB9IGZyb20gJy4vaHRtbC1sZXhlcic7XHJcbmltcG9ydCB7IEh0bWxQYXJzZXIgfSBmcm9tICcuL2h0bWwtcGFyc2VyJztcclxuXHJcbnZhciBwYXJzZU9wdGlvbnMgPSB7XHJcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZTogZmFsc2UsXHJcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXHJcbiAgICBsaXRlcmFsczoge1xyXG4gICAgICAgIGZhbHNlOiBmYWxzZSxcclxuICAgICAgICBudWxsOiBudWxsLFxyXG4gICAgICAgIHRydWU6IHRydWUsXHJcbiAgICAgICAgdW5kZWZpbmVkOiB1bmRlZmluZWRcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcChpZE9yRWxlbWVudCwgZGVmKSB7XHJcbiAgICB2YXIgZWxlbWVudCwgZWxlbWVudElkO1xyXG5cclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhpZE9yRWxlbWVudCkpIHtcclxuICAgICAgICBlbGVtZW50SWQgPSBpZE9yRWxlbWVudDtcclxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRPckVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudElkID0gaWRPckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgIGlmIChlbGVtZW50SWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBpZCBhdHRyaWJ1dGUgZm9yIHJvb3QgY29tcG9uZW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQgPSBpZE9yRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBkZWYudGVtcGxhdGUgPSBlbGVtZW50LmlubmVySFRNTDtcclxuICAgIGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQoZWxlbWVudElkLCBkZWYpKS4kbW91bnQoaWRPckVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21waWxlKGh0bWwpIHtcclxuICAgIHZhciBsZXhlciA9IG5ldyBIdG1sTGV4ZXIocGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBwYXJzZXIgPSBuZXcgSHRtbFBhcnNlcihsZXhlciwgcGFyc2VPcHRpb25zKTtcclxuICAgIHZhciBhc3ROb2RlcyA9IHBhcnNlci5wYXJzZShodG1sKTtcclxuXHJcbiAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChhc3ROb2RlKSB7XHJcbiAgICAgICAgYXN0Tm9kZS5jb21waWxlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgICAgICBzY29wZS4kYXN0Tm9kZXMgPSBhc3ROb2RlcztcclxuXHJcbiAgICAgICAgaWYgKCFpc0NvbXBvbmVudChzY29wZSkpIHtcclxuICAgICAgICAgICAgc2NvcGUuJGRldGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFzdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGFzdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3ROb2RlLmRldGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUubGluayhzY29wZSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlKGV4cCwgc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIGlmIChleHAgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV4cCA9IGV4cC50cmltKCk7XHJcbiAgICBpZiAoZXhwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV4cCA9IGV4cC5yZXBsYWNlKCcmZ3Q7JywgJz4nKS5yZXBsYWNlKCcmbHQ7JywgJzwnKTtcclxuICAgIHZhciBsZXhlciA9IG5ldyBMZXhlcihwYXJzZU9wdGlvbnMpO1xyXG4gICAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIobGV4ZXIsIHBhcnNlT3B0aW9ucyk7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIG9wdGlvbnMuY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gaW5qZWN0b3IuY3JlYXRlRmlsdGVyKG5hbWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBwYXJzZXIucGFyc2UoZXhwKS5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYm9vdHN0cmFwLCBjb21waWxlLCBjb21wdXRlIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcblxyXG52YXIgT1BFUkFUT1JTID0ge307XHJcbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcclxudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XHJcblxyXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xyXG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufVxyXG5cclxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcclxuICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xyXG4gICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XHJcbiAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzID0gZnVuY3Rpb24gKGNoLCBjaGFycykge1xyXG4gICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKGkpIHtcclxuICAgIHZhciBudW0gPSBpIHx8IDE7XHJcbiAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc051bWJlciA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzV2hpdGVzcGFjZSA9IGZ1bmN0aW9uIChjaCkge1xyXG4gICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXHJcbiAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxyXG4gICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUuaXNJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cclxuICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlID0gZnVuY3Rpb24gKGNoLCBjcCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmNvZGVQb2ludEF0ID0gZnVuY3Rpb24gKGNoKSB7XHJcbiAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucGVla011bHRpY2hhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xyXG4gICAgaWYgKCFwZWVrKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoO1xyXG4gICAgfVxyXG4gICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xyXG4gICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcclxuICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoO1xyXG59O1xyXG5cclxuTGV4ZXIucHJvdG90eXBlLmlzRXhwT3BlcmF0b3IgPSBmdW5jdGlvbiAoY2gpIHtcclxuICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS50aHJvd0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBzdGFydCwgZW5kKSB7XHJcbiAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcclxuICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkTnVtYmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG51bWJlciA9ICcnO1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcclxuICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcclxuICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXHJcbiAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxyXG4gICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogbnVtYmVyLFxyXG4gICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5MZXhlci5wcm90b3R5cGUucmVhZElkZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcclxuICAgICAgICBpZGVudGlmaWVyOiB0cnVlXHJcbiAgICB9KTtcclxufTtcclxuXHJcbkxleGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24gKHF1b3RlKSB7XHJcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5pbmRleCsrO1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xyXG4gICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgaWYgKGVzY2FwZSkge1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcclxuICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBMZXhlciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2lzRmlsdGVyfSBmcm9tICcuLi92aWV3JztcclxuXHJcbnZhciBBU1QgPSB7fTtcclxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XHJcbkFTVC5FeHByZXNzaW9uU3RhdGVtZW50ID0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnO1xyXG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xyXG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XHJcbkFTVC5Mb2dpY2FsRXhwcmVzc2lvbiA9ICdMb2dpY2FsRXhwcmVzc2lvbic7XHJcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xyXG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5DYWxsRXhwcmVzc2lvbiA9ICdDYWxsRXhwcmVzc2lvbic7XHJcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xyXG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcclxuQVNULkxpdGVyYWwgPSAnTGl0ZXJhbCc7XHJcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcclxuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcclxuQVNULk9iamVjdEV4cHJlc3Npb24gPSAnT2JqZWN0RXhwcmVzc2lvbic7XHJcblxyXG5mdW5jdGlvbiBBc3ROb2RlKHR5cGUpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxufVxyXG5cclxuQXN0Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxufTtcclxuXHJcbkFzdE5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMgfHwge30sIGludGVybmFscyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvZ3JhbU5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBQcm9ncmFtTm9kZSgpIHtcclxuICAgIFByb2dyYW1Ob2RlLnN1cGVyKHRoaXMsIEFTVC5Qcm9ncmFtKTtcclxufVxyXG5cclxuUHJvZ3JhbU5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKSB7XHJcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZS5zdXBlcih0aGlzLCBBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XHJcbn1cclxuXHJcbkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zLCBpbnRlcm5hbHMpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0uY29tcGlsZShzY29wZSwgb3B0aW9ucyB8fCB7fSwgaW50ZXJuYWxzKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xyXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLnN1cGVyKHRoaXMsIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG59XHJcblxyXG5Bc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucywgeyBhc3NpZ25tZW50TGVmdDogdHJ1ZSB9KTtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcclxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUuc3VwZXIodGhpcywgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnRlc3QgPSB0ZXN0O1xyXG4gICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XHJcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xyXG59XHJcblxyXG5Db25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAodGhpcy50ZXN0LmNvbXBpbGUoc2NvcGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWx0ZXJuYXRlLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudC5jb21waWxlKHNjb3BlLCBvcHRpb25zKTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoTG9naWNhbEV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gTG9naWNhbEV4cHJlc3Npb25Ob2RlKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xyXG4gICAgTG9naWNhbEV4cHJlc3Npb25Ob2RlLnN1cGVyKHRoaXMsIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG59XHJcblxyXG5Mb2dpY2FsRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQ7XHJcbiAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5sZWZ0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJyYmJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3x8JzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KEJpbmFyeUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQmluYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlcih0aGlzLCBBU1QuQmluYXJ5RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG59XHJcblxyXG5CaW5hcnlFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdDtcclxuICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmxlZnQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHQuY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnPCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJz4nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc8PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc+PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICchPSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICc9PT0nOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJyE9PSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoVW5hcnlFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIFVuYXJ5RXhwcmVzc2lvbk5vZGUob3BlcmF0b3IsIGFyZykge1xyXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZS5zdXBlcih0aGlzLCBBU1QuVW5hcnlFeHByZXNzaW9uKTtcclxuICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcclxuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgIHRoaXMuYXJnID0gYXJnO1xyXG59XHJcblxyXG5VbmFyeUV4cHJlc3Npb25Ob2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcmVzdWx0LCB2YWx1ZSA9IHRoaXMuYXJnLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xyXG4gICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnISc6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoTGl0ZXJhbE5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBMaXRlcmFsTm9kZSh2YWx1ZSkge1xyXG4gICAgTGl0ZXJhbE5vZGUuc3VwZXIodGhpcywgQVNULkxpdGVyYWwpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblxyXG5MaXRlcmFsTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChDYWxsRXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbk5vZGUoY2FsbGVlLCBhcmdzKSB7XHJcbiAgICBDYWxsRXhwcmVzc2lvbk5vZGUuc3VwZXIodGhpcywgQVNULkNhbGxFeHByZXNzaW9uKTtcclxuICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XHJcbn1cclxuXHJcbkNhbGxFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNhbGxlZS5jb21waWxlKHNjb3BlLCBvcHRpb25zLCB7IGNhbGxlZTogdHJ1ZSB9KTtcclxuICAgIHZhciBhcmdWYWx1ZXMgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gYXJnLmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlcklucyA9IG9wdGlvbnMuY3JlYXRlRmlsdGVyKGNvbnRleHQucHJvcCk7XHJcbiAgICAgICAgaWYgKGlzRmlsdGVyKGZpbHRlcklucykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcklucy4kZXhlY3V0ZS5hcHBseShmaWx0ZXJJbnMsIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChNZW1iZXJFeHByZXNzaW9uTm9kZSwgQXN0Tm9kZSk7XHJcbmZ1bmN0aW9uIE1lbWJlckV4cHJlc3Npb25Ob2RlKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XHJcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZS5zdXBlcih0aGlzLCBBU1QuTWVtYmVyRXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcclxuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgIHRoaXMuY29tcHV0ZWQgPSBjb21wdXRlZDtcclxufVxyXG5cclxuTWVtYmVyRXhwcmVzc2lvbk5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgdmFyIG9iaiA9IHRoaXMub2JqZWN0LmNvbXBpbGUoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscyk7XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmpbdGhpcy5wcm9wZXJ0eS5jb21waWxlKG9iaiwgb3B0aW9ucywgaW50ZXJuYWxzKV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHkuY29tcGlsZShvYmosIG9wdGlvbnMsIGludGVybmFscyk7XHJcbn07XHJcblxyXG51dGlscy5pbmhlcml0KElkZW50aWZpZXJOb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gSWRlbnRpZmllck5vZGUobmFtZSkge1xyXG4gICAgSWRlbnRpZmllck5vZGUuc3VwZXIodGhpcywgQVNULklkZW50aWZpZXIpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxufVxyXG5cclxuSWRlbnRpZmllck5vZGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2NvcGUsIG9wdGlvbnMsIGludGVybmFscykge1xyXG4gICAgaWYgKGludGVybmFscykge1xyXG4gICAgICAgIGlmIChpbnRlcm5hbHMuYXNzaWdubWVudExlZnQgfHwgaW50ZXJuYWxzLmNhbGxlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBzY29wZSxcclxuICAgICAgICAgICAgICAgIHByb3A6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbnRlcm5hbHMucHJvcGVydHlLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzdWx0ID0gc2NvcGVbdGhpcy5uYW1lXTtcclxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBvcHRpb25zLmxvY2Fscykge1xyXG4gICAgICAgIHJlc3VsdCA9IG9wdGlvbnMubG9jYWxzW3RoaXMubmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxudXRpbHMuaW5oZXJpdChBcnJheUV4cHJlc3Npb25Ob2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uTm9kZSgpIHtcclxuICAgIEFycmF5RXhwcmVzc2lvbk5vZGUuc3VwZXIodGhpcywgQVNULkFycmF5RXhwcmVzc2lvbik7XHJcbn1cclxuXHJcbnV0aWxzLmluaGVyaXQoUHJvcGVydHlOb2RlLCBBc3ROb2RlKTtcclxuZnVuY3Rpb24gUHJvcGVydHlOb2RlKCkge1xyXG4gICAgUHJvcGVydHlOb2RlLnN1cGVyKHRoaXMsIEFTVC5Qcm9wZXJ0eSk7XHJcbiAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XHJcbiAgICB0aGlzLmtleSA9IG51bGw7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcclxufVxyXG5cclxuUHJvcGVydHlOb2RlLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKHNjb3BlLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtleTogdGhpcy5rZXkuY29tcGlsZShzY29wZSwgb3B0aW9ucywgeyBwcm9wZXJ0eUtleTogdHJ1ZSB9KSxcclxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZS5jb21waWxlKHNjb3BlLCBvcHRpb25zKVxyXG4gICAgfTtcclxufTtcclxuXHJcbnV0aWxzLmluaGVyaXQoT2JqZWN0RXhwcmVzc2lvbk5vZGUsIEFzdE5vZGUpO1xyXG5mdW5jdGlvbiBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKSB7XHJcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZS5zdXBlcih0aGlzLCBBU1QuT2JqZWN0RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5PYmplY3RFeHByZXNzaW9uTm9kZS5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChzY29wZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG5cclxuICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdmFyIGRlZiA9IGl0ZW0uY29tcGlsZShzY29wZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzQXNzaWduYWJsZShhc3QpIHtcclxuICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZXIobGV4ZXIsIG9wdGlvbnMpIHtcclxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn1cclxuXHJcblBhcnNlci5wcm90b3R5cGUudGhyb3dFcnJvciA9IGZ1bmN0aW9uIChtc2csIHRva2VuKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXHJcbiAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XHJcblxyXG4gICAgdmFyIHZhbHVlID0gdGhpcy5wcm9ncmFtKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLnByb2dyYW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gMCAmJiAhdGhpcy5wZWVrKCd9JywgJyknLCAnOycsICddJykpIHtcclxuICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5leHBlY3QoJzsnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb25TdGF0ZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XHJcbiAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgIHJldHVybiBleHA7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmZpbHRlckNoYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XHJcbiAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlZnQ7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmV4cHJlc3Npb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xyXG4gICAgICAgIGlmICghaXNBc3NpZ25hYmxlKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUudGVybmFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcclxuICAgIHZhciBhbHRlcm5hdGU7XHJcbiAgICB2YXIgY29uc2VxdWVudDtcclxuICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XHJcbiAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uc3VtZSgnOicpKSB7XHJcbiAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlc3Q7XHJcbn07XHJcblxyXG5QYXJzZXIucHJvdG90eXBlLmxvZ2ljYWxPUiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5sb2dpY2FsQU5EKCk7XHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUubG9naWNhbEFORCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XHJcbiAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5lcXVhbGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJz09JywgJyE9JywgJz09PScsICchPT0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5yZWxhdGlvbmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJzwnLCAnPicsICc8PScsICc+PScpKSkge1xyXG4gICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0O1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5hZGRpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xyXG4gICAgdmFyIHRva2VuO1xyXG4gICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUubXVsdGlwbGljYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcclxuICAgIHZhciB0b2tlbjtcclxuICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKicsICcvJywgJyUnKSkpIHtcclxuICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUudW5hcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdG9rZW47XHJcbiAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcclxuICAgIH1cclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucHJpbWFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcmltYXJ5O1xyXG4gICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XHJcbiAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xyXG4gICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xyXG4gICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcclxuICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV4dDtcclxuICAgIHdoaWxlICgobmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpKSkge1xyXG4gICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpbWFyeTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGJhc2VFeHByZXNzaW9uKSB7XHJcbiAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl07XHJcbiAgICB2YXIgcmVzdWx0ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZSh0aGlzLmlkZW50aWZpZXIoKSwgYXJncyk7XHJcbiAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xyXG4gICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcmdzO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5pZGVudGlmaWVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XHJcbiAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5jb25zdGFudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XHJcbiAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuYXJyYXlEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xyXG4gICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5vYmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcclxuICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnN1bWUoJ30nKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24gKGUxKSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5cclxuUGFyc2VyLnByb3RvdHlwZS5wZWVrVG9rZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uIChlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUucGVla0FoZWFkID0gZnVuY3Rpb24gKGksIGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xyXG4gICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcclxuICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcclxuICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblBhcnNlci5wcm90b3R5cGUuZXhwZWN0ID0gZnVuY3Rpb24gKGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcclxuICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgeyBQYXJzZXIgfTsiLCJmdW5jdGlvbiBlbXB0eShlbGUpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZS5jaGlsZE5vZGVzLCAwKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGVsZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZShyZWZFbGUsIG5ld0VsZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZFbGUucGFyZW50Tm9kZTtcclxuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbGUsIHJlZkVsZSk7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZWZFbGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUoZWxlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQmV0d2VlbihlbGUxLCBlbGUyKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsZTEucGFyZW50Tm9kZTtcclxuICAgIHZhciBjaGlsZE5vZGVzID0gdG9BcnJheShwYXJlbnROb2RlLmNoaWxkTm9kZXMpO1xyXG5cclxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBlbGUxICYmIGNoaWxkICE9PSBlbGUyKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVsZTIgJiYgY2hpbGQgIT09IGVsZTEpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIHJlZk5vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gcmVmTm9kZSkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkTm9kZXMpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjaGlsZE5vZGVzLCAwKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZW1wdHksIHJlcGxhY2UsIHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIHJlbW92ZUJldHdlZW4gfTtcclxuIiwiaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZWxlLXV0aWxzJztcclxuXHJcbmZ1bmN0aW9uIGlzTWVzc2VuZ2VyKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NlbmdlcjtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNNZXNzZW5nZXJ9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gTWVzc2VuZ2VyKCkge1xyXG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xyXG59XHJcblxyXG5NZXNzZW5nZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xyXG59O1xyXG5cclxuTWVzc2VuZ2VyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZm4pIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldID09PSBmbikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5NZXNzZW5nZXIucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoYXJncywgc2NvcGUpIHtcclxuICAgIHZhciByZXR1cm5WYWx1ZTtcclxuICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuaGFuZGxlcnNbaV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVyc1tpXS5jYWxsKHNjb3BlLCBzY29wZSwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTWVzc2VuZ2VyQnVzKCkge1xyXG4gICAgdGhpcy5tZXNzZW5nZXJzID0ge307XHJcbn1cclxuXHJcbk1lc3NlbmdlckJ1cy5wcm90b3R5cGUuZ2V0TWVzc2VuZ2VyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICghdGhpcy5tZXNzZW5nZXJzW2VdKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzZW5nZXJzW2VdID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubWVzc2VuZ2Vyc1tlXTtcclxufTtcclxuXHJcbk1lc3NlbmdlckJ1cy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZSwgZm4pIHtcclxuICAgIHRoaXMuZ2V0TWVzc2VuZ2VyKGUpLm9uKGZuKTtcclxufTtcclxuXHJcbk1lc3NlbmdlckJ1cy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGUsIGZuKSB7XHJcbiAgICB0aGlzLmdldE1lc3NlbmdlcihlKS5vZmYoZm4pO1xyXG59O1xyXG5cclxuTWVzc2VuZ2VyQnVzLnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKGUsIGFyZ3MsIHNjb3BlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNZXNzZW5nZXIoZSkuZmlyZShhcmdzLCBzY29wZSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBNZXNzZW5nZXIsIE1lc3NlbmdlckJ1cyB9OyIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxyXG4gICAgaXNBcnJheSA9IEFycmF5LmlzQXJyYXksXHJcbiAgICB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXHJcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcclxuXHJcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBhY3Rpb24pIHtcclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjdGlvbihvYmosIG9iaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkob2JqKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvcHkoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICB2YXIgbmV3T2JqID0ge307XHJcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gY29weSh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld09iajtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRlbmQoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XHJcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcclxuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZXApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2UoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcclxuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmplY3Qobykge1xyXG4gICAgZnVuY3Rpb24gRigpIHtcclxuICAgIH1cclxuXHJcbiAgICBGLnByb3RvdHlwZSA9IG87XHJcbiAgICByZXR1cm4gbmV3IEYoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcclxuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XHJcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xyXG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XHJcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XHJcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgIHN1cGVyVHlwZS5hcHBseShzZWxmLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1Zyhsb2cpIHtcclxuICAgIGlmIChkZWJ1Z01vZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIG9iaikge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWluc1N0cihhcnIsIHN0ciwgaWdub3JlQ2FzZSkge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKGtleTMsIHZhbHVlMykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5Ml0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uIChrZXkzLCB2YWx1ZTMpIHtcclxuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGFzUHJvcCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnOiBDYW4gbm90IHNldCBwcm9wZXJ0eSBvZiB1bmRlZmluZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZvckVhY2gsXHJcbiAgICBjb3B5LFxyXG4gICAgZXh0ZW5kLFxyXG4gICAgbWVyZ2UsXHJcbiAgICBvYmplY3QsXHJcbiAgICBpbmhlcml0LFxyXG4gICAgbG93ZXJjYXNlLFxyXG4gICAgdXBwZXJjYXNlLFxyXG4gICAgaXNVbmRlZmluZWQsXHJcbiAgICBpc0RlZmluZWQsXHJcbiAgICBpc09iamVjdCxcclxuICAgIGlzQmxhbmtPYmplY3QsXHJcbiAgICBpc051bWJlcixcclxuICAgIGlzRGF0ZSxcclxuICAgIGlzRnVuY3Rpb24sXHJcbiAgICBpc1JlZ0V4cCxcclxuICAgIGlzQm9vbGVhbixcclxuICAgIGlzQXJyYXksXHJcbiAgICBpc1N0cmluZyxcclxuICAgIGRlYnVnLFxyXG4gICAgY29udGFpbnMsXHJcbiAgICBjb250YWluc1N0cixcclxuICAgIGhhc1Byb3BlcnR5LFxyXG4gICAgZ2V0UHJvcGVydHksXHJcbiAgICBzZXRQcm9wZXJ0eVxyXG59OyIsImltcG9ydCB7aXNNZXNzZW5nZXJ9IGZyb20gJy4uL3V0aWxpdHknO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0ICogYXMgZWxlVXRpbHMgZnJvbSAnLi4vdXRpbGl0eS9lbGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQge2NvbXBpbGV9IGZyb20gJy4uL3BhcnNlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQoKSB7XHJcbiAgICB0aGlzLiRhc3ROb2RlcyA9IFtdO1xyXG4gICAgdGhpcy4kcGFyZW50ID0gbnVsbDtcclxuICAgIHRoaXMuJGNoaWxkcmVuID0gW107XHJcbiAgICB0aGlzLiRkaXJlY3RpdmVzID0gW107XHJcbn1cclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGdldFRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGYuJGRlZi50ZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLiRkZWYudGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1N0cmluZyhzZWxmLiRkZWYudGVtcGxhdGVJZCkpIHtcclxuICAgICAgICAgICAgdmFyIHRwbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYuJGRlZi50ZW1wbGF0ZUlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0cGwgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRwbC5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGYuJGRlZi50ZW1wbGF0ZVVybCkpIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KHNlbGYuJGRlZi50ZW1wbGF0ZVVybCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgIHNlbGYuJGdldFRlbXBsYXRlKCkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGNvbXBpbGUoaHRtbCkoc2VsZikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uIChpZE9yRWxlbWVudCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBlbGVtZW50O1xyXG5cclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhpZE9yRWxlbWVudCkpIHtcclxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRPckVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudCA9IGlkT3JFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGVsZVV0aWxzLmVtcHR5KGVsZW1lbnQpO1xyXG4gICAgdGhpcy4kcmVuZGVyKCkudGhlbihmdW5jdGlvbiAoZWxlKSB7XHJcbiAgICAgICAgc2VsZi4kb25Nb3VudGluZygpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlKTtcclxuICAgICAgICBzZWxmLiRvbk1vdW50ZWQoKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kZGV0ZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy4kYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xyXG4gICAgICAgIGFzdE5vZGUuZGV0ZWN0KCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLiRvbkRlc3Ryb3lpbmcoKTtcclxuICAgIHRoaXMuJGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuJGRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy4kZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLiRkZXN0cm95KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuJG9uRGVzdHJveWVkKCk7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiR1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25VcGRhdGUpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uVXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRoYXNBdHRyID0gZnVuY3Rpb24gKHByb3ApIHtcclxuICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLiRkZWYucHJvcHMsIHByb3AsIHRydWUpO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kc2V0QXR0ciA9IGZ1bmN0aW9uIChwcm9wLCB2YWx1ZSkge1xyXG4gICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcywgcHJvcCwgdmFsdWUsIHRydWUpO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kaGFzRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmNvbnRhaW5zU3RyKHRoaXMuJGRlZi5ldmVudHMsIGUsIHRydWUpO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kbGlzdGVuID0gZnVuY3Rpb24gKGUsIGZuKSB7XHJcbiAgICB2YXIgbWVzc2VuZ2VyID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgZSwgdHJ1ZSk7XHJcbiAgICBpZiAoaXNNZXNzZW5nZXIobWVzc2VuZ2VyKSkge1xyXG4gICAgICAgIG1lc3Nlbmdlci5vbihmbik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGUgKyAnIGlzIG5vdCBhIGV2ZW50Jyk7XHJcbn07XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLiRvbkNyZWF0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uQ3JlYXRpbmcpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uQ3JlYXRpbmcuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJG9uQ3JlYXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmICh1dGlscy5pc09iamVjdCh0aGlzLiRkZWYuaW5qZWN0KSkge1xyXG4gICAgICAgIHV0aWxzLmZvckVhY2godGhpcy4kZGVmLmluamVjdCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgc2VsZltrZXldID0gaW5qZWN0b3IuY3JlYXRlU2VydmljZSh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25DcmVhdGVkKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbkNyZWF0ZWQuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJG9uVXBkYXRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kb25VcGRhdGVkID0gZnVuY3Rpb24gKCkge1xyXG5cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJG9uTW91bnRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kb25Nb3VudGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy4kYXN0Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zZXJ0ZWQoKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS4kb25EZXN0cm95aW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxufTtcclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuJG9uRGVzdHJveWVkID0gZnVuY3Rpb24gKCkge1xyXG5cclxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHtpbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXJlY3RpdmUoKSB7XHJcbiAgICB0aGlzLm91dHB1dCA9IGZhbHNlO1xyXG4gICAgdGhpcy4kYmluZGluZyA9IG51bGw7XHJcbn1cclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJG9uQ3JlYXRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25DcmVhdGluZykpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25DcmVhdGluZy5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kb25DcmVhdGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHRoaXMuJGRlZi5pbmplY3QpKSB7XHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaCh0aGlzLiRkZWYuaW5qZWN0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBzZWxmW2tleV0gPSBpbmplY3Rvci5jcmVhdGVTZXJ2aWNlKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkNyZWF0ZWQpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uQ3JlYXRlZC5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRGlyZWN0aXZlLnByb3RvdHlwZS4kYmluZCA9IGZ1bmN0aW9uIChiaW5kaW5nKSB7XHJcbiAgICB0aGlzLiRiaW5kaW5nID0gYmluZGluZztcclxufTtcclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJGluc2VydGluZyA9IGZ1bmN0aW9uIChlbGUsIGNvbSkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uSW5zZXJ0aW5nKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbkluc2VydGluZy5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kYmluZGluZywgY29tKTtcclxuICAgIH1cclxufTtcclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJGluc2VydGVkID0gZnVuY3Rpb24gKGVsZSwgY29tKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25JbnNlcnRlZCkpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25JbnNlcnRlZC5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kYmluZGluZywgY29tKTtcclxuICAgIH1cclxufTtcclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJHVwZGF0ZSA9IGZ1bmN0aW9uIChlbGUsIGNvbSkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uVXBkYXRlKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vblVwZGF0ZS5jYWxsKHRoaXMsIGVsZSwgdGhpcy4kYmluZGluZywgY29tKTtcclxuICAgIH1cclxufTtcclxuXHJcbkRpcmVjdGl2ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25EZXN0cm95KSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuaW1wb3J0IHtpbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXIoKSB7XHJcblxyXG59XHJcblxyXG5GaWx0ZXIucHJvdG90eXBlLiRleGVjdXRlID0gZnVuY3Rpb24gKGVsZSkge1xyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uRXhlY3V0ZSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kZGVmLm9uRXhlY3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRmlsdGVyLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuRmlsdGVyLnByb3RvdHlwZS4kb25DcmVhdGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkNyZWF0aW5nKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbkNyZWF0aW5nLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5GaWx0ZXIucHJvdG90eXBlLiRvbkNyZWF0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAodXRpbHMuaXNPYmplY3QodGhpcy4kZGVmLmluamVjdCkpIHtcclxuICAgICAgICB1dGlscy5mb3JFYWNoKHRoaXMuJGRlZi5pbmplY3QsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNlbGZba2V5XSA9IGluamVjdG9yLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy4kZGVmLm9uQ3JlYXRlZCkpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25DcmVhdGVkLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcbmltcG9ydCB7IHR5cGVDb25zdCwgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyJztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgZXh0ZW5kQW5kV2F0Y2hQcm9wcyB9IGZyb20gJy4vd2F0Y2gnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KG5hbWUsIGRlZikge1xyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuY29tcG9uZW50LFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IENvbXBvbmVudCxcclxuICAgICAgICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRvbkNyZWF0aW5nKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlcih0aGlzKTtcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QodGhpcy4kZGVmLnByb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZEFuZFdhdGNoUHJvcHMoc2VsZiwgdGhpcy4kZGVmLnByb3BzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0FycmF5KHRoaXMuJGRlZi5ldmVudHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZGVmLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGZbZV0gPSBuZXcgTWVzc2VuZ2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBkZWYpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcclxuICAgICAgICBkZWYgPSB7XHJcbiAgICAgICAgICAgIG9uSW5zZXJ0ZWQ6IGRlZixcclxuICAgICAgICAgICAgb25VcGRhdGU6IGRlZlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluamVjdG9yLmJ1aWxkQ29uc3RydWN0b3IobmFtZSwgZGVmLCB7XHJcbiAgICAgICAgY29udHJhY3RUeXBlOiB0eXBlQ29uc3QuZGlyZWN0aXZlLFxyXG4gICAgICAgIHN1cGVyQ2xhc3M6IERpcmVjdGl2ZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlcihuYW1lLCBkZWYpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRlZikpIHtcclxuICAgICAgICBkZWYgPSB7XHJcbiAgICAgICAgICAgIG9uRXhlY3V0ZTogZGVmXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5qZWN0b3IuYnVpbGRDb25zdHJ1Y3RvcihuYW1lLCBkZWYsIHtcclxuICAgICAgICBjb250cmFjdFR5cGU6IHR5cGVDb25zdC5maWx0ZXIsXHJcbiAgICAgICAgc3VwZXJDbGFzczogRmlsdGVyXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VydmljZShuYW1lLCBkZWYpIHtcclxuICAgIHJldHVybiBpbmplY3Rvci5idWlsZENvbnN0cnVjdG9yKG5hbWUsIGRlZiwge1xyXG4gICAgICAgIGNvbnRyYWN0VHlwZTogdHlwZUNvbnN0LnNlcnZpY2UsXHJcbiAgICAgICAgc3VwZXJDbGFzczogU2VydmljZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29tcG9uZW50KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIENvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEaXJlY3RpdmUob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0ZpbHRlcihvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBGaWx0ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2VydmljZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBTZXJ2aWNlO1xyXG59XHJcblxyXG5leHBvcnQgeyBpbmplY3RvciwgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciwgc2VydmljZSwgaXNDb21wb25lbnQsIGlzRGlyZWN0aXZlLCBpc0ZpbHRlciwgaXNTZXJ2aWNlIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbGl0eS91dGlscyc7XHJcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4uL3V0aWxpdHkvbWVzc2FnZSc7XHJcblxyXG52YXIgdHlwZUNvbnN0ID0ge1xyXG4gICAgZmlsdGVyOiAnZmlsdGVyJyxcclxuICAgIHNlcnZpY2U6ICdzZXJ2aWNlJyxcclxuICAgIGNvbXBvbmVudDogJ2NvbXBvbmVudCcsXHJcbiAgICBkaXJlY3RpdmU6ICdkaXJlY3RpdmUnXHJcbn07XHJcblxyXG52YXIgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTtcclxuXHJcbmZ1bmN0aW9uIEluamVjdG9yKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSB7fTtcclxuICAgIHRoaXMud2FpdGluZ1RvRXh0ZW5kcyA9IHt9O1xyXG4gICAgdGhpcy5pbnNDb250YWluZXIgPSB7fTtcclxufVxyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmdldE1hcHBpbmcgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlKSB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcltjb250cmFjdFR5cGVdID0ge307XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJbY29udHJhY3RUeXBlXTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5nZXRJbnN0YW5jZXMgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zQ29udGFpbmVyW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICB0aGlzLmluc0NvbnRhaW5lcltjb250cmFjdFR5cGVdID0gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnNDb250YWluZXJbY29udHJhY3RUeXBlXTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUsIGNvbnRyYWN0TmFtZSwgY29uc3RydWN0b3IpIHtcclxuICAgIHZhciBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XHJcblxyXG4gICAgaWYgKG1hcHBpbmdbY29udHJhY3ROYW1lXSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0VHlwZSArICcgJyArIGNvbnRyYWN0TmFtZSArICcgaXMgYWxyZWFkeSBleGlzdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwcGluZ1tjb250cmFjdE5hbWVdID0gY29uc3RydWN0b3I7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbiAoY29udHJhY3ROYW1lLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgdGhpcy5yZWdpc3Rlcih0eXBlQ29uc3QuY29tcG9uZW50LCBjb250cmFjdE5hbWUsIGNvbnN0cnVjdG9yKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5yZWdpc3RlckRpcmVjdGl2ZSA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUsIGNvbnN0cnVjdG9yKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyKHR5cGVDb25zdC5kaXJlY3RpdmUsIGNvbnRyYWN0TmFtZSwgY29uc3RydWN0b3IpO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGNvbnRyYWN0VHlwZSwgY29udHJhY3ROYW1lLCBpZ25vcmVDYXNlKSB7XHJcbiAgICB2YXIgbWFwcGluZyA9IHRoaXMuZ2V0TWFwcGluZyhjb250cmFjdFR5cGUpO1xyXG5cclxuICAgIGlmIChpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KG1hcHBpbmcsIGNvbnRyYWN0TmFtZSwgaWdub3JlQ2FzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hcHBpbmdbY29udHJhY3ROYW1lXSAhPSBudWxsO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNvbnRhaW5zQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmNvbXBvbmVudCwgY29udHJhY3ROYW1lLCB0cnVlKVxyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNvbnRhaW5zRGlyZWN0aXZlID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbnModHlwZUNvbnN0LmRpcmVjdGl2ZSwgY29udHJhY3ROYW1lLCB0cnVlKVxyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUsIGNvbnRyYWN0TmFtZSwgaWdub3JlQ2FzZSkge1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yLCBtYXBwaW5nID0gdGhpcy5nZXRNYXBwaW5nKGNvbnRyYWN0VHlwZSk7XHJcblxyXG4gICAgaWYgKGlnbm9yZUNhc2UpIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciA9IHV0aWxzLmdldFByb3BlcnR5KG1hcHBpbmcsIGNvbnRyYWN0TmFtZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciA9IG1hcHBpbmdbY29udHJhY3ROYW1lXVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRyYWN0VHlwZSArICcgJyArIGNvbnRyYWN0TmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5jb21wb25lbnQsIGNvbnRyYWN0TmFtZSk7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0RGlyZWN0aXZlID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5kaXJlY3RpdmUsIGNvbnRyYWN0TmFtZSk7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0RmlsdGVyID0gZnVuY3Rpb24gKGNvbnRyYWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHR5cGVDb25zdC5maWx0ZXIsIGNvbnRyYWN0TmFtZSk7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0U2VydmljZSA9IGZ1bmN0aW9uIChjb250cmFjdE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmdldCh0eXBlQ29uc3Quc2VydmljZSwgY29udHJhY3ROYW1lKTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlLCBjb250cmFjdE5hbWUpIHtcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KGNvbnRyYWN0VHlwZSwgY29udHJhY3ROYW1lKSwgaW5zdGFuY2U7XHJcblxyXG4gICAgc3dpdGNoIChjb250cmFjdFR5cGUpIHtcclxuICAgICAgICBjYXNlIGNvbnRyYWN0VHlwZS5jb21wb25lbnQ6XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVDb21wb25lbnQoY29uc3RydWN0b3IpOyBicmVhaztcclxuICAgICAgICBjYXNlIGNvbnRyYWN0VHlwZS5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVEaXJlY3RpdmUoY29uc3RydWN0b3IpOyBicmVhaztcclxuICAgICAgICBjYXNlIGNvbnRyYWN0VHlwZS5maWx0ZXI6XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jcmVhdGVGaWx0ZXIoY29uc3RydWN0b3IpOyBicmVhaztcclxuICAgICAgICBjYXNlIGNvbnRyYWN0VHlwZS5zZXJ2aWNlOlxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlU2VydmljZShjb25zdHJ1Y3Rvcik7IGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7IGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGluc3RhbmNlLiRvbkNyZWF0ZWQoKTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5jcmVhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLmNyZWF0ZURpcmVjdGl2ZSA9IGZ1bmN0aW9uIChjb25zdHJ1Y3Rvcikge1xyXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXREaXJlY3RpdmUoY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yKCk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcoY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5jcmVhdGVTZXJ2aWNlID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XHJcbiAgICB2YXIgaW5zdGFuY2UsIHNlcnZpY2VzID0gdGhpcy5nZXRJbnN0YW5jZXModHlwZUNvbnN0LnNlcnZpY2UpO1xyXG5cclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhjb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0U2VydmljZShjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJGRlZi5ub25TaGFyZWQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gc2VydmljZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2YgY29uc3RydWN0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgICAgICBzZXJ2aWNlcy5wdXNoKGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5JbmplY3Rvci5wcm90b3R5cGUuZ2V0V2FpdGluZ1RvRXh0ZW5kcyA9IGZ1bmN0aW9uIChjb250cmFjdFR5cGUpIHtcclxuICAgIGlmICghdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0pIHtcclxuICAgICAgICB0aGlzLndhaXRpbmdUb0V4dGVuZHNbY29udHJhY3RUeXBlXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMud2FpdGluZ1RvRXh0ZW5kc1tjb250cmFjdFR5cGVdO1xyXG59O1xyXG5cclxuSW5qZWN0b3IucHJvdG90eXBlLnNldFdhaXRpbmdUb0V4dGVuZHMgPSBmdW5jdGlvbiAoY29udHJhY3RUeXBlLCB2YWx1ZSkge1xyXG4gICAgdGhpcy53YWl0aW5nVG9FeHRlbmRzW2NvbnRyYWN0VHlwZV0gPSB2YWx1ZTtcclxufTtcclxuXHJcbkluamVjdG9yLnByb3RvdHlwZS5idWlsZENvbnN0cnVjdG9yID0gZnVuY3Rpb24gbWFrZUNvbnN0cnVjdG9yKGNvbnRyYWN0TmFtZSwgZGVmLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGNvbnN0cnVjdG9yLCB3YWl0aW5nVG9FeHRlbmRzID0gc2VsZi5nZXRXYWl0aW5nVG9FeHRlbmRzKG9wdGlvbnMuY29udHJhY3RUeXBlKTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihvcHRpb25zLmdldENvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gb3B0aW9ucy5nZXRDb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgPSBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLiRvbkNyZWF0aW5nKCk7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KHRoaXMuJGRlZi5wcm9wcykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmV4dGVuZCh0aGlzLCB0aGlzLiRkZWYucHJvcHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0FycmF5KHRoaXMuJGRlZi5ldmVudHMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkZWYuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmW2VdID0gbmV3IE1lc3NlbmdlcigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMuc3VwZXJDbGFzcykpIHtcclxuICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBvcHRpb25zLnN1cGVyQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS4ka2V5ID0gY29udHJhY3ROYW1lO1xyXG5cclxuICAgIC8vIGFwcGx5IHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcclxuICAgIGlmICh1dGlscy5pc1N0cmluZyhkZWYuZXh0ZW5kcykpIHtcclxuICAgICAgICBpZiAoaW5qZWN0b3IuY29udGFpbnMob3B0aW9ucy5jb250cmFjdFR5cGUsIGRlZi5leHRlbmRzKSkge1xyXG4gICAgICAgICAgICB2YXIgc3VwZXJPbmUgPSBpbmplY3Rvci5nZXQob3B0aW9ucy5jb250cmFjdFR5cGUsIGRlZi5leHRlbmRzKTtcclxuICAgICAgICAgICAgdmFyIGRlZjIgPSBleHRlbmREZWYoZGVmLCBzdXBlck9uZSk7XHJcbiAgICAgICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKGNvbnRyYWN0TmFtZSwgZGVmMiwgY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHN1cGVyTmFtZTogZGVmLmV4dGVuZHMsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHN1cGVyT25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZjIgPSBleHRlbmREZWYoZGVmLCBzdXBlck9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluQ29uc3RydWN0b3IoY29udHJhY3ROYW1lLCBkZWYyLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlbWFpbkNvbnN0cnVjdG9yKGNvbnRyYWN0TmFtZSwgZGVmLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXh0ZW5kRGVmKGRlZiwgc3VwZXJPbmUpIHtcclxuICAgICAgICBpZiAoc3VwZXJPbmUucHJvdG90eXBlLiRkZWYgJiYgc3VwZXJPbmUucHJvdG90eXBlLiRkZWYucHJvdGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25zLmNvbnRyYWN0VHlwZSArICc6ICcgKyBkZWYuZXh0ZW5kcyArICcgaXMgcHJvdGVjdGVkLCBpdCBpcyBub3QgYWxsb3dlZCB0byBleHRlbmQhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2UodHJ1ZSwgdXRpbHMuY29weShzdXBlck9uZS5wcm90b3R5cGUuJGRlZiksIGRlZik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtYWluQ29uc3RydWN0b3IobmFtZSwgZGVmLCBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kZGVmID0gZGVmO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xyXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChkZWYubWV0aG9kcykpIHtcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgZGVmLm1ldGhvZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXIob3B0aW9ucy5jb250cmFjdFR5cGUsIG5hbWUsIGNvbnN0cnVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYW55IGNvbXBvbmVudCBleHRlbmRzIGN1cnJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgdmFyIHdhaXRpbmdUb0V4dGVuZHMyID0gW107XHJcbiAgICAgICAgd2FpdGluZ1RvRXh0ZW5kcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnN1cGVyTmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jYWxsYmFjay5jYWxsKG51bGwsIGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdUb0V4dGVuZHMyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLnNldFdhaXRpbmdUb0V4dGVuZHMob3B0aW9ucy5jb250cmFjdFR5cGUsIHdhaXRpbmdUb0V4dGVuZHMyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn07XHJcblxyXG5leHBvcnQgeyB0eXBlQ29uc3QsIEluamVjdG9yLCBpbmplY3RvciB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxpdHkvdXRpbHMnO1xyXG5pbXBvcnQge2luamVjdG9yfSBmcm9tICcuL2luamVjdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2UoKSB7XHJcblxyXG59XHJcblxyXG5TZXJ2aWNlLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuJGRlZi5vbkRlc3Ryb3kpKSB7XHJcbiAgICAgICAgdGhpcy4kZGVmLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuU2VydmljZS5wcm90b3R5cGUuJG9uQ3JlYXRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25DcmVhdGluZykpIHtcclxuICAgICAgICB0aGlzLiRkZWYub25DcmVhdGluZy5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuU2VydmljZS5wcm90b3R5cGUuJG9uQ3JlYXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmICh1dGlscy5pc09iamVjdCh0aGlzLiRkZWYuaW5qZWN0KSkge1xyXG4gICAgICAgIHV0aWxzLmZvckVhY2godGhpcy4kZGVmLmluamVjdCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgc2VsZltrZXldID0gaW5qZWN0b3IuY3JlYXRlU2VydmljZSh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLiRkZWYub25DcmVhdGVkKSkge1xyXG4gICAgICAgIHRoaXMuJGRlZi5vbkNyZWF0ZWQuY2FsbCh0aGlzKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlsaXR5L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIGV4dGVuZEFuZFdhdGNoUHJvcHMoaW5zdGFuY2UsIHByb3BzKSB7XHJcbiAgICB2YXIgcHJlZml4ID0gJyQkJztcclxuICAgIHV0aWxzLmZvckVhY2gocHJvcHMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaW5zdGFuY2VbcHJlZml4ICsga2V5XSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVtwcmVmaXggKyBrZXldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW3ByZWZpeCArIGtleV0gIT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuJG9uVXBkYXRpbmcoa2V5LCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJlZml4ICsga2V5XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2UuJCR0aW1lb3V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS4kJHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLiRkZXRlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLiQkdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS4kb25VcGRhdGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgZXh0ZW5kQW5kV2F0Y2hQcm9wcyB9OyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fOyJdLCJzb3VyY2VSb290IjoiIn0=