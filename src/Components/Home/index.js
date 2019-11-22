import React from 'react'
import Nav from '../Nav'
import { 
    BackgroundDiv,
    AllGamesLink 
} from "./style"

function Home() {
    return (
        <BackgroundDiv>
            <AllGamesLink to="/games">Browse through reviews</AllGamesLink>
        </BackgroundDiv>
    )
}

export default Home