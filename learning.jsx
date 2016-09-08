import React from 'react';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      searching : 'i will find the solution'
    }
  }
  render() {
    return (
      <div>
        <Children f={this.props.find} color={this.props.color}/>
      </div>
      );
  }
}

class Children extends React.Component {
  render() {
    return (
      <div>
      <h2>{this.props.f}</h2>
      <h2>{this.props.color}</h2>
      </div>
    );
  }
}
export default Parent;
