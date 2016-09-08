import React from 'react';
import ReactDOM from 'react-dom';
import Header from './anotherfile.jsx';
import Content from './separatefile.jsx';
import Propvalidation from './validationchecking.jsx';
import Condition from './conditionsfile.jsx';
import Force_update from './forceupdatefile.jsx';
import Componentlifecycle from './Componentlifecycle.jsx'
import Reference from './referencefile.jsx';
import Form from './formfile.jsx';
import Form_with_child from './form_with_childfile.jsx';
import References from './refs_file.jsx';
import Onclickfunction from './onclickfunction.jsx';
import Likebutton from './likebutton.jsx';
import Focus from './focus_in_out.jsx';
import Ref_Parent from './refkeywordfile.jsx';
import Mapping from './mapping_with_key.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import styles from './design.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      check : 'i am checking from App.jsx',
      data:
        [
          {
            "id":1,
            "name":"Foo",
            "age":"20"
          },

          {
            "id":2,
            "name":"Bar",
            "age":"30"
          },

          {
            "id":3,
            "name":"Baz",
            "age":"40"
          }
        ]
    }
  }

  render() {
    {//used for if condition
    }
    var i=1;

    var d= (value,value1) => value * value1
    console.log(d(10,10))

    var a=function(variable,variable1)
    {
      return variable * variable1;
    }
    console.log(a(5,2))
    console.log(this.props.children,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
    return (

      <div>

        <Checking checkingprop={this.state.check}/>
        <h3>**************************************************************************************</h3>
        <Header/>
        <h3>**************************************************************************************</h3>
        <Content/>
        <h3>**************************************************************************************</h3>
        <Propvalidation/>
        <h3>**************************************************************************************</h3>
        <Condition/>
        <h3>**************************************************************************************</h3>
        <h2>5.Achieving mapping functionality in App.jsx</h2>
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} dat = {person}  />)}
          </tbody>
        </table>
        <h3>**************************************************************************************</h3>
        <Force_update/>
        <h3>**************************************************************************************</h3>
        <Componentlifecycle/>
        <h3>**************************************************************************************</h3>
        <Reference/>
        <h3>**************************************************************************************</h3>
        <Form/>
        <h3>**************************************************************************************</h3>
        <Form_with_child/>
        <h3>**************************************************************************************</h3>
        <References/>
        <h3>**************************************************************************************</h3>
        <Onclickfunction/>
        <h3>**************************************************************************************</h3>
        <Likebutton/>
        <h3>**************************************************************************************</h3>
        <Focus/>
        <h3>**************************************************************************************</h3>
        <Ref_Parent/>
        <h3>**************************************************************************************</h3>
        <Mapping/>
        <h3>**************************************************************************************</h3>
        <li><Link to="about" params={{Id: "1"}}>About</Link></li>
      </div>
    );
  }
}

App.defaultProps= {

  text: 'Loading'

  }

class TableRow extends React.Component {
  render() {
    return (
        <tr>
          <td>{this.props.dat.id}</td>
          <td>{this.props.dat.name}</td>
          <td>{this.props.dat.age}</td>
        </tr>
    );
  }
}

class Checking extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.checkingprop}</h2>
      </div>
      );
  }
}



export default App;



//
// export default App;


// <div>
//         <h1>Header</h1>
//         {/*End of the line Comment

//         */}
//         <h2>Content</h2>
//         <p>This is the content!!!</p>
//         <h1>{1+1}</h1>
//         <h1>{i==1 ? 'true' : 'false'} </h1>
//       </div>


// {this.state.data.map(function(person)  {
            //   return (
            //     <TableRow dat = {person} />
            //   );
            // })
          // }
