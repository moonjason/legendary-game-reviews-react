import React from "react"
import { NavLink } from 'react-router-dom'

function ListPages(props) {
    const pages = [1, 2, 3, 4, 5].map((page,i=1) => {
        return(
            <NavLink to={page} onClick={() => {props.changePage(page)}}>{i}</NavLink>
        )
    })
    return(
        pages
    )
}

export default ListPages