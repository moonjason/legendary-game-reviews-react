import React, { Component } from 'react'
import GamesList from "../GamesList"
import { withRouter } from "react-router-dom"

import { css } from '@emotion/core';
import BarLoader from 'react-spinners/BarLoader';

const override = css`
    display: block;
    margin: 15% auto;
`;


class GameContainer extends Component{
  state = {
    games: [],
    page: 2,
    loading: true,
  }
  componentDidMount(){
    this.getGames()
  }
  getGames = async () => {
      try {
      const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1/games/1`, {
        method: "get",
        credentials: "include",
    })).json()
      this.setState({
        games: gameResponse.results,
        loading: false,
      })
      console.log(gameResponse.results);
      } catch(err) {
          console.log(err)
      }
  }
  loadGames = async () => {
    try {
      this.setState(prevState => ({
        page: prevState.page + 1
      }))
      console.log(this.state.page)
      const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1/games/${this.state.page}`, {
        method: "get",
        credentials: "include",
    })).json()
      this.setState({
        games: [...this.state.games, ...gameResponse.results]
      })
      console.log(gameResponse.results);
      } catch(err) {
          console.log(err)
      }
  }
  render(){
    return(
      <div>
        {console.log(this.state.games)}
        {this.state.loading 
          ? <BarLoader
              css={override}
              sizeUnit={"px"}
              size={150}
              color={'#7a7a7a'}
              loading={this.state.loading}
            />
          : <GamesList games={this.state.games} loadGames={this.loadGames}/>
        }
        {/* <GamesList games={this.state.games} loadGames={this.loadGames}/> */}
        <button onClick={this.loadGames}>Load more</button>
      </div>
    )
  }
}

export default withRouter(GameContainer)