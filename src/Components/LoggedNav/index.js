import React from 'react'
import { NavLink, Switch } from 'react-router-dom'

import Button from '../Button'

import {
  NavBar,
  Link,
  Username,
  Title, 
} from './style'

const LoggedNav = (props) => {
  console.log(props, "<-----------------------from Logged in Nav")
  return (
    <NavBar>
      <Title>Legendary Game Reviews</Title>
      <Username>{props.currentUser.username}</Username>
      <Link exact to="/games">Home</Link>
      <Link exact to="/" onClick={() => {props.logout()}}>Logout</Link>
    </NavBar>
  )
}

export default LoggedNav