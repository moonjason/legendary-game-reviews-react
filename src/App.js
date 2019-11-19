import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom' 

import Home from './Components/Home'
import Login from './Components/Login'

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login}/>
    </Switch>
  );
}

export default App;
