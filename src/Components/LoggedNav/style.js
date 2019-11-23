import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavBar = styled.nav`
    width: 100%;
    height: 30%;
    background-color: black;
    display: flex;
    justify-content: flex-end; 
    margin: 0px;
    font-size: 20px;
    box-shadow: 0 4px 15px -2px black;
`

export const Link = styled(NavLink)`
    color: white;
    padding: 1% 2%;
    font-family: Arial;
    text-decoration: none; 
    &:hover{
        color: #0D98BA; 
    }
    &.active{
        border-bottom: 2.5px solid #0D98BA;
    }
`

export const Username = styled.p`
    color: white;
    padding: 1% 2%;
    font-family: Arial;
    text-decoration: none; 
`
export const Title = styled.p`
    color: white;
    font-size: 30px;
    padding: .5% 14% ;
    font-family: 'Racing Sans One', cursive;
    justify-content: flex-start;
    font-style: normal;
`