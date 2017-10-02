/** @module react-elementary */

import { createElement } from './createElement'
import createFactories from './createFactories'
import createFactory from './createFactory'
import elements from './elements'
import { mergeProps } from './mergeProps'

export { createElement, createFactories, createFactory, elements, mergeProps }

/**
 * The commonly used modules in one object.
 * @type object
 * @property createElement   {function}
 *           [createElement]{@link module:react-elementary/createElement}
 * @property createFactories {function}
 *           [createFactories]{@link module:react-elementary/createFactories}
 * @property createFactory   {function}
 *           [createFactory]{@link module:react-elementary/createFactory}
 * @property elements        {object.<function>}
 *           [elements]{@link module:react-elementary/elements}
 * @property mapIntoArray    {function}
 *           [mapIntoArray]{@link module:react-elementary/mapIntoArray}
 * @property mergeProps      {function}
 *           [mergeProps]{@link module:react-elementary/mergeProps}
 */
export default {
  createElement,
  createFactories,
  createFactory,
  elements,
  mergeProps,
}
