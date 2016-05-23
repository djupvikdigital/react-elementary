import React from 'react';

import propsMapper from './propsMapper';

const isNode = input => typeof input == 'string' || React.isValidElement(input);

export function mapProps(mapper) {
  return function createElement(type, propsOrNode, ...nodes) {
    let args;
    if (isNode(propsOrNode)) {
      args = [type, {}, propsOrNode, ...nodes];
    }
    else if (propsOrNode != null) {
      args = [type, mapper(propsOrNode), ...nodes];
    }
    return React.createElement.apply(null, args || arguments);
  }
}

export default mapProps(propsMapper);
