import expect from 'expect';

import transformProps from './transformProps';

describe('transformProps', () => {
  it('changes innerHtml prop to dangerouslySetInnerHtml', () => {
    const expected = { dangerouslySetInnerHtml: { __html: '<p>Test</p>'}};
    const actual = transformProps({ innerHtml: '<p>Test</p>' });
    expect(actual).toEqual(expected);
  });
});
