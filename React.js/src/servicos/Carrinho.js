import axios from "axios"

const CarrinhoAPI = axios.create({baseURL: "http://localhost:8000/carrinho"})

async function getCarrinho() {
    const response = await CarrinhoAPI.get("/")
    return response.data
}

async function removeDoCarrinho(id) {
    await CarrinhoAPI.delete(`/${id}`)
}


export {
    getCarrinho,
    removeDoCarrinho
}