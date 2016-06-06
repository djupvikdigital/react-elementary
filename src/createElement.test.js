import expect from 'expect';

import { map, toUpper } from 'ramda';
import React from 'react';
import { shallow } from 'enzyme';

import createElement, { mapElementPropsWith } from './createElement';

describe('createElement', () => {
  it('supports omitting props', () => {
    const expected = React.createElement(
      'div', {}, React.createElement('span', {}, 't'), 'est'
    );
    const actual = createElement('div', createElement('span', 't'), 'est');
    expect(actual).toEqual(expected);
  });

  it('handles undefined props properly', () => {
    const expected = React.createElement('div', void 0);
    const actual = createElement('div', void 0);
    expect(actual).toEqual(expected);
  });

  it('lets the innerHtml prop insert unescaped HTML into the element', () => {
    const expected = '<div><strong>Dangerous</strong> HTML!</div>';
    const actual = shallow(
      createElement('div', { innerHtml: '<strong>Dangerous</strong> HTML!' })
    ).html();
    expect(actual).toBe(expected);
  });
});

describe('mapElementPropsWith', () => {
  it('takes a props mapper, and returns a createElement function', () => {
    const fn = mapElementPropsWith(map(toUpper));
    const expected = React.createElement(
      'div', { className: 'BAR', id: 'FOO' }
    );
    const actual = fn('div', { className: 'bar', id: 'foo' });
    expect(actual).toEqual(expected);
  });
});
