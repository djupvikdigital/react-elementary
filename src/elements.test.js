import expect from 'expect';

import { DOM } from 'react';

import elements from './elements';

describe('elements', () => {
  it('works the same as React.DOM', () => {
    const expected = DOM.div({}, DOM.span({}, 't'), 'est');
    const actual = elements.div(elements.span('t'), 'est');
    expect(actual).toEqual(expected);
  });
});
