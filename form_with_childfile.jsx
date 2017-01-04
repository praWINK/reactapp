import React from 'react';

class Form_with_child extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: ''
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState(e) {
      this.setState({data: e.target.value});
      // alert("dfdddddfdfd");
   }

   render() {
      return (
         <div>
            <Child myDataProp = {this.state.data}
               updateStateProp = {this.updateState}></Child>
         </div>
      );
   }
}

class Child extends React.Component {

   render() {
      return (
         <div>
            <h2>9.Accessing onChange event by Accessing parent property from Child in Form_with_child.jsx file</h2>
            <input type = "text" value = {this.props.myDataProp}
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}
export default Form_with_child;
