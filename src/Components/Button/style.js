import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${props => props.color ? props.color : 'white'}
    color: black;
    padding: 2rem;
    cursor: pointer;
    &:hover {
        background-color: white;
    }
`


