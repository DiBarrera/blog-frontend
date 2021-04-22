import React from 'react';
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import PostsListWeb from "../components/Web/Blog/PostsListWeb";
import PostInfo from "../components/Web/Blog/PostInfo";

export default function Blog(props) {

    const { url } = useParams()
    const { location, history } = props

    return (
        <Row>
            <h1>Bienvenido a al Blog </h1>
            <Col md={4} />
            <Col md={16}>
                {url ? (
                    <PostInfo url={url} />
                ) : (
                    <PostsListWeb location={location} history={history} />
                )}
            </Col>
            <Col md={4} />
        </Row>
    )
}
