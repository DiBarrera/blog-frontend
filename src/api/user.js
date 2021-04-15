import { basePath, apiVersion } from "./config";

export function signUpApi(data) {

    const url = `${basePath}/${apiVersion}/sign-up`;
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }
    //     // "Content-Type": "application/json; charset=utf-8",
    //     // "Access-Control-Allow-Origin: *": "http://localhost:3000/api",
    //     // "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS": "http://localhost:3000/api",
    //     // "Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token": "http://localhost:3000/api"

    console.log(data)
    console.log(fetch)
    console.log(basePath)
    console.log(apiVersion)
    console.log(url)
    console.log(params)

    const myObjStr = JSON.stringify(data)
    console.log(myObjStr)
    console.log(JSON.parse(myObjStr))

    return fetch(url, params)
        .then(response => {
            console.log(data)
            console.log(fetch)
            console.log(url)
            console.log(params)
            console.log(response)
            return response.json()
        })
        .then(result => {
            console.log(result)
            console.log(result.user)
            if (result.user) {
                console.log(`Usuario creado ---> ${result}`)
                return { 
                    result,
                    status: 200,
                    ok: true, 
                    message: "Usuario creado correctamente" 
                    }                
                }
                return {
                    result,
                    ok: false,
                    message: result.message
                }
        })
        .catch(err => {
            console.log(err)
            console.log(err.message)
            return { ok: false, message: err.message };
        });
}

export function signInApi(data) {
    const url = `${basePath}/${apiVersion}/sign-in`
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    }
    //         // "Content-Type": "application/json; charset=utf-8",
    //         // "Access-Control-Allow-Origin: *": "http://localhost:3000/api",
    //         // "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS": "http://localhost:3000/api",
    //         // "Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token": "http://localhost:3000/api"
    console.log(data)
    console.log(fetch)
    console.log(basePath)
    console.log(apiVersion)
    console.log(url)
    console.log(params)
    console.log(data)

    return fetch(url, params)
        .then(response => {
            console.log(data)
            console.log(fetch)
            console.log(url)
            console.log(params)
            console.log(response)
            return response.json()
        })
        .then(result => {
            console.log(result)
            console.log(result.accessToken)
            console.log(result.refreshToken)
            return result
        })
        .catch(err => {
            console.log(err)
            return err.message
        })
}

export function getUsersApi(token) {

    const url = `${basePath}/${apiVersion}/users`

    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }

    console.log(token)
    console.log(url)
    console.log(params)

    return fetch(url, params)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(result => {
            console.log(result)
            return result
        })
        .catch(err => {
            console.log(err)
            return err.message
        })
}

export function getUsersActiveApi(token, status) {

    const url = `${basePath}/${apiVersion}/users-active?active=${status}`

    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }

    console.log(token)
    console.log(url)
    console.log(params)

    return fetch(url, params)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(result => {
            console.log(result)
            return result
        })
        .catch(err => {
            console.log(err)
            return err.message
        })
}

export function uploadAvatarApi(token, avatar, userId) {

    const url = `${basePath}/${apiVersion}/upload-avatar/${userId}`

    const formData = new FormData()
    formData.append("avatar", avatar, avatar.name)

    const params = {
        method: "PUT",
        body: formData,
        headers: {
            Authorization: token
        }
    }

    return fetch(url, params)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then (result => {
            console.log(result)
            return result
        })
        .catch(err => {
            console.log(err)
            return err.message
        })
}

export function getAvatarApi(avatarName) {

    const url = `${basePath}/${apiVersion}/get-avatar/${avatarName}`

    return fetch(url)
        .then(response => {
            console.log(response)
            return response.url
        })
        .catch(err => {
            console.log(err)
            return err.message
        })
}

export function updateUserApi(token, user, userId) {

    const url = `${basePath}/${apiVersion}/update-user/${userId}`

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(user)
    }

    return fetch(url, params)
        .then(response => {
            console.log(response)
            console.log(`Este es el response ---> ${response}`)
            return response.json()
        })
        .then(result => {
            console.log(result)
            console.log(`Este es el result ---> ${result}`)
            return result
        })
        .catch(err => {
            console.log(err)
            console.log(`Este es el err ---> ${err}`)
            return err.message
        })
}