import expect = require('expect')

import { call, map } from 'ramda'
import { createFactory } from 'react'

import createFactories from './createFactories'

describe('createFactories', () => {
  it(`takes an object of ReactClasses/strings and returns an object of element
      factories`, () => {
    const expected = {
      div: createFactory('div')(),
      span: createFactory('span')(),
    }
    const actual = map(
      call,
      createFactories({
        div: 'div',
        span: 'span',
      }),
    )
    expect(actual).toEqual(expected)
  })
})
