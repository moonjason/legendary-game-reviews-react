import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { 
    GameForm,
    GameInput
} from "./style"

class ReviewForm extends Component {
    state = {
        game_id: this.props.match.params.id,
        user_id: "some id",
        title: "",
        body: "",
        is_positive: true,
        up_votes: [],
        down_votes: [],
    }
    handleInput = (e) => {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return(
            <GameForm>
                <GameInput name="title" onChange={this.handleGameInput}></GameInput>
                <GameInput name="body" onChange={this.handleInput}></GameInput>
            </GameForm>
        )
    }
}

export default withRouter(ReviewForm)