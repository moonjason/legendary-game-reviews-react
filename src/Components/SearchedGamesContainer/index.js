import React, { Component } from 'react'
import GamesList from "../GamesList"
import Loading from "../Loading"
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
class SearchedGamesContainer extends Component{
  state = {
    games: [],
    search: this.props.match.params.query,
    page: 1,
    loading: false,
    initialLoading: true,
  }
  componentDidMount(){
    this.getGames()
    window.addEventListener('scroll', this.atBottom)
  }
  componentDidUpdate() {
    window.onpopstate = (e) => {
      this.setState({
        search: this.props.match.params.query,
      })
      window.location.reload(true);
      this.getGames();
    }
  }
  getGames = async () => {
      try {
      const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1/games/query/filter/${this.state.search}`, {
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
      console.log(this.props)
      this.props.history.push(`/games/search/${this.state.search}`);
      this.props.setSearch(this.props.match.params.query);
    } catch(err) {
      console.log(err)
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
export default withRouter(SearchedGamesContainer)