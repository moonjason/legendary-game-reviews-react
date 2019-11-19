import React from 'react'
import { NavLink, Switch } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav