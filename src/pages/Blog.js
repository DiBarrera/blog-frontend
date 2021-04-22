import React from 'react';
import { Row, Col } from "antd";
import { useParams, withRouter } from "react-router-dom";
import PostsListWeb from "../components/Web/Blog/PostsListWeb";

export default function Blog(props) {

    console.log(props)

    const info = useParams()

    console.log(info)

    const { url } = useParams()

    console.log(props)

    const { location, history } = props

    return (
        <Row>
            <h1>Este es el BLOG </h1>
            <Col md={4} />
            <Col md={16}>
                <div>
                    {url ? <h1> Estamos en un post</h1> : <h1>Estamos en lista de posts</h1>}
                </div>
                {url ? (
                    "PostInfo"
                ) : (
                    <PostsListWeb location={location} history={history} />
                )}
            </Col>
            <Col md={4} />
        </Row>
    )
}
