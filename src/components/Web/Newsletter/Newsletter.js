import React from 'react';
import { Form, Input, Button, notification } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

import "./Newsletter.scss";

export default function Newsletter() {

    const onSubmit = () => {
        console.log("Newsletter Enviado")
    }
    return (
        <div className="newsletter">
            <h3>Newsletter . . .</h3>
            <Form onFinish={onSubmit}>
                <Form.Item>
                    <Input 
                        prefix={<UserAddOutlined style={{ color: "rgba(0, 0, 0, 0.5)" }} />}
                        placeholder="Correo electronico"
                        // value=""
                        // onChange={}
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
