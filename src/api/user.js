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