import React from 'react'
import {
    GameDataRow
} from './style'

function GameDetails(props) {
    const genres = props.shownGame.genres.map(genre => {
        return <p key={genre.id}>{genre.name}</p>
    })
    const platforms = props.shownGame.platforms.map(platform => {
        return <p key={platform.platform.id}>{platform.platform.name}</p>
    })
    const developers = props.shownGame.developers.map(developer => {
        return <p key={developer.id}>{developer.name}</p>
    })
    const publishers = props.shownGame.publishers.map(publisher => {
        return <p key={publisher.id}>{publisher.name}</p>
    })
    
    const ts = new Date(props.shownGame.released);

    const date = ts.toDateString().split(' ');
    date.splice(0, 1);
    date[1] = (parseInt(date[1])+1).toString().concat(',')

    return (
        <div>
            <h1>{props.shownGame.name}</h1>
            <img style={{'width': '50%'}} src={props.shownGame.background_image_additional} />
            <table style={{'width': '20%'}} className="attributes">
                <tbody>
                    <GameDataRow>
                        <td>Release Date:</td>
                        <td>{date.join(' ')}</td>
                    </GameDataRow>
                    <GameDataRow>
                        <td>Genre:</td>
                        <td>{genres}</td>
                    </GameDataRow>
                    <GameDataRow>
                        <td>Platform(s):</td>
                        <td>{platforms}</td>
                    </GameDataRow>
                    <GameDataRow>
                        <td>Developer(s):</td>
                        <td>{developers}</td>
                    </GameDataRow>
                    <GameDataRow>
                        <td>Publisher(s):</td>
                        <td>{publishers}</td>
                    </GameDataRow>
                </tbody>
            </table>
            <h4>{props.shownGame.description_raw}</h4>
        </div>
    )
}

export default GameDetails;