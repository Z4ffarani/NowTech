import axios from "axios"

const CompradosAPI = axios.create({baseURL: "http://localhost:8000/comprados"})

async function getComprados() {
    const response = await CompradosAPI.get("/")
    return response.data
}

async function postarComprado(id) {
    await CompradosAPI.post(`/${id}`)
}

async function removeComprado(id) {
    await CompradosAPI.delete(`/${id}`)
}

export {
    getComprados,   
    postarComprado,
    removeComprado
}