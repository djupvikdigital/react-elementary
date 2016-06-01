/** @module */

import { into, map } from 'ramda';

/**
 * A function that maps an iterable into an array.
 * @param  {iterable}   collection - the collection to be mapped over
 * @param  {Function}   fn         - a mapper function
 * @return {Array}
 */
export default (collection, fn) => into([], map(fn), collection);
