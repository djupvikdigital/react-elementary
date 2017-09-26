/** @module react-elementary/lib/mergeProps */

import classNames from 'classnames/dedupe'
import { mergeWithKey } from 'ramda'

function customizeMerges(reducers) {
  return function mergeCustomizer(key, ...values) {
    const reducer = reducers[key]
    if (typeof reducer === 'function') {
      return reducer(...values)
    }
    return values[values.length - 1]
  }
}

/**
 * Takes a map of reducer function and returns a merge function.
 * @param  {object.<function>} reducers - a map of keys to functions
 * @return {function}                   - merges the props of a number of
 *                                        objects
 */
export function createCustomMerge(reducers) {
  const mergeCustomizer = customizeMerges(reducers)
  return function mergeProps(...objs) {
    return objs.reduce(mergeWithKey(mergeCustomizer))
  }
}

/**
 * Merges a number of objects, applying the classnames library to the className
 * prop.
 * @function
 * @param  {...object} objs - the objects to be merged
 * @return {object}         - the result of the merge
 */
export default createCustomMerge({ className: classNames })
