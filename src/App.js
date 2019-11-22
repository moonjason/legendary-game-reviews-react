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

  componentDidMount() {
    const user = localStorage.getItem('user')
    if (user) {
      const currentUser = JSON.parse(user)
      this.setState({
        currentUser,
        isLogged: true
      })
    }
  }

  doUpdateCurrentUser = user => {
    this.setState({
      isLogged: true,
      currentUser: {
        id: user.id,
        username: user.username
      }
    })
  }
  logout = () => {
    const user = localStorage.removeItem("user")
    this.setState({
      isLogged: false,
      currentUser: {
        id: "",
        username: ""
      }
    })
    console.log("logout from App")
  }
  render() {
    return (
      <>
        {
          this.state.isLogged
            ?
            <LoggedNav logout={this.logout} />
            :
            <Nav />
        }
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" render={() => <Login doUpdateCurrentUser={this.doUpdateCurrentUser} />}></Route>
          <Route exact path="/register" render={() => <Register doUpdateCurrentUser={this.doUpdateCurrentUser} />}></Route>
          {/* <Route exact path={`${this.props.history.location.pathname}`} render={() => <GameContainer/>}></Route> */}
          <Route exact path="/games" render={() => <GameContainer />}></Route>
          <Route exact path="/games/:id" render={() => <GamesShow currentUser={this.state.currentUser} />}></Route>
          <Route component={My404} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
