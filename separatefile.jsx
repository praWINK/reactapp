import React from 'react';
import Parent from './learning.jsx';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      finding : 'i am finding',
      color : 'red'
    }
  }
  render() {
    return (
      <div>
        <h2>2.Accessing Parent property from learning.jsx file in separatefile.jsx</h2>
        <Parent find={this.state.finding} color={this.state.color} />
      </div>
      );
  }
}

export default Content;
