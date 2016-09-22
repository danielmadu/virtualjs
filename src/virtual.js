'use strict'
let Virtual = () => {
  this.h = (type, props, ...children) => {
    return { type, props, children }
  }

  this.createElement = (node) => {
    if (typeof node === 'string') {
      return document.createTextNode(node)
    }
    return document.createElement(node.type)
  }
}

export default Virtual
