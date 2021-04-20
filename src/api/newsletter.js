import { basePath, apiVersion } from "./config";

export function subscribeNewsletterApi(email) {

    const url = `${basePath}/${apiVersion}/subscribe-newsletter/${email.toLowerCase()}`
    const params = {
        method: "POST"
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