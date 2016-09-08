import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <div>
      <h2>12.Import TOGGLE concept in likebutton.jsx file</h2>
      <div onClick={this.handleClick}>
        You {text} this. click to change.
      </div>
      </div>
    );
  }
}

export default LikeButton;
