import React, { Component } from 'react'
import GamesList from "../GamesList"
import Loading from "../Loading"
import FilterGames from "../FilterGames"
import { withRouter } from "react-router-dom"
import { 
  Container1,
  SearchForm,
  SearchDiv,
  SearchBar, 
  MagnifyingGlass
} from "./style"
import { css } from "@emotion/core"
import BarLoader from "react-spinners/BarLoader"
const override = css`
    display: block;
    margin: 15% auto;
`;
class GameContainer extends Component{
  state = {
    games: [],
    search: "",
    page: 1,
    loading: false,
    initialLoading: true,
    filter: ""
  }
  componentDidMount(){
    this.getGames()
    window.addEventListener('scroll', this.atBottom)
  }
  getGames = async () => {
      try {
      const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1/games/1`, {
        method: "get",
        credentials: "include",
    })).json()
      this.setState({
        games: gameResponse.results,
        initialLoading: false
      })
      console.log(gameResponse.results);
      } catch(err) {
          console.log(err)
      }
  }
  loadMoreGames = async () => {
    if(this.state.loading) {
      return;
    }
    try {
      this.setState(prevState => ({
        loading: true
      }))
      const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1/games/${this.state.page}`, {
        method: "get",
        credentials: "include",
    })).json()
      this.setState({
        games: [...this.state.games, ...gameResponse.results],
        loading: false
      })
      console.log(gameResponse.results);
      } catch(err) {
          console.log(err)
      }
  }
  handleInput = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  searchGames = async (e) => {
    e.preventDefault()
    try {
      const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1/games/query/filter/${this.state.search}`, {
        method: "GET",
        credentials: "include"
      })).json()
      this.setState({
        games: gameResponse.results
      })
    } catch(err) {
      console.log(err)
    }
  }
  atBottom = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-10) {
      this.setState({
        page: this.state.page + 1
      })
      this.loadMoreGames()
    }
  }
  render(){
    return(
      <Container1>
        <SearchForm onSubmit={this.searchGames}>
          <SearchDiv>
            <MagnifyingGlass type="submit">
              <i className="fa fa-search"></i>
            </MagnifyingGlass>
            <SearchBar onChange={this.handleInput} placeholder="Search for a game"></SearchBar>
          </SearchDiv>
        </SearchForm>
        <FilterGames />
        {this.state.initialLoading 
          ? <BarLoader
              css={override}
              sizeUnit={"px"}
              size={150}
              color={'#7a7a7a'}
              loading={this.state.initialLoading}
        /> : <GamesList games={this.state.games} loadMoreGames={this.loadMoreGames}/>}
        {this.state.loading ? <Loading /> : ""}
      </Container1>
    )
  }
}
export default withRouter(GameContainer)