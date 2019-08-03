import * as utils from '../utility/utils';
import { component, injector, isComponent } from '../view';
import { Lexer } from './lexer';
import { Parser } from './parser';
import { HtmlLexer } from './html-lexer';
import { HtmlParser } from './html-parser';

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

    if (utils.isString(idOrElement)) {
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
    injector.createComponent(component(elementId, def)).$mount(idOrElement);
}

function compile(html) {
    var lexer = new HtmlLexer(parseOptions);
    var parser = new HtmlParser(lexer, parseOptions);
    var astNodes = parser.parse(html);

    astNodes.forEach(function (astNode) {
        astNode.compile();
    });

    return function (scope) {
        var fragment = document.createDocumentFragment();

        scope.$astNodes = astNodes;

        if (!isComponent(scope)) {
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
    var lexer = new Lexer(parseOptions);
    var parser = new Parser(lexer, parseOptions);
    options = options || {};
    options.createFilter = function (name) {
        return injector.createFilter(name);
    };
    return parser.parse(exp).compile(scope, options);
}

export { bootstrap, compile, compute };