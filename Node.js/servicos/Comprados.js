const fs = require("fs")

function getTodosComprados() {
    return JSON.parse( fs.readFileSync("comprados.json") )
}

function postarProdutoComprado(id) {
    const carrinho = JSON.parse( fs.readFileSync("carrinho.json") )
    const comprados = JSON.parse( fs.readFileSync("comprados.json") )

    const produtoParaAdicionar = carrinho.find( produto => produto.id === id )
    const novaListaComprados = [...comprados, produtoParaAdicionar]
    fs.writeFileSync("comprados.json", JSON.stringify(novaListaComprados))
}

function removeProdutoComprado(id) {
    const comprados = JSON.parse( fs.readFileSync("comprados.json") )

    const produtoFiltrado = comprados.filter( produto => produto.id !== id )
    fs.writeFileSync("comprados.json", JSON.stringify(produtoFiltrado))
}

module.exports = {
    getTodosComprados,
    postarProdutoComprado,
    removeProdutoComprado
}