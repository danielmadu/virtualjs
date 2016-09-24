'use strict'
const Virtual = {
  h: (type, props, ...children) => {
    return { type, props, children }
  },
  createElement: (node) => {
    if (typeof node === 'string') {
      return document.createTextNode(node)
    }
    const $el = document.createElement(node.type)
    node.children
      .map(Virtual.createElement)
      .forEach($el.appendChild.bind($el))
    return $el
  },
  DOM: (node, $parent) => {
    $parent.appendChild(Virtual.createElement(node.type))
  }
}

export default Virtual
