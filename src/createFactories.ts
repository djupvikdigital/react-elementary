/** @module react-elementary/lib/createFactories */

import { map } from 'ramda'
import { ReactType } from 'react'

import createFactory from './createFactory'

/**
 * Maps an object of React classes to an object of React element factories.
 * @function
 * @param  {object} classes - an object of React classes or strings
 * @return {object}           an object of React element factories
 */
export default function createFactories(obj: { [key: string]: ReactType }) {
  return map(createFactory, obj)
}
