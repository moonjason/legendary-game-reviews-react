import React from "react"
import { Link } from "react-router-dom"

function GamesList(props) {
    const games = props.games.map(game => {
        return(
            <div>
                <Link to={`/games/${game.id}`}>
                    Title: {game.name}
                    <img style={{"width": "5rem"}} src={game.background_image}/>
                </Link>
            </div>
        )
    })
    return(
        <div>
            {games}
            <button onClick={props.loadGames}>Load more</button>
        </div>
    )
}

export default GamesList