#React es6, es7 pure component without purerender mixin

##example usage:

###es7
```js
import {Component} from 'react';
import PureComponent from 'react-pure-component';

@PureComponent
class History extends Component {
  render() {
    return (
      <div> Hello Pure World </div>
    );
  }
}

export default History;
```

###es6
```js
import {Component} from 'react';
import PureComponent from 'react-pure-component';

class History extends Component {
  render() {
    return (
      <div> Hello Pure World </div>
    );
  }
}

export default PureComponent(History);
```

###es5
```js
const React = require('react');
const PureComponent = require('react-pure-component');

const History = React.createClass({
  render() {
    return (
      <div> Hello Pure World </div>
    );
  }
})

module.exports = PureComponent(History);
```
