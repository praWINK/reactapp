import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './design.css';


class Force_update extends Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
      this.apply_external = this.apply_external.bind(this);

   };
   findDomNodeHandler() {


      {/*console.log(ReactDOM.findDOMNode(mydiv).style)
      console.log("ggggggggggggg")
      console.log(ReactDOM.findDOMNode(mydiv));
   */}
   }
   forceUpdateHandler() {
      this.forceUpdate();
   };

   apply_external(){
      var mydiv = document.getElementById('myelement')
         ReactDOM.findDOMNode(mydiv).style.color='red';
         ReactDOM.findDOMNode(mydiv).style.fontSize='100px';

   }

   render() {
      return (
         <div>
            <h2>6.Force update event with findDOMNode concept in forceUpdatefile.jsx</h2>
            <button onClickCapture = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4 >Random number: {Math.random()}</h4>
            <button onClick = {this.apply_external}>FIND DOME NODE</button>
            <h2 id="myelement">FORCE UPDATE CHECKING</h2>
         </div>
      );
   }
}

export default Force_update;
