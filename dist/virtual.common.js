/*!
 * Virtual.js v0.0.2
 * (c) 2016 DanielMadu
 * Released under the MIT License.
 */
'use strict';

var Virtual$1 = {
  h: function h(type, props) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    if (children.length > 0) {
      var childs = children.reduce(function (childs, child) {
        if (Array.isArray(child)) {
          return childs.concat(child);
        } else {
          childs.push(child);
          return childs;
        }
      }, []);
      return { type: type, props: props, children: childs };
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

module.exports = Virtual$1;
