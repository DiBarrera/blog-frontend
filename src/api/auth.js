import { basePath, apiVersion } from "./config";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import jwtDecode from "jwt-decode";

export function getAccessToken() {
    
    console.log("Toma el Access Token")

    const accessToken = localStorage.getItem(ACCESS_TOKEN)
    
    if(!accessToken || accessToken === "null") {
        return null
    }

    console.log(accessToken)

    return willExpireToken(accessToken) ? null : accessToken
}

export function getRefreshToken() {

    console.log("Aqui el Refresh Token")

    const refreshToken = localStorage.getItem(REFRESH_TOKEN)

    if(!refreshToken || refreshToken === "null") {
        return null
    }

    console.log(refreshToken)

    return willExpireToken(refreshToken) ? null : refreshToken
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