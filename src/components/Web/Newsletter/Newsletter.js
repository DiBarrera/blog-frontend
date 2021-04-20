import React, { useState } from 'react';
import { Form, Input, Button, notification } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { subscribeNewsletterApi } from "../../../api/newsletter";

import "./Newsletter.scss";

export default function Newsletter() {

    const [email, setEmail] = useState("")

    const onSubmit = e => {

        // e.preventDefault()
        console.log("Newsletter Enviado")
        console.log(email)
        
        // eslint-disable-next-line
        const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        const resultValidation = emailValid.test(email)

        console.log(resultValidation)

        if(!resultValidation) {
            notification["error"]({
                message: "El correo electronico no es valido"
            })
        } else {
            subscribeNewsletterApi(email)
                .then(response => {
                    if(response.code !== 200) {
                        console.log("Registro no exitoso")
                        notification["warning"]({
                            message: response.message
                        })
                    } else {
                        console.log("Registro exitoso")
                        notification["success"]({
                            message: response.message
                        })
                        setEmail("")
                    }
                })
        }
    }
    return (
        <div className="newsletter">
            <h3>Newsletter . . .</h3>
            <Form onFinish={onSubmit}>
                <Form.Item>
                    <Input 
                        prefix={<UserAddOutlined style={{ color: "rgba(0, 0, 0, 0.5)" }} />}
                        placeholder="Correo electronico"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Subscribirse!
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
