import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined, ArrowRightOutlined } from "@ant-design/icons";

import "./RegisterForm.scss"

export default function RegisterForm() {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    })

    const changeForm = e => {

        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        console.log(e.target.name)

        if(e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            })
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    }

    const register = e => {

        console.log(inputs)
        // e.preventDefault()
    }
    
    return (
        <Form className="register-form" onFinish={register} onChange={changeForm}>
            <Form.Item>
                <Input 
                    prefix={<ArrowRightOutlined type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />}
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="register-form__input"
                    value={inputs.nombre}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<ArrowRightOutlined type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />}
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    className="register-form__input"
                    value={inputs.apellido}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<UserOutlined type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />}
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="register-form__input"
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined type="lock" style={{ color: "rgba(0, 0, 0, .25)"}} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined type="lock" style={{ color: "rgba(0, 0, 0, .25)"}} />}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir contraseña"
                    className="register-form__input"
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy"
                    checked={inputs.privacyPolicy}
                >
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}