import React from 'react';
import { Row, Col } from "antd";
import { useParams, withRouter } from "react-router-dom";

export default function Blog(props) {

    console.log(props)

    const info = useParams()

    console.log(info)

    const { url } = useParams()

    return (
        <div>
            <h1>Este es el BLOG</h1>
            <div>
                {url ? <h1>Estamos en un post</h1> : <h1>Estamos en lista de posts</h1>}
            </div>
        </div>
    )
}
