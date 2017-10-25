# React Elementary

React Elementary is a small library of helper functions for creating React
elements and handling props using plain JavaScript (no JSX).

[![Build Status](https://travis-ci.org/thirdhand/react-elementary.svg?branch=master)](https://travis-ci.org/thirdhand/react-elementary)

## Installation

```
npm install react-elementary
```

## Usage

### Importing

```javascript
import { createElement } from 'react-elementary';

createElement('div', 'Hello world!');

// or

import elementary from 'react-elementary';

elementary.createElement('div', 'Hello world!');

// or

import createElement from 'react-elementary/lib/createElement';

createElement('div', 'Hello world!');
```

### createElement

Use this function just like `React.createElement`, except that props are
optional. Also, the `innerHtml` prop is rewritten into
`dangerouslySetInnerHtml`. You can also create a custom `createElement` which
does other props mappings by using `mapElementPropsWith` from the
`react-elementary/lib/createElement` module (it's not exported from the index
module).

```javascript
import { createElement } from 'react-elementary';

import { OtherReactComponent } from './my-other-component';

function ReactComponent(props) {
  return createElement(
    'div',
    createElement(OtherReactComponent, props)
  );
}
```

### createFactory

Similar to `React.createFactory`. Creates a factory function for creating
multiple elements of the same type.

```javascript
import { createFactory } from 'react-elementary';

const div = createFactory('div');

function ReactComponent(props) {
  return div({ className: 'block' }, div('Hello world!'));
}
```

### createFactories

Takes an object of `ReactClass` or strings, and outputs an object of factory
functions.

```javascript
import { createFactories } from 'react-elementary';

import myReactComponents from './my-components'

const factories = createFactories(myReactComponents);

function ReactComponent(props) {
  return factories.myComponent(props, factories.myOtherComponent());
}
```

### elements

An object of common element factories, just like `React.DOM`.

```javascript
import { elements } from 'react-elementary';

const { div, em, h1, p } = elements;

function ReactComponent(props) {
  return div(
    h1('Headline'),
    p('Paragraph.'),
    p(em('Another'), ' paragraph')
  );
}
```

### mapIntoArray

This method is removed as of version 2.0.0

### mergeProps

Takes any number of objects, and merges them. The default function merges the
`className` property with the `classnames` module. You can also create a custom
merge function by using `createCustomMerge` from the
`react-elementary/lib/mergeProps` module.

```javascript
import { elements, mergeProps } from 'react-elementary';

const { div } = elements;

function ReactComponent(props) {
  // If the provided props are { className: 'foo', id: 'foo' }
  return div(mergeProps(props, { className: 'bar', id: 'bar' }));
  // then the returned element has the props { className: 'foo bar', id: 'bar' }
}
```

## Legal

Copyright © 2017 Reidar Djupvik

Licensed under the MIT license. See the `LICENSE` file for details.
