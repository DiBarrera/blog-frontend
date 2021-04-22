import React, { useState, useEffect } from 'react';
import { Spin, notification } from "antd";
import moment from "moment";
import { getPostApi } from "../../../../api/post";
import "moment/locale/es";

import "./PostInfo.scss";

export default function PostInfo(props) {

    const { url } = props
    const [postInfo, setPostInfo] = useState(null)

    console.log(postInfo)

    useEffect(() => {
        getPostApi(url)
            .then(response => {
                console.log(response)
                if(response.code !== 200) {
                    console.log("El code no es 200")
                    notification["warning"]({
                        message: response.message
                    })
                } else {
                    console.log("Consiguiendo Post")
                    setPostInfo(response.post)
                }
            })
            .catch(() => {
                notification["warning"]({
                    message: "Error del servidor"
                })
            })
    }, [url])

    if(!postInfo) {
        return (
            <Spin 
                tip="Cargando"
                style={{ width: "100%", padding: "200px 0" }}
            />
        )
    }

    console.log(props)

    return (
        <div className="post-info">
            <div>
                PostInfo . . .
            </div>
            <h1 className="post-info__title">{postInfo.title}</h1>
            <div className="post-info__creation-date">
                {moment(postInfo.date)
                    .local("es")
                    .format("LL")}
            </div>
            <div 
                className="post-info__description"
                dangerouslySetInnerHTML={{ __html: postInfo.description }}
            />
        </div>
    )
}
