import React from 'react';
import { List, Button, Modal, notification } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getAccessTokenApi } from "../../../../api/auth";
import { deletePostApi } from "../../../../api/post";

import "./PostsList.scss";

const { confirm } = Modal

export default function PostsList(props) {

    const { posts, setReloadPosts } = props

    const deletePost = post => {
        console.log(post)
        const accessToken = getAccessTokenApi()

        confirm({
            title: "Eliminado poast",
            content: `¿Estas seguro de eliminar el post ${post.title}?`,
            onText: "Eliminar",
            onType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deletePostApi(accessToken, post._id)
                    .then(response => {
                        console.log(response)
                        const typeNotification = response.code === 200 ? "success" : "warning"
                        notification[typeNotification]({
                            message: response.message
                        })
                        setReloadPosts(true)
                    })
                    .catch(() => {
                        notification["error"]({
                            message: "Error del servidor"
                        })
                    })
            }
        })
    }
    
    console.log(posts)

    return (
        <div className="posts-list">
            <h1>PostsList . . .</h1>
            <List 
                dataSource={posts.docs}
                renderItem={post => <Post post={post} deletePost={deletePost} />} 
            />
        </div>
    )
}

function Post(props) {

    const { post, deletePost } = props

    return (
        <List.Item
            actions={[

                <Link to={`/blog/${post.url}`} target="_blank">
                    <Button type="primary">
                        <EyeOutlined />
                    </Button>
                </Link>,
                <Button type="primary">
                    <EditOutlined />
                </Button>,
                <Button type="danger" onClick={() => deletePost(post)}>
                    <DeleteOutlined />
                </Button>
            ]}
        >
            <List.Item.Meta title={post.title} />
        </List.Item>
    )
}
