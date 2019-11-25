import styled from 'styled-components'

export const BackgroundDiv = styled.div`
  border: 1px solid black;
  width: 30%;
  text-align: center;
  display: block;
  margin: auto;
  height: 29rem;
  background-color: white;
`

export const Form = styled.form`
  padding: 40px;
`

export const Box = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #555;
  background-color: #d1d1d1;
`

export const Btn = styled.button`
  background-color: #1E88E5;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  &:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`

export const Text = styled.p`
  font-size: 2rem;
  color: black;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 8rem;
  color: white;
  font-family: 'Bangers', cursive; 
  padding: 4rem;   
`

export const Error = styled.span`
  color: red;
`