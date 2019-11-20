import React, { Component } from 'react'
import GamesList from "../GamesList"
import ListPages from "../ListPages"

class GameContainer extends Component{
  state = {
    games: []
  }
  componentDidMount(){
    this.getGames()
  }
  getGames = async () => {
      try {
        const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1/games/${this.props.page}`, {
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
        <ListPages changePage={this.props.changePage} />
      </div>
    )
  }
}

export default GameContainer