import React from 'react';
import { Pagination } from "antd";

import "./PaginationComp.scss";

export default function PaginationComp(props) {

    const { posts, location, history } = props
    const currentPage = parseInt(posts.page)

    const onChangePage = newPage => {
        history.push(`${location.pathname}?page=${newPage}`)
    }

    return (
        <Pagination
            defaultCurrent={currentPage}
            total={posts.total}
            pageSize={posts.limit}
            onChange={newPage => onChangePage(newPage)}
            className="paginationComp"
        />
    )
}
