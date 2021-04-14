import React, { useState, useCallback, useEffect } from "react";
import { Avatar, Form, Input, Select, Button, Row, Col } from "antd";
import { useDropzone } from "react-dropzone";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

import "./EditUserForm.scss";

export default function EditUserForm(props) {

    const { user } = props

    console.log(props)

    const [avatar, setAvatar] = useState(null)

    console.log(avatar)

    const [userData, setUserData] = useState({
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        role: user.role,
        avatar: user.avatar
    })

    useEffect(() => {
        if(avatar) {
            setUserData({...userData, avatar})
        }
    }, [avatar])
    
    const updateUser = e => {
        // e.preventDefault()
        console.log(userData)
    }

    return (
        <div className="edit-user-form">
            <h1>Forulario de edición de usuario</h1>
            <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
            <h2>{user.email}</h2>
            <EditForm userData={userData} setUserData={setUserData} updateUser={updateUser} />
        </div>
    )
}

function UploadAvatar(props) {

    const { avatar, setAvatar } = props

    console.log(props)

    const onDrop = useCallback(
        acceptedFiles => {
            const file = acceptedFiles[0]
            setAvatar({file, preview: URL.createObjectURL(file)})
        }, [setAvatar]
    )

    const { getRootProps, getInputProps, isDragActive, } = useDropzone({
        accept: "imgae/jpeg, image/png",
        noKeyboard: true,
        onDrop
    })

    return (
        <div className="upload-avatar" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <Avatar size={150} src={NoAvatar} />
            ) : (
                <Avatar size={150} src={avatar ? avatar.preview : NoAvatar} />
            )}
        </div>
    )
}

function EditForm(props) {
    
    const { userData, setUserData, updateUser } = props
    
    console.log(props)

    const { Option } = Select

    return (
        <Form className="form-edit" onFinish={updateUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            defaultValue={userData.nombre}
                            onChange={e => setUserData({...userData, nombre: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            prefix={<UserOutlined />}
                            placeholder="Apellido"
                            defaultValue={userData.apellido}
                            onChange={e => setUserData({...userData, apellido: e.target.value})}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            prefix={<MailOutlined />}
                            placeholder="Correo electronico"
                            defaultValue={userData.email}
                            onChange={e => setUserData({...userData, email: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Selecciona un rol"
                            onChange={e => setUserData({...userData, role: e})}
                            defaultValue={userData.role}
                        >
                            <Option value="admin">Administrador</Option>
                            <Option value="editor">Editor</Option>
                            <Option value="reviewr">Revisor</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Contraseña"
                            onChange={e => setUserData({...userData, password: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item>
                        <Input 
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Repetir contraseña"
                            onChange={e => setUserData({...userData, repeatpassword: e.target.value})}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Actualizar Usuario
                </Button>
            </Form.Item>
        </Form>
    )
}