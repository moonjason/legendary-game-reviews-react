import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MainContainer = styled.div`

`

export const NavBar = styled.nav`
    padding: 1% 0;
    width: 100%;
    height: 30%;
    background-color: antiquewhite;
    & > div > a {
        color: pink;
    }
`

export const Link = styled(NavLink)`
    color: ${props => props.color ? props.color : "dodgerblue"};
    &:hover {
        color: blue;
    }
    &.active {
        border-bottom: 1px solid red;
    }
`