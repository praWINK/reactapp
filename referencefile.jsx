import React from 'react';

class Reference extends React.Component {
  render() {
    return (
      <div>
        <Reference_child ref="check"/>
        <button onClick = {() => this.refs.check.vinoth()}>reference</button>
      </div>
    );
  }
}

class Reference_child extends React.Component {
  vinoth()
  {
    alert('accessing reference method');
  }
  render() {
    return (
      <div>
      <h2>7.Accessing  child methods from parent  by using ref keyword in Referencefile.jsx</h2>
      </div>
    );
  }
}
export default Reference;
