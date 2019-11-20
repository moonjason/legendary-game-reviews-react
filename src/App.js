import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import Nav from './Components/Nav'
import GameContainer from "./Components/GamesContainer"
import GamesShow from "./Components/GamesShow"
import { withRouter } from 'react-router-dom'

import './App.css';

const My404 = () => {
  return (
    <div>
      Error 404. You are Lost! 
    </div>
  )
}

class App extends Component {
  state = {
    currentUser: {},
    currentGame: ""
  }

  doUpdateCurrentUser = user => {
    this.setState({
      currentUser: {
        username: user.username
      }
    })
  }
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" render={() => <Login doUpdateCurrentUser={this.doUpdateCurrentUser}/>}></Route>
          <Route exact path="/register" render={() => <Register doUpdateCurrentUser={this.doUpdateCurrentUser}/>}></Route>
          {/* <Route exact path={`${this.props.history.location.pathname}`} render={() => <GameContainer/>}></Route> */}
          <Route exact path="/games" render={() => <GameContainer/>}></Route>
          <Route exact path="/games/:id" render={() => <GamesShow/>}></Route>
          <Route component={My404} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
