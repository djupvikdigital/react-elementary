import createElement from 'createElement';

export default function createFactory(...args) {
  return createElement.bind(null, ...args);
}
