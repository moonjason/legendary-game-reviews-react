import React from "react"
import styled from "styled-components"

const LoadingImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    background-color: #202129;
    color: white;
    font-size: 3rem;
`

function Loading() {
    return(
        <LoadingImg className="loader center">
            <i className="fa fa-cog fa-spin" />
        </LoadingImg>
    )
}

export default Loading