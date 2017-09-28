import expect = require('expect')

import propsMapper from './propsMapper'

describe('propsMapper', () => {
  it('changes innerHtml prop to dangerouslySetInnerHTML', () => {
    const expected = { dangerouslySetInnerHTML: { __html: '<p>Test</p>' } }
    const actual = propsMapper({ innerHtml: '<p>Test</p>' })
    expect(actual).toEqual(expected)
  })

  it('does not insert dangerouslySetInnerHTML if innerHtml is undefined', () => {
    const expected = { foo: 'bar' }
    const actual = propsMapper({ foo: 'bar' })
    expect(actual).toEqual(expected)
  })
})
