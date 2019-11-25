import React from 'react'
import {
  NavBar,
  Link,
  Username,
  Title,
  UserDiv
} from './style'

const LoggedNav = (props) => {
  return (
    <NavBar>
      <Title>Legendary Game Reviews</Title>
      <UserDiv>
        <Username>Welcome, {props.currentUser.username}</Username>
        <Link exact to="/games">Home</Link>
        <Link exact to="/" onClick={() => {props.logout()}}>Logout</Link>
      </UserDiv>
    </NavBar>
  )
}

export default LoggedNav