import styled from "styled-components"
import BackgroundImg from "../../homeimg.jpg"

export const BackgroundDiv = styled.div`
    background-image: url(${BackgroundImg})
    background-size: 100%;
    background-repeat: no-repeat;
    height: calc(100vh - 4.5rem);
    width: 100vw;
`
