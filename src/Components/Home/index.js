import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../Nav'

const Home = () => {
    return (
        <>
            Home Page
            <NavLink to="/games">Browse through reviews</NavLink>
        </>
    )
}

export default Home