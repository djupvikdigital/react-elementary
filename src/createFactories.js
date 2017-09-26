/** @module react-elementary/lib/createFactories */

import { map } from 'ramda'

import createFactory from './createFactory'

/**
 * Maps an object of React classes to an object of React element factories.
 * @function
 * @param  {object} classes - an object of React classes or strings
 * @return {object}           an object of React element factories
 */
export default map(createFactory)
