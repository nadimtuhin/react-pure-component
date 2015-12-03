import shallowCompare from "react-addons-shallow-compare";
import React, {Component} from "react";

export default function (DecoratedComponent) {
    return class PureComponent extends Component {
      /**
       * Tells if a component should update given it's next props
       * and state.
       *
       * @param nextProps Next props.
       * @param nextState Next state.
       */
      shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
      }

      render() {
        return <DecoratedComponent {...this.props} {...this.state} />;
      }
    }
}
