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