/** @module react-elementary/lib/elements */

import { mapObjIndexed } from 'ramda';
import { DOM } from 'react';

import createFactory from './createFactory';

/**
 * An object of common element factories, like React.DOM.
 * @type {object.<function>}
 */
export default mapObjIndexed((value, key) => createFactory(key), DOM);
