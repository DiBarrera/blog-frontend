import React, { useState } from "react";
import { Switch, List, Avatar, Button } from "antd";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";

import "./ListUsers.scss";

export default function ListUsers(props) {

    const { usersActive, usersInactive } = props

    console.log(props)
    console.log(usersActive)
    console.log(usersInactive)

    const [viewUsersActives, setViewUsersActives] = useState(true)
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState(null)

    return (
        <div className="list-users">
            <h1>List Users . . .</h1>
            <div className="list-users__switch">
                <Switch
                    defaultChecked
                    onChange={() => setViewUsersActives(!viewUsersActives)}
                />
                <span>
                    {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                </span>
            </div>

            {viewUsersActives ? (
                <UsersActive 
                    usersActive={usersActive} 
                    setIsVisibleModal={setIsVisibleModal} 
                    setModalTitle={setModalTitle}
                    setModalContent={setModalContent} 
                />
            ) : (
                <UsersInactive usersInactive={usersInactive} />
            )}
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                Este es un MODAL
                {modalContent}
            </Modal>
        </div>
    )
}

function UsersActive(props) {

    const { 
        usersActive,
        setIsVisibleModal,
        setModalTitle,
        setModalContent
    } = props

    console.log(usersActive)
    console.log(props)

    const editUser = user => {
        
        setIsVisibleModal(true)
        setModalTitle(
                `Editar usuario ${user.nombre ? user.nombre : "..."} 
                ${user.apellido ? user.apellido : "..."}`
            )
        setModalContent(<EditUserForm user={user}/>)
    }

    return (
        // <h3>Lista de usuarios Activos</h3>
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersActive}
            renderItem={user => (
                <List.Item
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => editUser(user)}
                        >
                            <EditOutlined />
                        </Button>,
                        <Button
                            type="danger"
                            onClick={() => console.log("Desactivar Usuario")}
                        >
                            <StopOutlined />
                        </Button>,
                        <Button
                            type="danger"
                            onClick={() => console.log("Eliminar Usuario")}
                        >
                            <DeleteOutlined />
                        </Button>
                    ]}
                >
                    <List.Item.Meta 
                        avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                        title={
                            `
                                ${user.nombre ? user.nombre : "..."}
                                ${user.apellido ? user.apellido : "..."}
                            `
                        }
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    )
}

function UsersInactive(props) {

    const { usersInactive } = props

    console.log(usersInactive)
    console.log(props)

    return (
        // <h3>Lista de usuarios Inactivos</h3>
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersInactive}
            renderItem={user => (
                <List.Item
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => console.log("Activar Usuario")}
                        >
                            <CheckOutlined />
                        </Button>,
                        <Button
                            type="danger"
                            onClick={() => console.log("Eliminar Usuario")}
                        >
                            <DeleteOutlined />
                        </Button>
                    ]}
                >
                    <List.Item.Meta 
                        avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                        title={
                            `
                                ${user.nombre ? user.nombre : "..."}
                                ${user.apellido ? user.apellido : "..."}
                            `
                        }
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    )
}