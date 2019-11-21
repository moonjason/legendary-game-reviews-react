import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavBar = styled.nav`
    width: 100%;
    height: 30%;
    background-color: antiquewhite;
    display: flex;
    justify-content: flex-end; 
    margin: 0px;
    font-size: 20px;
`

export const Link = styled(NavLink)`
    color: black;
    margin: 20px;
    font-family: Arial;
    text-decoration: none; 
    &:hover{
        text-decoration: underline; 
    }
    &.active{
        border-bottom: 3px solid red; 
    }
`
