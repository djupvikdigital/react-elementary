/** @module react-elementary/lib/createElement */

import React, { isValidElement } from 'react'

import propsMapper from './propsMapper'

const isNode = input =>
  typeof input == 'string' || Array.isArray(input) || isValidElement(input)

/**
 * Takes a mapper function and returns a closure which creates React elements
 * mapping the provided props with the mapper function.
 * @param  {function} mapper takes a props object and returns a mapped object
 * @return {function}        createElement with props mapper
 */
export function mapElementPropsWith(mapper) {
  return function createElement(type) {
    const propsOrNode = arguments[1]
    let props = {}
    let nodeIndex = 2
    if (isNode(propsOrNode)) {
      nodeIndex = 1
    } else if (propsOrNode != null) {
      props = mapper(propsOrNode)
    }
    const nodes = Array.prototype.slice.call(arguments, nodeIndex)
    return React.createElement(type, props, ...nodes)
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
