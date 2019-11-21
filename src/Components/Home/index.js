import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../Nav'
import BackgroundImg from "../../homeimg.jpg"
import { BackgroundDiv } from "./style"

function Home() {
    return (
        <BackgroundDiv img={BackgroundImg}>
            <NavLink to="/games">Browse through reviews</NavLink>
        </BackgroundDiv>
    )
}

export default Home