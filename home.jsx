import React from 'react';
import {Link} from 'react-router';

export class Home extends React.Component {
   render() {
    console.log(this.props.children,'dddddddddddddddddddddddddddddddddddddddd')
      return (
         <div>

            {this.props.children}
         </div>
      )
   }
}


export class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
            <li><Link to="back">Back</Link></li>

         </div>
      )
   }
}


