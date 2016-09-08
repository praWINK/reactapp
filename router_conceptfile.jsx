import React from 'react';
import {Link} from 'react-router';


class Navigation extends React.Component {
   render() {
      return (
         <div>
            <li><Link to="home">Home</Link></li>
         </div>
      )
   }
}

export default Navigation;


