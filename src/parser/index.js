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

function parse(html) {
    var lexer = new HtmlLexer(parseOptions);
    var parser = new HtmlParser(lexer, parseOptions);
    return parser.parse(html);
}

function compile(html, options) {
    var defaults = {
            getEmbedTpl: function () {
                return '';
            }
        },
        settings = utils.merge(defaults, options),
        astNodes = parse(html);

    astNodes.forEach(function (astNode) {
        astNode.compile();
    });

    astNodes.forEach(function (astNode) {
        astNode.directives().forEach(function (directive) {
            directive.$compile(settings);
        });
    });

    return function (scope) {
        var fragment = document.createDocumentFragment();

        scope.$$astNodes = astNodes;

        if (!isComponent(scope)) {
            scope.$$directives = [];
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
    var lexer = new Lexer(parseOptions);
    var parser = new Parser(lexer, parseOptions);
    options = options || {};
    options.createFilter = function (name) {
        return injector.createFilter(name);
    };
    return parser.parse(exp).compile(scope, options);
}

export { bootstrap, compile, compute, parse };