import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Navigation from './router_conceptfile.jsx'
import { Home, About } from './home.jsx';
import Backtoreact from './backtoreact.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path = "/" component = {Home}>
        <IndexRoute component = {Navigation} />
        <Route path = "backtoreact" component = {About} />
        <Route path = "home" component = {App} />
        <Route name="about" path = "about/:Id" component = {Backtoreact} />
        <Route path = "back" component = {App} />
      </Route>
  </Router>

), document.getElementById('app'))
{/*
render: function() {
  var children = React.Children.map(this.props.children, function (child) {
    return React.cloneElement(child, {
      foo: this.state.foo
    })
  })

  return <div>{children}</div>
}
*/}
