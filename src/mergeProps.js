import classNames from 'classnames/dedupe';
import { mergeWithKey } from 'ramda';

const specialMerges = {
  className: classNames,
};

function mergeCustomizer(key, ...values) {
  if (typeof specialMerges[key] === 'function') {
    return specialMerges[key].apply(this, values);
  }
  return values[values.length - 1];
}

export default mergeWithKey(mergeCustomizer);
