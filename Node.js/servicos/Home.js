const fs = require("fs")

function getTodosProdutos() {
    return JSON.parse( fs.readFileSync("catalogo.json") )
}

function postTodosProdutos(id) {
    const catalogo = JSON.parse( fs.readFileSync("catalogo.json") )
    const carrinho = JSON.parse( fs.readFileSync("carrinho.json") )

    const produtoParaAdicionar = catalogo.find( produto => produto.id === id )
    const listaParaAtualizar = [ ...carrinho, produtoParaAdicionar ]
    fs.writeFileSync("carrinho.json", JSON.stringify(listaParaAtualizar))
}

module.exports = {
    getTodosProdutos,
    postTodosProdutos
}