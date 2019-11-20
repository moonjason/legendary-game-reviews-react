import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class GamesShow extends Component {
    state = {
        shownGame: {}
    }
    getOneGame = async () => {
        try {
            const gameResponse = await (await fetch(`${process.env.REACT_APP_API_URL}/api/v1/games/1/${this.props.match.params.id}`, {
                method: "GET"
            })).json();
            console.log(gameResponse)
            this.setState({
                shownGame: gameResponse
            })
        } catch(err) {
            console.log(err)
        }
    }
    componentDidMount() {
        this.getOneGame();
    }
    render() {
        return(
            <div>
                {this.props.match.params.id}
                {this.state.shownGame.name}
            </div>
        )
    }
}

export default withRouter(GamesShow)