import React from 'react';

import transformProps from './transformProps';

const isNode = input => typeof input == 'string' || React.isValidElement(input);

export default function createElement(type, propsOrNode, ...nodes) {
  let args;
  if (isNode(propsOrNode)) {
    args = [type, {}, propsOrNode, ...nodes];
  }
  else if (typeof propsOrNode != 'undefined') {
    args = [type, transformProps(propsOrNode), ...nodes];
  }
  return React.createElement.apply(null, args || arguments);
}
