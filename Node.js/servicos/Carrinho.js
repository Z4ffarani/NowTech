const fs = require("fs")

function getTodosCarrinho() {
    return JSON.parse( fs.readFileSync("carrinho.json") )
}

function removeProdutoDoCarrinho(id) {
    const carrinho = JSON.parse( fs.readFileSync("carrinho.json") )

    const produtoFiltrado = carrinho.filter( produto => produto.id !== id )
    fs.writeFileSync("carrinho.json", JSON.stringify(produtoFiltrado))
}   

module.exports = {
    getTodosCarrinho,
    removeProdutoDoCarrinho
}