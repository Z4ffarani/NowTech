import { useState, useEffect } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { getCarrinho, removeDoCarrinho } from "../../servicos/Carrinho"
import { getComprados, postarComprado } from "../../servicos/Comprados"
import Comprados from "../Comprados/index"

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
html, body {
    margin: 0;
    height: 100%;   
    background-color: #040d23;
}
`
const FundoMostruario = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #040d23;
    flex-wrap: wrap; 
    width: 100%; 
    padding: 0px 20px; 
`
const FundoSite = styled.div`
    background-color: #040d23;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`
const Produto = styled.div`
    display: flex;
    flex-direction: column;
    border: solid white 2px;
    background-color: #151e3d;
    border-radius: 10px;
    padding: 10px;
    margin: 20px;
`
const Imagem = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 10px;
`
const Titulo = styled.h1`
    color: white;
    font-weight: 600;
    margin: 5px 0px;
    text-align: center;
`
const Preco = styled.p`
    color: white;
    font-weight: 400;
    margin: 10px 0px;
    font-size: 1.5rem;
    text-align: center;
`
const TituloArea = styled.p`
    color: white;
    padding: 20px 40px;
    font-weight: 500;
    font-size: 1.4rem;
    margin: 0;
    user-select: none;
`
const AdquirirProduto = styled.button`
    font-size: 1.5rem;
    font-weight: 550;
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: green;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 13px;
    color: white;
    transition: 500ms ease;
    &:hover {
        background-color: blue;
        color: white;
    }
`
const RemoverCarrinho = styled.button`
    font-size: 1.2rem;
    font-weight: 300;
    background-color: transparent;
    border: solid 2px red;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    color: red;
    transition: 200ms ease;
    &:hover {
        background-color: red;
        color: white;
    }
`

function Carrinho() {
    const [produtosCarrinho, setCarrinho] = useState([])
    const [produtosComprados, setComprados] = useState([])

    async function fetchCarrinho() {
        const CarrinhoAPI = await getCarrinho()
        setCarrinho(CarrinhoAPI)
    }

    async function fetchComprados() {
        const CompradosAPI = await getComprados()
        setComprados(CompradosAPI)
    }

    async function comprarProduto(id) {
        await postarComprado(id)
        await removeDoCarrinho(id)
        await fetchCarrinho()
        await fetchComprados()
        alert("Agradecemos pela sua compra!")
    }

    async function tirarDoCarrinho(id) {
        await removeDoCarrinho(id)
        await fetchCarrinho()
        alert("Produto removido do carrinho!")
    }

    useEffect(() => {
        fetchCarrinho()
        fetchComprados()
    }, [])

    return (
        <>
        <GlobalStyle />
            <FundoSite>
                <TituloArea>MEU CARRINHO</TituloArea>
                <FundoMostruario>
                    {produtosCarrinho.map((produto) => (
                        <Produto key={produto.id}>
                            <Imagem src={produto.imagem} alt={produto.nome} />
                            <Titulo>{produto.nome}</Titulo>
                            <Preco>{produto.preco}</Preco>
                            <AdquirirProduto onClick={() => comprarProduto(produto.id)}>Comprar</AdquirirProduto>
                            <RemoverCarrinho onClick={() => tirarDoCarrinho(produto.id)}>Remover do carrinho</RemoverCarrinho>
                        </Produto>
                    ))}
                </FundoMostruario>
            </FundoSite>
            <Comprados key={produtosComprados} />
        </>
    )
}

export default Carrinho