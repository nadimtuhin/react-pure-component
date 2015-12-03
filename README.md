#React es6, es7 pure component without pure render mixin

#[React Mixins are on their way out](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#mixins)
> Unfortunately, we will not launch any mixin support for ES6 classes in React. That would defeat the purpose of only using idiomatic JavaScript concepts.
> There is no standard and universal way to define mixins in JavaScript. In fact, several features to support mixins were dropped from ES6 today. There are a lot of libraries with different semantics. We think that there should be one way of defining mixins that you can use for any JavaScript class. React just making another doesn’t help that effort.

#[Mixins are dead]( https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)
#[Composition to the rescue](https://github.com/facebook/react/issues/1380#issue-31121026)

###es7
```js
import {Component} from 'react';
import PureComponent from 'react-pure-component';

@PureComponent
class App extends Component {
  render() {
    return (
      <div> Hello Pure World </div>
    );
  }
}

export default App;
```

###es6
```js
import {Component} from 'react';
import PureComponent from 'react-pure-component';

class App extends Component {
  render() {
    return (
      <div> Hello Pure World </div>
    );
  }
}

export default PureComponent(App);
```

###es5
```js
const React = require('react');
const PureComponent = require('react-pure-component');

const App = React.createClass({
  render() {
    return (
      <div> Hello Pure World </div>
    );
  }
})

module.exports = PureComponent(App);
```
