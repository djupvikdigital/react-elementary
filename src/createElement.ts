/** @module react-elementary/lib/createElement */

import {
  createElement as reactCreateElement,
  isValidElement,
  ReactElement,
  ReactNode,
  ReactType,
} from 'react'

import propsMapper, { PropsMapper } from './propsMapper'

export type PropsOrNode = ReactNode | object

const isNode = (input: ReactNode): input is ReactNode =>
  input == null ||
  typeof input === 'string' ||
  typeof input === 'number' ||
  Array.isArray(input) ||
  isValidElement(input)

/**
 * Takes a mapper function and returns a closure which creates React elements
 * mapping the provided props with the mapper function.
 * @param  {function} mapper takes a props object and returns a mapped object
 * @return {function}        createElement with props mapper
 */
export function mapElementPropsWith(mapper: PropsMapper) {
  return function createElement(
    type: ReactType,
    propsOrNode: PropsOrNode,
    ...args: ReactNode[],
  ): ReactElement<any> {
    let props = {}
    let nodes = [propsOrNode, ...args]
    if (!isNode(propsOrNode)) {
      if (propsOrNode != null) {
        props = mapper(propsOrNode)
      }
      nodes = args
    }
    return reactCreateElement(type, props, ...nodes)
  }
}

/**
 * Creates React elements, and maps props with the  default mapper from the
 * propsMapper module.
 * @function
 * @param  {(string|ReactClass)} type of React element to create
 * @param  {object} [props={}] - element props
 * @param  {...(string|ReactElement|Array.<(string|ReactElement)>)} nodes
 * @return {ReactElement} - the created React element
 */
export default mapElementPropsWith(propsMapper)
