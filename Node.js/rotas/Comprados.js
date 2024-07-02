const { Router } = require("express")
const { getComprados, postarComprado, removeComprado } = require("../controladores/Comprados")
const router = Router()

router.get("/", getComprados)
router.post("/:id", postarComprado)
router.delete("/:id", removeComprado)

module.exports = router


