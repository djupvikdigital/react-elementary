import { into, map } from 'ramda';

export default (collection, fn) => into([], map(fn), collection);
