/** @module react-elementary/lib/elements */

import { mapObjIndexed, nth, pipe, unapply } from 'ramda'
import DOM = require('react-dom-factories')

import createFactory from './createFactory'

/**
 * An object of common element factories, like React.DOM.
 * @type {object.<function>}
 */
export default mapObjIndexed(
  pipe(unapply(nth(1)), createFactory),
  DOM,
)
