import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './design.css'

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
    this.setStateHandler = this.update_state.bind(this);
    this.a=0

  }

  update_state() {
    var item = function(index){
      return index + 1;
    }
    var myArray = this.state.data;

    myArray.push(item(this.a))
    this.setState({data: myArray})
    this.a += 1;

  };
  render() {

    return (
      <div>
        <h3>1.UPDATE THE STATE VALUES USING SET STATE METHOD FROM ANOTHER FILE</h3>
        <button onClick = {this.setStateHandler}>SET STATE</button>
        <h4>State Array: {this.state.data}</h4>
        <h2 styleName='first'>{this.props.headerProp}</h2>
        <h2>{this.props.contentProp}</h2>
      </div>
      );
  }
}

Header.defaultProps = {
  headerProp :"Header from anotherfile(achieving external css with using defaultProps)...",
  contentProp :"Content from anotherfile(using defaultProps)..."
}
export default CSSModules(Header, styles);

// export default Header;
