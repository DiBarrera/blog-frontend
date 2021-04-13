import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUserApi, getUsersApi } from "../../../api/user";

import "./Users.scss";

export default function Users() {

    const [users, setUsers] = useState([])
    const token = getAccessTokenApi()

    console.log(users)

    useEffect(() => {
        getUsersApi(token).then(response => {
            console.log(response)
        })
    }, [token])

    return (
        <div>
            <h1>Lista de Usuarios</h1>
        </div>
    )
}