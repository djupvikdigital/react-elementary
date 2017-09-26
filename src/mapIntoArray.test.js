import expect from 'expect'

import Immutable from 'immutable'
import { add, map } from 'ramda'

import mapIntoArray from './mapIntoArray'

describe('mapIntoArray', () => {
  it('takes an immutable collection and a mapper and returns an array', () => {
    const oneTwoThree = [1, 2, 3]
    const addOne = add(1)
    const expected = map(addOne, oneTwoThree)
    const actual = mapIntoArray(Immutable.fromJS(oneTwoThree), addOne)
    expect(actual).toEqual(expected)
  })
})
