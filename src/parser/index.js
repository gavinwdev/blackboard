import * as utils from '../utility/utils';
import { injector, isComponent } from '../view';
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

function bootstrap(component, idOrElement) {
    var element, elementId;

    if (injector.containsComponent(component)) {
        injector.createComponent(component).$mount(idOrElement);
    }
    else {
        throw new Error('component' + component + 'is not defined');
    }
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
        settings = utils.merge(defaults, options),
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

        if (!isComponent(scope)) {
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
    var lexer = new Lexer(parseOptions);
    var parser = new Parser(lexer, parseOptions);
    options = options || {};
    options.createFilter = function (name) {
        return injector.createFilter(name);
    };
    return parser.parse(exp).compile(scope, options);
}

export { bootstrap, compile, compute, parse };