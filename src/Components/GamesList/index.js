import React from "react"
import { Link } from "react-router-dom"
import {
    Container2,
    GameLink,
    GameAttribute,
    GameImg,
    GameH1,
    Platform
  } from './style'

function GamesList(props) {
    const games = props.games.map(game => {
        const platforms = game.platforms.map(platform => {
            return(
                <Platform>{platform.platform.name}</Platform>
            )
        })
        return(
                <GameLink to={`/games/${game.id}`}>
                    <GameImg src={game.background_image}/>
                    <GameAttribute className={platforms.length > 5 ? "big-platform" : ""}>
                        {platforms}
                    </GameAttribute>
                    <GameH1 className={game.name.length > 50 ? "big-title" : ""}>{game.name}</GameH1>
                </GameLink>
        )
    })
    return(
        <Container2>
            {games}
        </Container2>
    )
}

export default GamesList