import styled from "styled-components"

export const GameForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40rem;
    margin: 2rem auto;
    background-color: #263142;
`

export const ReviewHeading = styled.h3`
    color: white;
    margin-top: 0.5rem;
`

export const ReviewTitle = styled.input`
    font-size: 1.5rem;
    width: 30rem;
    height: ${props => props.height};
    border: none;
    margin: 1rem;
    padding: 0.5rem;
`

export const ReviewBody = styled.textarea`
    width: 30rem;
    height: 10rem;
    padding: 0.5rem;
    resize: none;
    border: none;
`

export const ReviewCheckbox = styled.div`
    margin: 1rem;
    color: white;
`

export const ReviewButton = styled.button`
    background-color: grey;
    color: white;
    border: none;
    padding: 0.5rem;
    margin: 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    &:hover {
        background-color: white;
        color: black;
    }
`

export const StyledError = styled.span`
    color: red;
    margin: 0.5rem;
`