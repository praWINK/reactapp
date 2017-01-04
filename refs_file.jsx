import React from 'react';
import ReactDOM from 'react-dom';

class References extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: '',
         comeon: ''
      }

      this.comeon_friends = this.comeon_friends.bind(this);
      this.clearcomeInput = this.clearcomeInput.bind(this);
      this.updateState = this.updateState.bind(this);
      this.showInput = this.showInput.bind(this);

   };


   comeon_friends(e) {
      this.setState({comeon: e.target.value});
      ReactDOM.findDOMNode(this.refs.mycomeInput).focus();

   }

   clearcomeInput() {
      this.setState({comeon:""});
      ReactDOM.findDOMNode(this.refs.mycomeInput).focus();

   }
   updateState(e) {
      this.setState({dd: e.target.value});
   }

   showInput() {
      this.setState({data:this.refs.myInput.value});
   }

   focus_function() {
      ReactDOM.findDOMNode(this.refs.focus).style.background='red';
   }
   blur_function() {
      ReactDOM.findDOMNode(this.refs.blur).style.background='yellow';
   }
   onselect_function() {
      ReactDOM.findDOMNode(this.refs.onselect).style.color='blue';
   }
   apply_dragging() {
      var drag=document.getElementById("drag")
      ReactDOM.findDOMNode(drag).focus();
   }

   componentDidMount() {
      var focus=document.getElementById("first")
         ReactDOM.findDOMNode(focus).focus();
         ReactDOM.findDOMNode(focus).blur();
   }

   render() {
      return (
         <div>
            <h2>10.Creating form with by using MULTIPLE EVENTS IN refs_file.jsx </h2>
            <label>Firstname: </label>
            <input type='text' onInput={this.updateState} ref="myInput"></input>
            <button onClick = {this.showInput}>SHOW</button>
            <h4>Firstname:{this.state.data}</h4>
            <br/>
            <br/>
            <label>lastname: </label>
            <input value = {this.state.comeon} onChange ={this.comeon_friends} ref="mycomeInput"></input>
            <button onDoubleClick = {this.clearcomeInput}>2CLEAR</button>
            <h4>lastname:{this.state.comeon}</h4>
            <br/>
            <br/>
            Focus:  <input type ='text' onFocus={this.focus_function.bind(this)} ref="focus"></input>
            <br/>
            <br/>
            Blur:   <input type ='text' onBlur={this.blur_function.bind(this)} ref="blur"></input>
            <br/>
            <br/>
            Onselect:   <input type ='text' value="dhdfd" onSelect={this.onselect_function.bind(this)} ref="onselect"></input>
            <br/>
            <br/>
            <button draggable = "true" onDragEnd = {this.apply_dragging.bind(this)} >Dragging</button>
            <h2 id="drag">APPLY DRAGGING</h2>
            <input type ='text' id="first"></input>
         </div>
      );
   }
}

export default References;
