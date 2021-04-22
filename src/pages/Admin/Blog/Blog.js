import React, { useState, useEffect } from 'react';
import { Button, notification } from "antd";
import Modal from "../../../components/Modal";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import { getPostApi } from "../../../api/post";
import PostsList from "../../../components/Admin/Blog/PostsList";
import PaginationComp from "../../../components/PaginationComp";
import AddEditPostForm from "../../../components/Admin/Blog/AddEditPostForm";

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
        getPostApi(10, page)
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

    const addPost = () => {
        setIsVisibleModal(true)
        setModalTitle("Creando nuevo post")
        setModalContent(
            <AddEditPostForm 
                setIsVisibleModal={setIsVisibleModal}
                setReloadPosts={setReloadPosts}
                post={null}
            />
        )
    }

    const editPost = post => {
        setIsVisibleModal(true)
        setModalTitle("Editar post")
        setModalContent(
            <AddEditPostForm 
                setIsVisibleModal={setIsVisibleModal}
                setReloadPosts={setReloadPosts}
                post={post}
            />
        )
    }

    if(!posts) {
        return null
    }

    return (
        <div className="blog">
            <h1>Blog . . .</h1>
            <div className="blog__add-post">
                <Button type="primary" onClick={addPost}>
                    Nuevo post
                </Button>
            </div>

            <h1>PostList.........</h1>
            <PostsList 
                posts={posts} 
                setReloadPosts={setReloadPosts} 
                editPost={editPost}
            />

            <h2>Paginación.........</h2>
            <PaginationComp 
                posts={posts}
                location={location}
                history={history}
            />

            <Modal 
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                width="75%"
            >
                {modalContent}
            </Modal>
        </div>
    )
}

export default withRouter(Blog)