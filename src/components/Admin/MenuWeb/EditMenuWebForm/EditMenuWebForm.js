import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { updateMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import { EditOutlined, LinkOutlined } from "@ant-design/icons";

import "./EditMenuWebForm.scss";

export default function EditMenuWebForm(props) {
    
    const { setIsVisibleModal, setReloadMenuWeb, menu } = props

    return (
        <div className="edit-menu-web-form">
            {/* <h1>Editando menu {menu.title}</h1> */}
            <EditForm />
        </div>
    )
}

function EditForm(props) {

    // const { menuWebData, setMenuWebData, editMenu, menu } = props
    // console.log(props)

    return (
        <Form className="form-edit">
            <Form.Item>
                <Input 
                    prefix={<EditOutlined />}
                    placeholder="Titulo"
                    // value={}
                    // onChange={}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LinkOutlined />}
                    placeholder="URL"
                    // value={}
                    // onChange={}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Actualizar menú
                </Button>
            </Form.Item>
        </Form>
    )
}