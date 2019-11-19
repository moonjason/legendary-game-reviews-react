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
    <MainContainer>
      <NavBar>
        <div>
          <a><NavLink to="/">Home</NavLink></a>
        </div>
        <div>
          <a><Link color="red" to="/login">Login</Link></a>
          <a><Link to="/register">Register</Link></a>
        </div>
      </NavBar>
    </MainContainer>
  )
}

export default Nav