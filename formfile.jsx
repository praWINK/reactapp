import React from 'react';
import Learning from './object_learning.jsx'

class Form extends React.Component {

   constructor() {
      super();

      this.state = {
         data: ''
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(g) {

      this.setState({data: g.target.value});
   }

   render() {
      return (
         <div>
            <h2>8.Using onChange event to trigger for every single letter changed in formfile.jsx</h2>
            <Learning click={this.updateState} content={this.state.data}/>

         </div>
      );
   }
}

export default Form;
