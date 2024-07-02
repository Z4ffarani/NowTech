const { getTodosCarrinho, removeProdutoDoCarrinho } = require("../servicos/Carrinho")

function getCarrinho(req, res) {
    try {
        const produtos = getTodosCarrinho()
        res.send(produtos)
    } catch (error) {
        res.status(500)
        res.send("Não foi possível executar serviço getTodosCarrinho()")
    }
}

function removeDoCarrinho(req, res) {
    try {
        const id = req.params.id
        removeProdutoDoCarrinho(id)
        res.status(201)
        res.send("Serviço bem-sucedido")
    } catch (error) {
        res.status(500)    
        res.send("Não foi possível executar serviço removeProdutosDoCarrinho()")
    }
}

module.exports = {
    getCarrinho,
    removeDoCarrinho
}

