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
    handleChange = (e) => {
        this.setState(prevState => ({
            is_positive: !prevState.is_positive
        }))
    }
    render() {
        return(
            <GameForm onSubmit={(e) => {this.props.addReview(e, this.state); this.setState({title: '', body: ''})}}>
                <GameInput name="title" onChange={this.handleInput} value={this.state.title} placeholder="Title"></GameInput>
                <GameInput name="body" onChange={this.handleInput} value={this.state.body} placeholder="Body"></GameInput>
                <select onChange={(e) => this.handleChange(e)}>
                    <option>Recommended</option>
                    <option>Not Recommended</option>
                </select>
                <button type="submit">Submit</button>
            </GameForm>
        )
    }
}

export default withRouter(ReviewForm)