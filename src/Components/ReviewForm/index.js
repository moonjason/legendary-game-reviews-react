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
        console.log(this.state, "<-----state")
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const review = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/reviews/`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(review, "<-----------review from review")
    }   
    render() {
        return(
            <GameForm onSubmit={this.handleSubmit}>
                {console.log(this.props.currentUser, "<--------review")}
                <GameInput name="title" onChange={this.handleInput} placeholder="Title"></GameInput>
                <GameInput name="body" onChange={this.handleInput} placeholder="Body"></GameInput>
                <button type="submit">Submit</button>
            </GameForm>
        )
    }
}

export default withRouter(ReviewForm)