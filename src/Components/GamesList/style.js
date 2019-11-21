import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Container1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #202129;
`

export const GameLink = styled(Link)`
    position: relative;
    width: 18rem;
    height: 22rem;
    /* border: 0 solid black; */
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
    background-color: #04061f;
    text-decoration: none;
    &:hover :nth-child(1) {
        opacity: 1;
    }
`

export const GameAttribute = styled.div`
    position: absolute;
    top: 12rem;
    text-align: center;
    width: 100%;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const GameImg = styled.img`
    width: 100%;
    height: 12rem;
    opacity: 0.7;
`

export const GameH1 = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem;
    color: white;
`

export const Platform = styled.p`
    margin: 0.5rem 0.5rem 0 0.5rem;
`