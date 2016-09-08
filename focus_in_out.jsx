import React from 'react';
import ReactDOM from 'react-dom';
class Focus extends React.Component {
  constructor() {
    super();
    this.state = {
      focus : true
    }
  };

   focusin() {
    this.setState({focus: !this.state.focus})
    console.log({focus: !this.state.focus})
    console.log(this.state.focus)
    var a = this.state.focus;
    if (a== true){
      console.log("true");
      ReactDOM.findDOMNode(this.refs.myInput).focus();
    }else{
      console.log("falseeeeee")
      ReactDOM.findDOMNode(this.refs.myInput).blur();
    }
   }


  render() {
    const text = this.state.focus ? 'FOCUSIN' : 'FOCUSOUT';
    return (
      <div>
      <h2>13.Import focus and blur events in focus_in_out.jsx file</h2>
      <input ref="myInput"></input>
      <button onClick = {this.focusin.bind(this)}>{text}</button>
      {/*<button onClick = {this.focusout.bind(this)}>FOCUSOUT</button>
    */}
      </div>
      );
  }
}
{/*
handleClick() {
    this.setState({liked: !this.state.liked});
    console.log(this.state.liked)
  }
  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <div onClick={this.handleClick}>
        You {text} this. click to change.
      </div>
    );
  }
}
*/}

export default Focus;
