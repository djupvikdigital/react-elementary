import React from 'react';

const isProps = input => (
  input !== null && typeof input === 'object' && !React.isValidElement(input)
);

export default function createElement(type, propsOrNode, ...nodes) {
  const args = isProps(propsOrNode) ?
    [type, propsOrNode, ...nodes] :
    [type, {}, propsOrNode, ...nodes];
  return React.createElement.apply(null, args);
}
