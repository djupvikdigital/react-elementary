import expect from 'expect';

import classNames from 'classnames/dedupe';

import mergeProps from './mergeProps';

describe('mergeProps', () => {
  it('merges props objects, values in latter object overriding former', () => {
    const expected = {
      x: 'foo',
      y: 'bar',
      z: 'baz',
    };
    const actual = mergeProps({ x: 'foo', z: 'quux' }, { y: 'bar', z: 'baz' });
    expect(actual).toEqual(expected);
  });

  it('applies classnames to the className prop', () => {
    const expected = { className: classNames('foo', 'bar') };
    const actual = mergeProps({ className: 'foo' }, { className: 'bar' });
    expect(actual).toEqual(expected);
  });
});
