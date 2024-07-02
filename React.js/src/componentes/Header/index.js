import styled from "styled-components"
import ShopCar from "../../imagens/carrinho.png"
import { Link } from "react-router-dom"

const Direcionar = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`
const Fundo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.5);
    padding: 40px;
    margin-bottom: 10px;
`
const Titulo = styled.h1`
    color: white;
    font-weight: 500;
    margin: 0;
    transition: 200ms ease;
    &:hover {
        scale: 105%;
    }
`
const ImagemCarrinho = styled.img`
    width: 60px;
    height: 50px;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
        scale: 110%;
    }
`

function Header() {
    return (
        <Fundo>
            <Direcionar to={"/"}><Titulo>NowTech</Titulo></Direcionar>
            <Direcionar to={"/carrinho"}><ImagemCarrinho src={ShopCar}/></Direcionar>
        </Fundo>
    )
}

export default Header