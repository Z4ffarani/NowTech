const { getTodosProdutos, postTodosProdutos } = require("../servicos/Home")

function getProdutos(req, res) {
    try {
        const produtos = getTodosProdutos()
        res.send(produtos)
    } catch (error) {
        res.status(500)
        res.send("Não foi possível executar serviço getTodosProdutos()")
    }
}

function postProdutos(req, res) {
    try {
        const id = req.params.id
        postTodosProdutos(id)
        res.status(201)
        res.send("Serviço bem-sucedido")
    } catch (error) {
        res.status(500)    
        res.send("Não foi possível executar serviço postTodosProdutos()")
    }
}

module.exports = {
    getProdutos,
    postProdutos
}

