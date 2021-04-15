import React, { useState, useEffect } from "react";
import { Switch, List, Avatar, Button, notification } from "antd";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";
import { getAvatarApi, activateUserApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./ListUsers.scss";

export default function ListUsers(props) {

    const { usersActive, usersInactive, setReloadUsers } = props

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
                    setReloadUsers={setReloadUsers}
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
        setModalContent,
        setReloadUsers
    } = props

    console.log(usersActive)
    console.log(props)

    const editUser = user => {
        
        setIsVisibleModal(true)
        setModalTitle(
                `Editar usuario ${user.nombre ? user.nombre : "..."} 
                ${user.apellido ? user.apellido : "..."}`
            )
        setModalContent(
                <EditUserForm 
                    user={user} 
                    setIsVisibleModal={setIsVisibleModal} 
                    setReloadUsers={setReloadUsers} 
                />
            )
    }

    return (
        // <h3>Lista de usuarios Activos</h3>
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersActive}
            renderItem={user => <UserActive user={user} editUser={editUser} />}
        />
    )
}

function UserActive(props) {

    const { user, editUser } = props

    console.log(props)

    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
        if(user.avatar) {
            console.log(user)
            console.log(user.avatar)
            getAvatarApi(user.avatar).then(response => {
                console.log(response)
                setAvatar(response)
            })
        } else {
            setAvatar(null)
        }
    }, [user])

    const desactivateUser = () => {

        const accessToken = getAccessTokenApi()

        activateUserApi(accessToken, user._id, false)
            .then(response => {
                console.log(response)
                notification["success"]({
                    message: response
            })
        })
        .catch(err => {
            console.log(err)
            notification["error"]({
                message: err
            })
        })
    }

    return (
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
                    onClick={desactivateUser}
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
                avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                title={
                    `
                        ${user.nombre ? user.nombre : "..."}
                        ${user.apellido ? user.apellido : "..."}
                    `
                }
                description={user.email}
            />
        </List.Item>
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
            renderItem={user => <UserInactive user={user} />}
        />
    )
}

function UserInactive(props) {

    const { user } = props

    console.log(props)

    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
        if(user.avatar) {
            console.log(user)
            console.log(user.avatar)
            getAvatarApi(user.avatar).then(response => {
                console.log(response)
                setAvatar(response)
            })
        } else {
            setAvatar(null)
        }
    }, [user])

    return (
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
                avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
                title={
                    `
                        ${user.nombre ? user.nombre : "..."}
                        ${user.apellido ? user.apellido : "..."}
                    `
                }
                description={user.email}
            />
        </List.Item>
    )
}