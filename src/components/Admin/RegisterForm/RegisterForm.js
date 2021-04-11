import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { 
    emailValidation, 
    minLengthValidation 
} from "../../../utils/formValidation";

import "./RegisterForm.scss"

export default function RegisterForm() {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    })

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
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

    const inputValidation = datos => {

        console.log("Validando...")
        console.log(datos)
        console.log(datos.target)

        const { type, name } = datos.target
        if(type === "email") {
            setFormValid({
                ...formValid,
                [name]: emailValidation(datos.target)
            })
        }

        if(type === "password") {
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(datos.target, 6)
            })
        }
        
        if(type === "checkbox") {
            setFormValid({
                ...formValid,
                [name]: datos.target.checked
            })
        }
    }

    const register = e => {

        console.log(inputs)
        // e.preventDefault()
        console.log(inputs)
        console.log(formValid)
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
                    onChange={inputValidation}
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
                    onChange={inputValidation}
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
                    onChange={inputValidation}
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
                    onChange={inputValidation}
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
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy"
                    onChange={inputValidation}
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