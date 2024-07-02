import axios from "axios"

const CatalogoAPI = axios.create({baseURL: "http://localhost:8000/home"})

async function getProdutos() {
    const response = await CatalogoAPI.get("/")
    return response.data
}

async function postProdutos(id) {
    await CatalogoAPI.post(`/${id}`)
}

export {
    getProdutos,
    postProdutos
}