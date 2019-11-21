import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class GameShowMock extends Component {
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
        const shownGame = this.state.shownGame
        return(
            <div>
                {this.props.match.params.id}
                <h1>{this.shownGame.name}</h1> 
                {/* <h3>ESRB Rating: {shownGame.esrb_rating.name}</h3> */}
            </div>
        )
    }
}

export default withRouter(GameShowMock)