import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

import "./LoginForm.scss";

export default function LoginForm() {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const changeForm = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        console.log(e.target.name)
        console.log(inputs)
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const login = async e => {
        console.log("Login")
        console.log(inputs)
        // e.preventDefault();

        signInApi(inputs)

        const result = await signInApi(inputs)

        console.log(result)

        if(result.message) {
            console.log(result.message)
            notification["error"]({
                message: result.message
            })
        } else {
            console.log(localStorage)
            const { accessToken, refreshToken } = result
            localStorage.setItem(ACCESS_TOKEN, accessToken)
            localStorage.setItem(REFRESH_TOKEN, refreshToken)

            notification["success"]({
                message: "Login correcto"
            })

            // window.location.href = "/admin"
        }
    }

    return (
        <Form className="login-form" onFinish={login} onChange={changeForm}>
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