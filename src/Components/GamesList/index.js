import React from "react"

function GamesList(props) {
    const games = props.games.map(game => {
        return(
            <div>
                Title: {game.name}
            </div>
        )
    })
    return(
        games
    )
}

export default GamesList