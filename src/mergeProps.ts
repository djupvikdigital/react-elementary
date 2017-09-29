/** @module react-elementary/lib/mergeProps */

import classNames = require('classnames')
import {
  append,
  apply,
  converge,
  evolve,
  filter,
  identity,
  map,
  merge,
  mergeAll,
  partial,
  partialRight,
  pickBy,
  pipe,
  pluck,
  prop,
  zipObj,
} from 'ramda'

export interface IReducers {
  [key: string]: (...args: any[]) => any
}

function isNotUndefined(x: any) {
  return typeof x !== 'undefined'
}

const convergeZip = partial(converge, [zipObj])
const mapKeys = pipe(map, partialRight(append, [[identity]]), convergeZip)

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
    const keys = Object.keys(reducers)
    const plucked = mapKeys(
      pipe(partialRight(pluck, [objs]), filter(isNotUndefined)),
    )(keys)
    const evolved = evolve(map(apply, reducers), pickNonEmptyArrays(plucked))
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
