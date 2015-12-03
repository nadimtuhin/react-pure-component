#React es6, es7 pure component without purerender mixin

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
