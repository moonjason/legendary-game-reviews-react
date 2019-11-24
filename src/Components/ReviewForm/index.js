import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { 
    GameForm,
    ReviewHeading,
    ReviewTitle,
    ReviewBody,
    ReviewCheckbox
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
        console.log(e.target.value)
        this.setState({
            is_positive: e.target.value === "positive" ? true : false
        })
    }
    render() {
        return(
            <GameForm onSubmit={(e) => {this.props.addReview(e, this.state); this.setState({title: '', body: '', is_positive: true})}}>
                <ReviewHeading>Write a review for {this.props.shownGame.name}</ReviewHeading>
                <ReviewTitle name="title" onChange={this.handleInput} value={this.state.title} placeholder="Title"></ReviewTitle>
                <ReviewBody name="body" onChange={this.handleInput} value={this.state.body} placeholder="Type your detailed review here"></ReviewBody>
                <ReviewCheckbox>
                    <input type="radio" name="1" value="positive" onChange={(e) => this.handleChange(e)}/>Recommended<br/>
                    <input type="radio" name="1" value="negative" onChange={(e) => this.handleChange(e)}/>Not Recommended
                </ReviewCheckbox>
                <button type="submit">Submit</button>
            </GameForm>
        )
    }
}

export default withRouter(ReviewForm)