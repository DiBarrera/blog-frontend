import React, { useState } from "react";
import { Form, Input, Button, Select, notification } from "antd";
import { FontSizeOutlined } from "@ant-design/icons";

import "./AddMenuWebForm.scss";

export default function AddMenuWebForm(props) {

    return (
        <div className="add-menu-web-form">
            <h2>AddMenuWebForm Component</h2>
            <AddForm />
        </div>
    )
}

function AddForm(props) {

    const { Option } = Select
    const selectBefore = (
        <Select
            defaultValue="http://"
            style={{width: 90}}
            // onChange={}
        >
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    )

    return (
        <Form className="form-add">
            <Form.Item>
                <Input 
                    prefix={<FontSizeOutlined />}
                    placeholder="Titulo"
                    // value={}
                    // onChange={}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    addonBefore={selectBefore}
                    placeholder="URL"
                />
            </Form.Item>
            <Form.Item>
                <Button 
                    type="primary"
                    htmlType="submit"
                    className="btn-submit"
                >
                    Crear menú
                </Button>
            </Form.Item>
        </Form>
    )
}