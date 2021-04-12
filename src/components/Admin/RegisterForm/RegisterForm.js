import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { 
    emailValidation, 
    minLengthValidation 
} from "../../../utils/formValidation";
import { signUpApi } from "../../../api/user";

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

    const register = async e => {

        console.log(inputs)
        // e.preventDefault()
        console.log(formValid)

        // const { email, password, repeatPassword, privacyPolicy } = formValid
        const nombreVal = inputs.nombre
        const apellidoVal = inputs.apellido
        const emailVal = inputs.email
        const passwordVal = inputs.password
        const repeatPasswordVal = inputs.repeatPassword
        const privacyPolicyVal = inputs.privacyPolicy

        if(!nombreVal || !apellidoVal || !emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            console.log(notification)
            console.log(`nombre val: ${nombreVal}`)
            console.log(`apellido val: ${apellidoVal}`)
            console.log(`email val: ${emailVal}`)
            console.log(`password val: ${passwordVal}`)
            console.log(`repeat password val: ${repeatPasswordVal}`)
            console.log(`privacy policy val: ${privacyPolicyVal}`)

            console.log("Acontinuacion los campos no llenados")
            console.log(`nombre no val: ${!nombreVal}`)
            console.log(`apellido no val: ${!apellidoVal}`)
            console.log(`email no val: ${!emailVal}`)
            console.log(`password no val: ${!passwordVal}`)
            console.log(`repeat password no val: ${!repeatPasswordVal}`)
            console.log(`privacy policy no val: ${!privacyPolicyVal}`)
            notification["error"]({
                message: "Todos los campos son obligatorios"
            })
        } else {
            if(passwordVal !== repeatPasswordVal) {
                console.log(`Las contraseñas no son iguales: ${passwordVal} !=== ${repeatPasswordVal}`)
                notification["error"]({
                    message: "Las contraseñas tienen que ser iguales"
                })
            } else {
                // TO DO: Conectar con el API y registrar el usuario
                // console.log("Se llenaron todos los campos pero no se creo usuario...")
                // notification["success"]({
                //     message: "Cuenta creada"
                // })
                const result = await signUpApi(inputs)
                console.log(result)
                if(!result.ok) {
                    notification["error"]({
                        message: result.message
                    })
                } else {
                    console.log(inputs)
                    console.log(result)
                    notification["success"]({
                        message: result.message
                    })
                    // resetForm()
                }
            }
        }
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