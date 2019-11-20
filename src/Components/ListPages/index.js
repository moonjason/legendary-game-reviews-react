import React from "react"
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


function ListPages(props) {
    const pages = [];
    const populatePages = (num) => {
        for(let i = 1; i < num+1; i++) {
            pages.push(i);
        }
    }
    populatePages(10)
    const sendUser = page => {
        props.history.push(`${page}`)
        props.getGames()
    }
    const pageList = pages.map(page => {
        return(
            <button onClick={() => {sendUser(page)}}>{page}</button>
        )
    })
    return(
        pageList
    )
}

export default withRouter(ListPages)