import classNames from 'classnames/dedupe';
import { mergeWithKey } from 'ramda';

function customizeMerges(reducers) {
  return function mergeCustomizer(key, ...values) {
    const reducer = reducers[key];
    if (typeof reducer === 'function') {
      return reducer(...values);
    }
    return values[values.length - 1];
  };
}

export function createCustomMerge(reducers) {
  const mergeCustomizer = customizeMerges(reducers);
  return function mergeProps(...objs) {
    return objs.reduce(mergeWithKey(mergeCustomizer));
  };
}

export default createCustomMerge({ className: classNames });
