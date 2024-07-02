const { getTodosComprados, postarProdutoComprado, removeProdutoComprado } = require("../servicos/Comprados")

function getComprados(req, res) {
    try {
        const produtos = getTodosComprados()
        res.send(produtos)
    } catch (error) {
        res.status(500)
        res.send("Não foi possível executar serviço getTodosComprados()")
    }
}

function postarComprado(req, res) {
    try {
        const id = req.params.id
        postarProdutoComprado(id)
        res.status(201)
        res.send("Serviço bem-sucedido")
    } catch (error) {
        res.status(500)
        res.send("Não foi possível executar serviço postarProdutoComprado()")
    }
}

function removeComprado(req, res) {
    try {
        const id = req.params.id
        removeProdutoComprado(id)
        res.status(201)
        res.send("Serviço bem-sucedido")
    } catch (error) {
        res.status(500)
        res.send("Não foi possível executar serviço removeProdutoComprado()")
    }
}


module.exports = {
    getComprados,
    postarComprado,
    removeComprado
}
