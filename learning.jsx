import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './design.css'


class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      data : 'i find the solution with applying external css'
    }
  }
  render() {
    return (
      <div>
        <h2 styleName='second'>{this.state.data}</h2>
        <Children find={this.props.find} color={this.props.color}/>
      </div>
      );
  }
}

class Children extends React.Component {
  render() {
    return (
      <div>
      <h2>{this.props.find}</h2>
      <h2>{this.props.color}</h2>
      <h2>{this.props.data}</h2>
      </div>
    );
  }
}

// export default Children;
// export default CSSModules(Children,styles);
export default CSSModules(Parent,styles);


