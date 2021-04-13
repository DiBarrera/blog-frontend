import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersActiveApi } from "../../../api/user";
import ListUsers from "../../../components/Admin/Users/ListUsers";

import "./Users.scss";

export default function Users() {

    const [usersActive, setUsersActive ] = useState([])
    const [usersInactive, setUsersInactive] = useState([])
    const token = getAccessTokenApi()

    console.log("usersActive ", usersActive)
    console.log("usersInactive ", usersInactive)

    useEffect(() => {
        getUsersActiveApi(token, true).then(response => {
            console.log(response)
            setUsersActive(response)
        })
        getUsersActiveApi(token, false).then(response => {
            console.log(response)
            setUsersInactive(response)
        })
    }, [token])

    return (
        <div className="users">
            <h1>Lista de Usuarios</h1>
            <ListUsers usersActive={usersActive} usersInactive={usersInactive} />
        </div>
    )
}