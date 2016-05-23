import React from 'react';

import transformProps from './transformProps';

const isProps = input => (
  input !== null && typeof input === 'object' && !React.isValidElement(input)
);

export default function createElement(type, propsOrNode, ...nodes) {
  const args = isProps(propsOrNode) ?
    [type, transformProps(propsOrNode), ...nodes] :
    [type, {}, propsOrNode, ...nodes];
  return React.createElement.apply(null, args);
}
