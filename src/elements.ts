/** @module react-elementary/lib/elements */

import { mapObjIndexed } from 'ramda'
import DOM = require('react-dom-factories')

import createFactory from './createFactory'

/**
 * An object of common element factories, like React.DOM.
 * @type {object.<function>}
 */
export default mapObjIndexed(
  (value: <T>() => any, key: string) => createFactory(key),
  DOM,
)
