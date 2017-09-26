/** @module react-elementary/lib/propsMapper */

import assoc from 'ramda/src/assoc'
import has from 'ramda/src/has'
import lens from 'ramda/src/lens'
import omit from 'ramda/src/omit'
import over from 'ramda/src/over'
import pipe from 'ramda/src/pipe'
import prop from 'ramda/src/prop'
import when from 'ramda/src/when'

/**
 * Default props mapper, mapping the custom innerHtml prop to the React prop
 * dangerouslySetInnerHtml.
 * @function
 * @param    {object} props - the props to be mapped
 * @return   {object}         the mapped props object
 */
export default when(
  has('innerHtml'),
  over(
    lens(
      prop('innerHtml'),
      pipe(assoc('dangerouslySetInnerHTML'), omit('innerHtml')),
    ),
    value => ({ __html: value }),
  ),
)
