#React es6, es7 pure component without purerender mixin

##example usage:

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
