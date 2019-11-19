import React from 'react'
import { NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            This is the Home Page
        </div>
    )
}

export default Home