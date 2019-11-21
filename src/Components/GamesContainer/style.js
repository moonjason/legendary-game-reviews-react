import styled from 'styled-components'

export const Container1 = styled.div`
    background-color: #202129;
` 
export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1rem;
`

export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    width: 40rem;
    background-color: white;
    border-radius: 2rem;
`

export const SearchBar = styled.input`
    width: 80%;
    border: none;
    font-size: 2rem;
    :focus {
        outline: none;
    }
`

export const MagnifyingGlass = styled.button`
    font-size: 2rem;
    background-color: white;
    border: none;
    padding: 1rem;
    border-radius: 2rem;
`