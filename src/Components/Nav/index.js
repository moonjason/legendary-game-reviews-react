import React from 'react'
import { NavLink, Switch } from 'react-router-dom'

import Button from '../Button'

import {
  NavBar,
  Link,
  MainContainer,
} from './style'

// const navStyleRight = {
//   display: 'flex',
//   justifyContent: 'flex-end',
// }

// const navStyleLeft = {
//   display: 'flex',
//   justifyContent: 'flex-start'
// }

const Nav = () => {
  return (
    <NavBar>
      <Link exact to="/">Home</Link>
      <Link exact to="/login">Login</Link>
      <Link exact to="/register">Register</Link>
    </NavBar>
  )
}

export default Nav