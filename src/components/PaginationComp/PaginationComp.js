import React from 'react';
import { Pagination } from "antd";

import "./PaginationComp.scss";

export default function PaginationComp(props) {

    const { posts, location, history } = props
    const currentPage = parseInt(posts.page)

    console.log(posts)
    console.log(posts.page)
    console.log(location)
    console.log(history)

    const onChangePage = newPage => {
        console.log(newPage)
        history.push(`${location.pathname}?page=${newPage}`)
    }

    console.log(location)
    console.log(location.pathname)

    return (
        // <div>
        //     <h1>Pagination . . .</h1>
            <Pagination
                defaultCurrent={currentPage}
                total={posts.total}
                pageSize={posts.limit}
                onChange={newPage => onChangePage(newPage)}
                className="paginationComp"
            />
        // </div>
    )
}
