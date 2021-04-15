import React, { useState, useEffect } from "react";
import { Switch, List, Avatar, Button, notification, Modal as ModalAntd } from "antd";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";
import { getAvatarApi, activateUserApi, deleteUserApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./ListUsers.scss";

const { confirm } = ModalAntd

export default function ListUsers(props) {

    const { usersActive, usersInactive, setReloadUsers } = props

    console.log(props)
    console.log(usersActive)
    console.log(usersInactive)

    const [viewUsersActives, setViewUsersActives] = useState(true)
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState(null)

    const addUserModal = () => {
        setIsVisibleModal(true)
        setModalTitle("Creando nuevo usuario")
        setModalContent(
            <div>
                <h1>Formulario creacion de nuevo usuario</h1>
                <h2>ADMIN</h2>
            </div>
        )
    }

    return (
        <div className="list-users">
            <h1>List Users . . .</h1>
            <div className="list-users__header">
                <div className="list-users__header-switch">
                    <Switch 
                        defaultChecked
                        onChange={() => setViewUsersActives(!viewUsersActives)}
                    />
                    <span>
                        {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                    </span>
                </div>
                <Button type="primary" onClick={addUserModal}>
                    Nuevo Usuario
                </Button>
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
                <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
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
            renderItem={user => (
                <UserActive 
                    user={user} 
                    editUser={editUser} 
                    setReloadUsers={setReloadUsers} 
                />
            )}
        />
    )
}

function UserActive(props) {

    const { user, editUser, setReloadUsers } = props

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
            setReloadUsers(true)
        })
        .catch(err => {
            console.log(err)
            notification["error"]({
                message: err
            })
        })
    }

    const showDeleteConfirm = () => {

        const accessToken = getAccessTokenApi()

        confirm({
            title: "Eliminando Usuario",
            content: `¿Estas seguro de querer eliminar a ${user.email} de forma permanente?`,
            onText: "Eliminar",
            onType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteUserApi(accessToken, user._id)
                    .then(response => {
                        console.log(response)
                        notification["success"]({
                            message: response
                        })
                        setReloadUsers(true)
                    })
                    .catch(err => {
                        console.log(err)
                        notification["error"]({
                            message: err
                        })
                    })
            }
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
                    onClick={showDeleteConfirm}
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

    const { usersInactive, setReloadUsers } = props

    console.log(usersInactive)
    console.log(props)

    return (
        // <h3>Lista de usuarios Inactivos</h3>
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersInactive}
            renderItem={user => <UserInactive user={user} setReloadUsers={setReloadUsers} />}
        />
    )
}

function UserInactive(props) {

    const { user, setReloadUsers } = props

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

    const activateUser = () => {
        
        const accessToken = getAccessTokenApi()

        activateUserApi(accessToken, user._id, true)
            .then(response => {
                console.log(response)
                notification["success"]({
                    message: response
                })
                setReloadUsers(true)
            })
            .catch(err => {
                console.log(err)
                notification["error"]({
                    message: err
            })
        })
    }

    const showDeleteConfirm = () => {

        const accessToken = getAccessTokenApi()

        confirm({
            title: "Eliminado Usuario",
            content: `¿Estas seguro de querer eliminar a ${user.email} de forma permanente?`,
            onText: "Eliminar",
            onType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteUserApi(accessToken, user._id)
                    .then(response => {
                        console.log(response)
                        notification["success"]({
                            message: response
                        })
                        setReloadUsers(true)
                    })
                    .catch(err => {
                        console.log(err)
                        notification["error"]({
                            message: err
                        })
                    })
            }
        })
    }

    return (
        <List.Item
            actions={[
                <Button
                    type="primary"
                    onClick={activateUser}
                >
                    <CheckOutlined />
                </Button>,
                <Button
                    type="danger"
                    onClick={showDeleteConfirm}
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