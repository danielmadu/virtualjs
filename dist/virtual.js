/*!
 * Virtual.js v0.0.2
 * (c) 2016 DanielMadu
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Virtual = factory());
}(this, (function () { 'use strict';

var Virtual$1 = {
  h: function h(type, props) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    if (children.length > 0) {
      return { type: type, props: props, children: children };
    } else {
      return { type: type, props: props };
    }
  },
  createClass: function createClass(options) {
    return options.render();
  },
  createElement: function createElement(node) {
    if (typeof node === 'string') {
      return document.createTextNode(node);
    }
    var $el = document.createElement(node.type);
    node.children.map(Virtual$1.createElement).forEach($el.appendChild.bind($el));
    return $el;
  },
  DOM: function DOM(node, $parent) {
    $parent.appendChild(Virtual$1.createElement(node.type));
  }
};

Virtual$1.version = '0.0.2';

return Virtual$1;

})));
