import expect from 'expect';

import mergeProps from './mergeProps';

describe('mergeProps', () => {
  it('merges props objects, values in latter object overriding former', () => {
    const expected = {
      x: 'foo',
      y: 'bar',
      z: 'baz'
    };
    const actual = mergeProps({ x: 'foo', z: 'quux' }, { y : 'bar', z: 'baz' });
    expect(actual).toEqual(expected);
  });
});
