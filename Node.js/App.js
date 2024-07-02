const express = require("express")
const RouterHome = require("./rotas/Home")
const RouterCarrinho = require("./rotas/Carrinho")
const RouterComprados = require("./rotas/Comprados")
const path = require("path")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use("/home", RouterHome)
app.use("/carrinho", RouterCarrinho)
app.use("/comprados", RouterComprados)
app.use("/imagens", express.static(path.join(__dirname, "imagens")))

const port = 8000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
