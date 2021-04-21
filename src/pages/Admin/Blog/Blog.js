import React, { useState, useEffect } from 'react';
import { Button, notification } from "antd";
import Modal from "../../../components/Modal";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import { getPostApi } from "../../../api/post";

import "./Blog.scss";

function Blog(props) {

    console.log(props)

    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState(null)
    const { location, history } = props
    const { page = 1 } = queryString.parse(location.search)
    const [posts, setPosts] = useState(null)
    const [reloadPosts, setReloadPosts] = useState(false)

    console.log(location)
    console.log(history)
    console.log(queryString)
    console.log(queryString.parse(location.search))
    console.log(queryString.parse(location.search).page)
    console.log(page)
    console.log(posts)

    useEffect(() => {
        getPostApi(12, page)
            .then(response => {
                console.log(response)
                if(response?.code !== 200) {
                    notification["warning"]({
                        message: response.message
                    })
                } else {
                    setPosts(response.posts)
                }
            })
            .catch(() => {
                console.log("Error")
                notification["error"]({
                    message: "Error del servidor"
                })
            })
            setReloadPosts(false)
    }, [page, reloadPosts])

    return (
        <div className="blog">
            <h1>Blog . . .</h1>
            <div className="blog__add-post">
                <Button type="primary">
                    Nuevo post
                </Button>
            </div>

            <h1>PostList.........</h1>
            <h2>Paginación.........</h2>

            <Modal 
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                width="75%"
            />
        </div>
    )
}

export default withRouter(Blog)