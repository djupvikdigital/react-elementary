import expect from 'expect';

import { map, toUpper } from 'ramda';
import React from 'react';

import createElement, { mapProps } from './createElement';

describe('createElement', () => {
  it('supports omitting props', () => {
    const expected = React.createElement(
      'div', {}, React.createElement('span', {}, 't'), 'est'
    );
    const actual = createElement('div', createElement('span', 't'), 'est');
    expect(actual).toEqual(expected);
  });

  it ('handles undefined props properly', () => {
    const expected = React.createElement('div', void 0);
    const actual = createElement('div', void 0);
    expect(actual).toEqual(expected);
  });
});

describe('mapProps', () => {
  it('takes a props mapper, and returns a createElement function', () => {
    const fn = mapProps(map(toUpper));
    const expected = React.createElement(
      'div', { className: 'BAR', id: 'FOO' }
    );
    const actual = fn('div', { className: 'bar', id: 'foo' });
    expect(actual).toEqual(expected);
  });
});
