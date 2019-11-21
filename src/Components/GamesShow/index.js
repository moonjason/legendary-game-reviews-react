import React, { Component } from "react"

import GameDetails from '../GameDetails'
import ReviewForm from "../ReviewForm"

import { css } from '@emotion/core';
import { withRouter } from "react-router-dom"
import BarLoader from 'react-spinners/BarLoader';


const override = css`
    display: block;
    margin: 15% auto;
`;

class GamesShow extends Component {
    state = {
        shownGame: {},
        loading: true,
    }
    componentDidMount() {
        this.getOneGame();
    }
    getOneGame = async () => {
        try {
            const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1/games/appid/${this.props.match.params.id}`, {
                method: "GET",
                credentials: "include"
            })).json();
            console.log(gameResponse)
            this.setState({
                shownGame: gameResponse,
                loading: false
            })
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        return (
            this.state.loading 
                ? <BarLoader
                    css={override}
                    sizeUnit={"px"}
                    size={150}
                    color={'#7a7a7a'}
                    loading={this.state.loading}
                  />
                : <div>
                    <GameDetails shownGame={this.state.shownGame} />
                    <ReviewForm />
                </div>
        )
    }
}

export default withRouter(GamesShow)