import styled from "styled-components"
import { getComprados, removeComprado } from "../../servicos/Comprados"
import { useState, useEffect } from "react"

const Fundo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 40px;
`
const Titulo = styled.h1`
    color: white;
    font-weight: 500;
    margin: 0;
    user-select: none;
    transition: 200ms ease;
    &:hover {
        text-shadow: 0px 0px 20px blue;
    }
`
const MostruarioComprados = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`
const ImagemProduto = styled.img`
    width: 100px;
    height: 100px;
    border: solid blue 3px;
    border-radius: 10px;
    margin: 0px 15px;
    padding: 0px;
    transition: 200ms ease;
    &:hover {
        scale: 110%;
        box-shadow: 0px 0px 20px blue; 
    }
`
const BotaoReembolsar = styled.button`
    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
`

function Comprados() {
    const [produtosComprados, setProdutosComprados] = useState([])

    async function fetchComprados() {
        const CompradosAPI = await getComprados()
        setProdutosComprados(CompradosAPI)
    }

    async function reembolsarComprado(id) {
        await removeComprado(id)
        alert("Produto reembolsado com sucesso.")
        await fetchComprados()
    }

    useEffect(() => {
        fetchComprados()
    }, [])

    return (
        <Fundo>
            <Titulo>ITENS COMPRADOS</Titulo>
            <MostruarioComprados>
                {produtosComprados.map((produto) => (
                    <BotaoReembolsar key={produto.id} onClick={() => reembolsarComprado(produto.id)}><ImagemProduto src={produto.imagem} alt={produto.nome}/></BotaoReembolsar>
                ))}
            </MostruarioComprados>
        </Fundo>    
    )
}

export default Comprados
