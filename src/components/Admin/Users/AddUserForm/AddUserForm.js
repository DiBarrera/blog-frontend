import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, Notification } from "antd";
import { signUpAdminApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./AddUserForm.scss";

export default function EditUserForm(props) {

    const { setIsVisibleModal, setReloadUsers } = props
    const [userData, setUserData] = useState({})

    const addUser = event => {

        event.preventDefault()

        console.log("Creando usuarios con el formulario")
    }

    return (
        <div className="add-user-form">
            <AddForm 
                userData={userData}
                setUserData={setUserData}
                addUser={addUser}
            />
        </div>
    )
}

function AddForm(props) {

    const { userData, setUserData, addUser } = props
    const { Option } = Select

    return (
        <Form className="form-add" onFinish={addUser}>
            <Row gutter={24}>

            </Row>
        </Form>
    )
}