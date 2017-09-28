/** @module react-elementary/lib/createElement */

import {
  ComponentClass,
  createElement as reactCreateElement,
  isValidElement,
} from 'react'

import propsMapper from './propsMapper'

const isNode = (input: string | any[] | ComponentClass) =>
  typeof input === 'string' || Array.isArray(input) || isValidElement(input)

/**
 * Takes a mapper function and returns a closure which creates React elements
 * mapping the provided props with the mapper function.
 * @param  {function} mapper takes a props object and returns a mapped object
 * @return {function}        createElement with props mapper
 */
export function mapElementPropsWith(mapper: Function) {
  return function createElement(type: string | ComponentClass, ...args: any[]) {
    const propsOrNode = args[0]
    let props = {}
    let nodes = args
    if (!isNode(propsOrNode)) {
      if (propsOrNode != null) {
        props = mapper(propsOrNode)
      }
      nodes = args.slice(1)
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
