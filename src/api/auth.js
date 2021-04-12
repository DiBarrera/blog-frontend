import { basePath, apiVersion } from "./config";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import jwtDecode from "jwt-decode";

export function getAccessTokenApi() {
    
    console.log("Toma el Access Token")

    const accessToken = localStorage.getItem(ACCESS_TOKEN)
    
    if(!accessToken || accessToken === "null") {
        return null
    }

    console.log(accessToken)

    return willExpireToken(accessToken) ? null : accessToken
}

export function getRefreshTokenApi() {

    console.log("Aqui el Refresh Token")

    const refreshToken = localStorage.getItem(REFRESH_TOKEN)

    if(!refreshToken || refreshToken === "null") {
        return null
    }

    console.log(refreshToken)

    return willExpireToken(refreshToken) ? null : refreshToken
}

export function refreshAccessToken(refreshToken) {

    const url = `${basePath}/${apiVersion}/refresh-access-token`
    const bodyObj = {
        refreshToken: refreshToken
    }

    const params = {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers: {
            "Content-Type": "application/json"
        }
    }

    console.log(fetch)
    console.log(basePath)
    console.log(apiVersion)
    console.log(url)
    console.log(params)
    console.log(bodyObj)

    fetch(url, params)
        .then(response => {
            console.log(response)
            if(response.status !== 200) {
                return null
            }
            return response.json()
        })
        .then(result => {
            if(!result) {
                // TO DO: Deslogar usuario
                logout()
            } else {
                console.log(result)
                console.log(result.accessToken)
                console.log(result.refreshTken)
                console.log(ACCESS_TOKEN)
                console.log(accessToken)
                console.log(REFRESH_TOKEN)
                console.log(refreshTken)
                const { accessToken, refreshTken } = result
                localStorage.setItem(ACCESS_TOKEN, accessToken)
                localStorage.setItem(REFRESH_TOKEN, refreshTken)
            }
        })

}

export function logout() {
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
}

export function willExpireToken(token) {

    const seconds = 60
    const metaToken = jwtDecode(token)
    const { exp } = metaToken
    // const expCaducado = exp + 1000000000000000000
    const now = (Date.now() + seconds) / 1000

    console.log(metaToken)

    // return now < expCaducado
    return now > exp
}