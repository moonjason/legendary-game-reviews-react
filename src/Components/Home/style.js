import styled from "styled-components"
import HomeImg from "./images/home.jpg"
import { NavLink } from 'react-router-dom'

export const BackgroundDiv = styled.div`
    background-image: url(${HomeImg});
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 0.8;
    height: calc(100vh - 4.5rem);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const AllGamesLink = styled(NavLink)`
    font-family: 'Bangers', cursive;    
    width: 35rem;
    height: 4.5rem;
    text-decoration: none;
    background-color: #0d98ba;
    opacity: 0.8;
    color: white;
    font-size: 3rem;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`