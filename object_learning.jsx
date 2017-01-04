import React from 'react';

class Learning extends React.Component {

   render() {

      return (
         <div>
            <h2>8.1 Accessing one parent's method to another parent via using object with it's property</h2>
            Input:  <input type="text" value={this.props.content} onChange={this.props.update}></input>
            <h3>{this.props.content}</h3>
            <Learning_child text={this.props.content}/>
         </div>
      );
   }
}


class Learning_child extends React.Component{
   render() {
      return (
         <div>
         <h1>{this.props.text}</h1>
         </div>
      )
   }
}
export default Learning;
