/** @module react-elementary/lib/mapIntoArray */

import into from 'ramda/src/into'
import map from 'ramda/src/map'

/**
 * A function that maps an iterable into an array.
 * @param  {iterable}   collection - the collection to be mapped over
 * @param  {Function}   fn         - a mapper function
 * @return {Array}
 * @deprecated since version 1.1; will be removed in later release
 */
export default (collection, fn) => into([], map(fn), collection)
