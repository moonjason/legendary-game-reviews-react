import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import Nav from './Components/Nav'
import LoggedNav from './Components/LoggedNav'
import GameContainer from "./Components/GamesContainer"
import GamesShow from "./Components/GamesShow"
import SearchedGamesContainer from "./Components/SearchedGamesContainer"
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
    currentGame: "",
    search: ""
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
  logout = async () => {
    try {
      const logoutUser = await (await fetch(`${process.env.REACT_APP_API_URL}/user/logout`, {
        method: "GET",
        credentials: "include"
      })).json()
      if(logoutUser.status.code === 202){
        this.setState({
          isLogged: false,
          currentUser: {
            id: "",
            username: ""
          }
        })
      }
      console.log(logoutUser)
    } catch(err) {
      console.log(err);
    }
  }
  setSearch = searchValue => {
    this.setState({
      search: searchValue
    })
  }
  render() {
    return (
      <>
        {
          this.state.isLogged
            ?
            <LoggedNav currentUser={this.state.currentUser} logout={this.logout} />
            :
            <Nav />
        }
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" render={() => <Login doUpdateCurrentUser={this.doUpdateCurrentUser} />}></Route>
          <Route exact path="/register" render={() => <Register doUpdateCurrentUser={this.doUpdateCurrentUser} />}></Route>
          <Route exact path="/games/" render={() => <GameContainer setSearch={this.setSearch}/>}></Route>
          <Route exact path="/games/:id" render={() => <GamesShow currentUser={this.state.currentUser}/>}></Route>
          <Route exact path={`/games/search/:query`} render={() => <SearchedGamesContainer search={this.state.search} setSearch={this.setSearch}/>}></Route>
          <Route component={My404} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
