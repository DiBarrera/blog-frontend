import { basePath, apiVersion } from "./config";

export function getMenuApi() {

    const url = `${basePath}/${apiVersion}/get-menus`

    console.log(url)

    return fetch(url)
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