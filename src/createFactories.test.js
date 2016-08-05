/* eslint import/no-extraneous-dependencies: [2, { "devDependencies": true }] */

import expect from 'expect';

import { call, map } from 'ramda';
import React from 'react';

import createFactories from './createFactories';

describe('createFactories', () => {
  it(
    `takes an object of ReactClasses/strings and returns an object of element
      factories`,
    () => {
      const expected = {
        div: React.createFactory('div')(),
        span: React.createFactory('span')(),
      };
      const actual = map(call, createFactories({
        div: 'div',
        span: 'span',
      }));
      expect(actual).toEqual(expected);
    }
  );
});
