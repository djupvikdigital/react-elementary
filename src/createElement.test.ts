import expect = require('expect')

import { map, toUpper } from 'ramda'
import { createElement as reactCreateElement } from 'react'
import { configure, shallow } from 'enzyme'
import Adapter = require('enzyme-adapter-react-16')

import createElement, { mapElementPropsWith } from './createElement'

configure({ adapter: new Adapter() })

describe('createElement', () => {
  it('supports omitting props', () => {
    const expected = reactCreateElement(
      'div',
      {},
      reactCreateElement('span', {}, 't'),
      'est',
    )
    const actual = createElement('div', createElement('span', 't'), 'est')
    expect(actual).toEqual(expected)
  })

  it('handles undefined props properly', () => {
    const expected = reactCreateElement('div', undefined)
    const actual = createElement('div', undefined)
    expect(actual).toEqual(expected)
  })

  it('lets the innerHtml prop insert unescaped HTML into the element', () => {
    const expected = '<div><strong>Dangerous</strong> HTML!</div>'
    const actual = shallow(
      createElement('div', { innerHtml: '<strong>Dangerous</strong> HTML!' }),
    ).html()
    expect(actual).toBe(expected)
  })
})

describe('mapElementPropsWith', () => {
  it('takes a props mapper, and returns a createElement function', () => {
    const fn = mapElementPropsWith(map(toUpper))
    const expected = reactCreateElement('div', { className: 'BAR', id: 'FOO' })
    const actual = fn('div', { className: 'bar', id: 'foo' })
    expect(actual).toEqual(expected)
  })
})
