import expect from 'expect';

import propsMapper from './propsMapper';

describe('propsMapper', () => {
  it('changes innerHtml prop to dangerouslySetInnerHtml', () => {
    const expected = { dangerouslySetInnerHtml: { __html: '<p>Test</p>'}};
    const actual = propsMapper({ innerHtml: '<p>Test</p>' });
    expect(actual).toEqual(expected);
  });
});
