/** @module react-elementary/lib/createFactory */

import createElement from './createElement'

/**
 * A function that binds a number of arguments to createElement.
 * @param  {*} ...args - the arguments to bind
 * @return {function}    a createElement function with bound arguments
 */
export default function createFactory(...args) {
  return createElement.bind(null, ...args)
}
