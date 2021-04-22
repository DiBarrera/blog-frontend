import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, notification } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";
import { getAccessTokenApi } from "../../../../api/auth";
import { FontSizeOutlined, LinkOutlined } from "@ant-design/icons";
import { addPostApi } from "../../../../api/post";

import "./AddEditPostForm.scss";

export default function AddEditPostForm(props) {

    const { setIsVisibleModal, setReloadPosts, post } = props
    const [postData, setPostData] = useState({})

    useEffect(() => {
        if(post) {
            setPostData(post)
        } else {
            setPostData({})
        }
    }, [post])

    const processPost = e => {
        // e.preventDefault()

        if(!post) {
            console.log("Creando post")
            console.log(postData)
        } else {
            console.log("Editando post")
            console.log(postData)
        }
    }

    return (
        <div className="add-edit-post-form">
            <h1>AddEditPostForm . . .</h1>
            <AddEditForm 
                postData={postData}
                setPostData={setPostData}
                post={post}
                processPost={processPost}
            />
        </div>
    )
}

function AddEditForm(props) {

    const { postData, setPostData, post, processPost } = props

    return (
        <Form
            className="add-edit-post-form"
            layout="inline"
            onFinish={processPost}
        >
            <Row gutter={24}>
                <Col span={8}>
                    <Input 
                        prefix={<FontSizeOutlined />}
                        placeholder="Titulo"
                        value={postData.title}
                        onChange={e => setPostData({
                            ...postData,
                            title: e.target.value
                        })}
                    />
                </Col>
                <Col span={8}>
                    <Input 
                        prefix={<LinkOutlined />}
                        placeholder="Titulo"
                        value={postData.url}
                        onChange={e => setPostData({
                            ...postData,
                            url: transformTextToUrl(e.target.value)
                        })}
                    />
                </Col>
                <Col span={8}>
                    <DatePicker
                        style={{ width: "100%" }}
                        format="DD/MM/YYY HH:mm:ss"
                        placeholder="Fecha de publicación"
                        showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                        value={postData.date && moment(postData.date)}
                        onChange={(e, value) => 
                            setPostData({
                                ...postData,
                                date: value
                            })}
                    />
                </Col>
            </Row>

            <div>
                <Editor
                    // onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                {/* <button onClick={log}>Log editor content</button> */}
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-submit"
                >
                    {post ? "Actualizar post" : "Crear post"}
                </Button>
            </div>

        </Form>
    )
}

function transformTextToUrl(text) {

    const url = text.replace(" ", "-")

    return url.toLowerCase()
}