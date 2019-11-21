import React from 'react'
import { NavLink, Switch } from 'react-router-dom'

import Button from '../Button'

import {
  NavBar,
  Link,
  MainContainer,
} from './style'

const LoggedNav = (props) => {
  console.log(props, "<-----------------------from Logged in Nav")
  return (
    <NavBar>
      <Link exact to="/">Home</Link>
      <Link exact to="/login">Login</Link>
      <Link exact to="/register">Register</Link>
      <Link exact to="/" onClick={props.logout}>Logout</Link>
    </NavBar>
  )
}

export default LoggedNav