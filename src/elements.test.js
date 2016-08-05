/* eslint import/no-extraneous-dependencies: [2, { "devDependencies": true }] */

import expect from 'expect';

import { DOM } from 'react';

import elements from './elements';

describe('elements', () => {
  it('works the same as React.DOM for non-array children', () => {
    const expected = DOM.div({}, DOM.span({}, 't'), 'est');
    const actual = elements.div(elements.span('t'), 'est');
    expect(actual).toEqual(expected);
  });

  it('works the same as React.DOM for array children', () => {
    const expected = DOM.div({}, [DOM.span({ key: 'test' }, ['t']), 'est']);
    const actual = elements.div([elements.span({ key: 'test' }, ['t']), 'est']);
    expect(actual).toEqual(expected);
  });
});
