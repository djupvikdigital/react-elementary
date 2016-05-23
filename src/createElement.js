import React from 'react';

import propsMapper from './propsMapper';

const isNode = input => typeof input == 'string' || React.isValidElement(input);

export default function createElement(type, propsOrNode, ...nodes) {
  let args;
  if (isNode(propsOrNode)) {
    args = [type, {}, propsOrNode, ...nodes];
  }
  else if (propsOrNode != null) {
    args = [type, propsMapper(propsOrNode), ...nodes];
  }
  return React.createElement.apply(null, args || arguments);
}
