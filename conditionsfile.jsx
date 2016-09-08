import React from 'react';
import styles from './design.css'


class Condition extends React.Component {
  constructor(){
    super();
    this.state={
      color : 'red'
    }

  }

  render() {
    {//checking expression
    }
    var i=1;
    var module={}
    var exports=module.exports={}

    module.exports.hello = "Bonjour"
    console.log(module.exports)
    console.log(exports)
    exports = null;
    console.log(module.exports)
    console.log(exports)



    {//using inline css
    }
    var mychecking={
      color:'green',
      fontSize : 30
    };
    var conditional={
      color:'red',
      fontSize : 30
    };


    {//using if condition
    }
    var check;
    if(i==1)
      check= <p className={styles.second}> if condition is sucessful</p>
    else
      check = <p> condition is false</p>

    return (
      <div>

        <h2>4.EXECUTING CONDITIONAL STATEMENTS FROM CONDITIONS FILE</h2>
        {//achieving conditional expression
        }
        <div style={conditional}>{i==1 ? 'ternary operation with inline css':'false'} </div>
        <g style={mychecking}>achieving inline css</g>


        {//achieving if condition
        }
        {check}


        {//achieving switch case
        }
        <p>
        {(() => {
        switch (this.state.color) {
          case "red":   return <p> switch case</p>;
          case "green": return "#00FF00";
          case "blue":  return "#0000FF";
          default:      return "#FFFFFF";
        }
       })()}
        </p>

       </div>

    );
  }
}
export default Condition;
