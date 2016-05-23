import expect from 'expect';

import Immutable from 'immutable';

import mapIntoArray from './mapIntoArray';

const identity = x => x;

describe('mapIntoArray', () => {
  it('takes an immutable collection and a mapper and returns an array', () => {
    const expected = [1, 2, 3];
    const actual = mapIntoArray(Immutable.fromJS(expected), identity);
    expect(actual).toEqual(expected);
  });
});
