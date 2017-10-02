/** @module react-elementary/lib/createFactory */

import { ReactNode, ReactType } from 'react'

import createElement, { PropsOrNode } from './createElement'

/**
 * A function that binds createElement with a ReactType.
 * @param  {ReactType} type - the component type
 * @return {function}         a createElement function with bound type
 */
export default function createFactory(type: ReactType) {
  return (propsOrNode: PropsOrNode, ...args: ReactNode[]) =>
    createElement(type, propsOrNode, ...args)
}
