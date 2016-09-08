import React from 'react';

class Componentlifecycle extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this)
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1 })
   }




   render() {
      return (
         <div>
            <h2>6.Executing component life cycle in Componentlifecycle.jsx file</h2>
            <h4>{this.props.data}</h4>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Componentlifecycle_child myNumber = {this.state.data}></Componentlifecycle_child>

         </div>
      );
   }
}

class Componentlifecycle_child extends React.Component {

   componentWillMount() {
      //alert('Component WILL MOUNT!');
   }

   componentDidMount() {
      //alert('Component DID MOUNT!');
   }

   componentWillReceiveProps() {
      //alert("will receive props");
      //console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
       //alert("should component update");
      return true;
   }


   componentWillUpdate(nextProps, nextState) {
      //alert('Component WILL UPDATE!');
   }

   componentDidUpdate(nextProps, nextState) {
      //alert('Component did UPDATE!');
   }

   componentWillUnmount() {
      //alert('Component WILL UNMOUNT!')
   }

   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default Componentlifecycle;
