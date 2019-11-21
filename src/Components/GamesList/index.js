import React from "react"
import { Link } from "react-router-dom"
import {
    GameLink,
    Container1,
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
                    <GameAttribute>
                        {platforms}
                    </GameAttribute>
                    <GameH1>{game.name}</GameH1>
                </GameLink>
        )
    })
    return(
        <Container1>
            {games}
        </Container1>
    )
}

export default GamesList