import React, { useState, useEffect } from 'react';
import { Spin, List, notification } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import queryString from "query-string";
import PaginationComp from "../../../PaginationComp";
import { getPostsApi } from "../../../../api/post";
import "moment/locale/es";

import "./PostsListWeb.scss";

export default function PostsListWeb(props) {

    const { location, history } = props
    const [posts, setPosts] = useState(null)
    const { page = 1 } = queryString.parse(location.search)

    console.log(page)

    useEffect(() => {
        getPostsApi(10, page)
            .then(response => {
                if(response?.code !== 200) {
                    notification["warning"]({
                        message: response.message
                    })
                } else {
                    setPosts(response.posts)
                }
            })
            .catch(() => {
                notification["error"]({
                    message: "Error del servidor"
                })
            })
    }, [page])

    return (
        <div>
            <h1>PostsListWeb</h1>
        </div>
    )
}
