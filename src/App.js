import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import Nav from './Components/Nav'
import LoggedNav from './Components/LoggedNav'
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
    isLogged: false,
    currentUser: {},
    currentGame: ""
  }

  doUpdateCurrentUser = user => {
    this.setState({
      isLogged: true,
      currentUser: {
        username: user.username
      }
    })
  }
  logout = () => {
    this.setState({
      isLogged: false,
      currentUser: {
        username: ""
      }
    })  
    console.log("logout from App")
  }
  render() {
    return (
      <>
        {
        // console.log(this.state.isLogged, "<-------------Applogged") 
        this.state.isLogged
        ? 
        <LoggedNav logout={this.logout}/> 
        : 
        <Nav /> 
        }
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
