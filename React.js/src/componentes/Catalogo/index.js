import { useState, useEffect } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { getProdutos, postProdutos } from "../../servicos/Home"
import Comprados from "../Comprados/index"

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
html, body {
    margin: 0;
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
  background-color: #151e3d;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  transition: 500ms ease;
  &:hover {
    transform: scale(1.05);
    border: solid white 2px;
    box-shadow: 0px 0px 20px white;
  }
`
const Imagem = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 10px;
`
const Titulo = styled.h1`
    color: white;
    font-weight: 600;
    margin: 15px 0px;
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
const AddCarrinho = styled.button`
    font-size: 1.2rem;
    font-weight: 600;
    background-color: green;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 15px;
    color: white;
    transition: 200ms ease;
    &:hover {
        background-color: white;
        color: green;
    }
`

function Catalogo() {
    const [produtos, setProdutos] = useState([])

    async function fetchProdutos() {
        const CatalogoAPI = await getProdutos()
        setProdutos(CatalogoAPI)
    }

    async function adicionarAoCarrinho(id) {
        await postProdutos(id)
        alert(`Produto adicionado ao carrinho!`)
    }
    
    useEffect(() => {
        fetchProdutos()
    }, [])

    return (
        <>
        <GlobalStyle />
            <FundoSite>
                <TituloArea>PRODUTOS</TituloArea>
                <FundoMostruario>
                    {produtos.map((produto) => (
                        <Produto key={produto.id}>
                            <Imagem src={produto.imagem} alt={produto.nome} />
                            <Titulo>{produto.nome}</Titulo>
                            <AddCarrinho onClick={() => adicionarAoCarrinho(produto.id)}>Adicionar ao carrinho</AddCarrinho>
                        </Produto>
                    ))}
                </FundoMostruario>
            </FundoSite> 
            <Comprados />
        </>
    )
}

export default Catalogo