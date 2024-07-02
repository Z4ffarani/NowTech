const { Router } = require("express")
const { getCarrinho, removeDoCarrinho } = require("../controladores/Carrinho")
const router = Router()

router.get("/", getCarrinho)
router.delete("/:id", removeDoCarrinho)

module.exports = router