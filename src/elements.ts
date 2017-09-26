/** @module react-elementary/lib/elements */

import mapObjIndexed from 'ramda/src/mapObjIndexed'
import DOM from 'react-dom-factories'

import createFactory from './createFactory'

/**
 * An object of common element factories, like React.DOM.
 * @type {object.<function>}
 */
export default mapObjIndexed((value: Function, key: string) => createFactory(key), DOM)
