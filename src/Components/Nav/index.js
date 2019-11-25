import React from 'react'

import {
  NavBar,
  Link,
  Title,
  UserDiv
} from './style'

const Nav = () => {
  return (
    <NavBar>
        <Title>Legendary Game Reviews</Title>
        <UserDiv>
          <Link exact to="/">Home</Link>
          <Link exact to="/login">Login</Link>
          <Link exact to="/register">Register</Link>
        </UserDiv>
    </NavBar>
  )
}

export default Nav