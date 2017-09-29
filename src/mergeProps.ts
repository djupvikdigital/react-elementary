/** @module react-elementary/lib/mergeProps */

import classNames = require('classnames')
import {
  apply,
  evolve,
  map,
  mapObjIndexed,
  merge,
  mergeAll,
  nth,
  pickBy,
  pipe,
  pluck,
  prop,
  unapply,
} from 'ramda'

export interface IReducers {
  [key: string]: (...args: any[]) => any
}

function isNotUndefined(x: any) {
  return typeof x !== 'undefined'
}

const pickNonEmptyArrays = pickBy(prop('length'))

/**
 * Takes a map of reducer function and returns a merge function.
 * @param  {object.<function>} reducers - a map of keys to functions
 * @return {function}                   - merges the props of a number of
 *                                        objects
 */
export function createCustomMerge(reducers: IReducers) {
  return function mergeProps(...objs: object[]) {
    const merged = mergeAll(objs)
    const plucked = mapObjIndexed(
      pipe(unapply(nth(1)), key => pluck(key, objs).filter(isNotUndefined)),
      reducers,
    )
    const evolved = evolve(
      map(apply, reducers),
      pickNonEmptyArrays(plucked),
    )
    return merge(merged, evolved)
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
