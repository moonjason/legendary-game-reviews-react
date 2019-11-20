import React, { Component } from 'react'
import GamesList from "../GamesList"
import ListPages from "../ListPages"
import { withRouter } from "react-router-dom"

class GameContainer extends Component{
  state = {
    games: []
  }
  componentDidMount(){
    this.getGames()
  }
  getGames = async () => {
      try {
        console.log(this.props.history.location.pathname, "this pathname")
        const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1${this.props.history.location.pathname}`, {
          method: "get",
          credentials: "include",
      })).json()
      this.setState({
        games: gameResponse.results
      })
      console.log(gameResponse.results);
      } catch(err) {
          console.log(err)
      }
  }

  render(){
    return(
      <div>
        <GamesList games={this.state.games}/>
        <ListPages getGames={this.getGames}/>
      </div>
    )
  }
}

export default withRouter(GameContainer)