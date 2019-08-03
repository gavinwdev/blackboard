import * as utils from '../utility/utils';
import * as eleUtils from '../utility/ele-utils';
import { Parser } from './parser';
import { injector } from '../view';
import {compute} from './index';

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

utils.inherit(DocumentNode, SNode);
// document node
function DocumentNode() {
    DocumentNode.super(this, WNodeType.document);
}

utils.inherit(ElementNode, SNode);
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

    if (injector.containsComponent(this.nodeName)) {
        self.component = injector.createComponent(this.nodeName);
        self.component.$parent = scope;
        if (utils.isArray(scope.$children)) {
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

utils.inherit(TextNode, SNode);
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
        eleUtils.replace(this.element, this.render());
    }
};

TextNode.prototype.render = function () {
    var value = this.binding.compute();
    this.element = document.createTextNode(value);
    return this.element;
};

utils.inherit(CommentNode, SNode);
// comment node
function CommentNode() {
    CommentNode.super(this, WNodeType.comment, '#comment');
}

CommentNode.prototype.link = function () {
    return document.createComment(this.nodeValue);
};

utils.inherit(CDataSectionNode, SNode);
// CDataSection node
function CDataSectionNode() {
    CDataSectionNode.super(this, WNodeType.cdataSection);
}

utils.inherit(DocumentTypeNode, SNode);
// document type node
function DocumentTypeNode() {
    DocumentTypeNode.super(this, WNodeType.documentType);
}

utils.inherit(DocumentFragmentNode, SNode);
// document fragment node
function DocumentFragmentNode() {
    DocumentFragmentNode.super(this, WNodeType.documentFragment, '#document-fragment');
}

utils.inherit(AttrNode, SNode);
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
    this.isDomEvent = utils.contains(domEvents, this.nodeName2);

    if (this.isDirective) {
        if (injector.containsDirective(this.nodeName2)) {
            this.directive = injector.createDirective(this.nodeName2);

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
    this.value = compute(this.text, scope, options);
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

utils.inherit(HtmlParser, Parser);
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

export { HtmlParser };