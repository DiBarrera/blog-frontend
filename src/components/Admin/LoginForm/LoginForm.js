import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./LoginForm.scss";

export default function LoginForm() {
    return (
        <Form className="login-form">
            <Form.Item>
                <Input 
                    prefix={<UserOutlined type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />}
                    type="email"
                    name="email"
                    placeholder="Ingrese su correo electronico"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />}
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="login-form__button">
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    )
}