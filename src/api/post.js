import { basePath, apiVersion } from "./config";

export function getPostApi(limit, page) {

    const url = `${basePath}/${apiVersion}/get-posts?limit=${limit}&page=${page}`

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
            return err
        })
}

export function deletePostApi(token, id) {

    const url = `${basePath}/${apiVersion}/delete-post/${id}`

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }

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
            return err
        })
}