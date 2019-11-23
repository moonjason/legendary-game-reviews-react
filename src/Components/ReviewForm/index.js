import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { 
    GameForm,
    GameInput
} from "./style"

class ReviewForm extends Component {
    state = {
        game_id: this.props.match.params.id,
        user_id: this.props.currentUser.id,
        title: "",
        body: "",
        is_positive: true,
        up_votes: 0,
        down_votes: 0,
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        return(
            <GameForm onSubmit={(e) => {this.props.addReview(e, this.state)}}>
                <GameInput name="title" onChange={this.handleInput} placeholder="Title"></GameInput>
                <GameInput name="body" onChange={this.handleInput} placeholder="Body"></GameInput>
                <button type="submit">Submit</button>
            </GameForm>
        )
    }
}

export default withRouter(ReviewForm)