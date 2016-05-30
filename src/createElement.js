import React, { isValidElement } from 'react';

import propsMapper from './propsMapper';

const isNode = input => (
  typeof input == 'string' || Array.isArray(input) || isValidElement(input)
);

export function mapElementPropsWith(mapper) {
  return function createElement(type) {
    const propsOrNode = arguments[1];
    let props = {};
    let nodeIndex = 2;
    if (isNode(propsOrNode)) {
      nodeIndex = 1;
    }
    else if (propsOrNode != null) {
      props = mapper(propsOrNode);
    }
    const nodes = Array.prototype.slice.call(arguments, nodeIndex);
    return React.createElement(type, props, ...nodes);
  };
}

export default mapElementPropsWith(propsMapper);
