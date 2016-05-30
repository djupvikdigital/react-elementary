import { flatten } from 'ramda';
import React from 'react';

import propsMapper from './propsMapper';

const isNode = input => typeof input == 'string' || React.isValidElement(input);

export function mapElementPropsWith(mapper) {
  return function createElement(type) {
    const propsOrNode = arguments[1];
    let props = {};
    let nodeIndex = 2;
    if (isNode(propsOrNode)) {
      nodeIndex = 1;
    }
    else {
      props = mapper(propsOrNode);
    }
    const nodes = flatten(Array.prototype.slice.call(arguments, nodeIndex));
    return React.createElement(type, props, nodes);
  };
}

export default mapElementPropsWith(propsMapper);
