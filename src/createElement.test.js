import expect from 'expect';

import React from 'react';

import createElement from './createElement';

describe('createElement', () => {
  it('supports omitting props', () => {
    const expected = React.createElement(
      'div', {}, React.createElement('span', {}, 't'), 'est'
    );
    const actual = createElement('div', createElement('span', 't'), 'est');
    expect(actual).toEqual(expected);
  });
});
