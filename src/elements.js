import { mapObjIndexed } from 'ramda';
import { DOM } from 'react';

import createFactory from './createFactory';

export default mapObjIndexed((value, key) => createFactory(key), DOM);
