import React, { Component } from "react"

class FilterGames extends Component {
    state = {
        filter: "popularity"
    }
    handleInput = (e) => {
        this.setState({
            filter: e.target.value === "Popularity" ? "popularity" : e.target.value === "Release Date" ? "release-date" : ""
        })
        console.log(this.state)
    }
    render() {
        return(
            <form onChange={(e) => {this.handleInput(e)}}>
                <select>
                    <option name="popularity">Popularity</option>
                    <option name="release-date">Release Date</option>
                </select>
            </form>
        )
    }
}

export default FilterGames