import expect from 'expect'

import classNames from 'classnames/dedupe'

import mergeProps, { createCustomMerge } from './mergeProps'

describe('mergeProps', () => {
  it('merges props objects, values in latter object overriding former', () => {
    const expected = {
      x: 'foo',
      y: 'bar',
      z: 'baz',
    }
    const actual = mergeProps(
      { x: 'foo', z: 'quux' },
      { z: 'baz' },
      { y: 'bar' },
    )
    expect(actual).toEqual(expected)
  })

  it('applies classnames to the className prop', () => {
    const expected = { className: classNames('foo', 'bar') }
    const actual = mergeProps({ className: 'foo' }, { className: 'bar' })
    expect(actual).toEqual(expected)
  })
})

describe('createCustomMerge', () => {
  it(`takes a map of reducers, and returns a merge function that applies the
      reducers to the named props, otherwise does a normal merge`, () => {
    const customReducer = (...args) => args.join(' ')
    const customMerge = createCustomMerge({ custom: customReducer })
    const expected = { custom: 'foo baz', normal: 'quux' }
    const actual = customMerge(
      { custom: 'foo', normal: 'bar' },
      { custom: 'baz', normal: 'quux' },
    )
    expect(actual).toEqual(expected)
  })
})
