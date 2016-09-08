import React from 'react';

class Onclickfunction extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState() {
      this.setState({data: 'Data updated from the child component...'})
   }

   render() {
      return (
         <div>
            <Content myDataProp = {this.state.data}
               updateStateProp = {this.updateState}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   render() {
      return (
         <div>
            <h2>11.Import onclick event in Onclickfunctionfile.jsx</h2>
            <button onClick = {this.props.updateStateProp}>CLICK</button>
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

export default Onclickfunction;
