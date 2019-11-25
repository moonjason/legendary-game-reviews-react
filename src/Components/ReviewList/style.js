import styled from 'styled-components'


export const Container2 = styled.div`
    width: 50rem;
    margin-bottom: 2rem;
`

export const Review = styled.div`
    color: white;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    word-wrap: break-word;
    background-color: #263142;
`
export const ReviewContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`

export const UserDiv = styled.div`
    width: 20%;
    margin-right: 1rem;
`
export const Username = styled.h4`
    text-align: left;
`

export const ReviewHeading = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Recommended = styled.i`
    color: red;
    &.fa-thumbs-up {
        color: green;
    }
`

export const InterfaceDiv = styled.div`
    width: 5rem;
    display: flex;
    justify-content: space-around;
`

export const InterfaceButtons = styled.button`
    background-color: inherit;
    border: none;
    color: white;
    &:hover {
        text-decoration: underline;
    }
`

export const ReviewTitle = styled.h1`
    padding-bottom: 0.5rem;
`

export const ReviewBody = styled.p`
`