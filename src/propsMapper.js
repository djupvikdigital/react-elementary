import { assoc, has, lens, omit, over, pipe, prop, when } from 'ramda';

export default when(
  has('innerHtml'),
  over(
    lens(
      prop('innerHtml'),
      pipe(assoc('dangerouslySetInnerHtml'), omit('innerHtml'))
    ),
    value => ({ __html: value })
  )
);
