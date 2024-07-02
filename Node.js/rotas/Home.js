const { Router } = require("express")
const { getProdutos, postProdutos } = require("../controladores/Home")
const router = Router()

router.get("/", getProdutos)
router.post("/:id", postProdutos)

module.exports = router


