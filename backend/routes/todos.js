const express = require("express")
const router = express.Router()
const todosCon = require("../controllers/todos")

router.get("/all", todosCon.all)

router.post("/add", todosCon.createOne)

router.patch("/edit/:id", todosCon.edit)

router.delete("/delete/:id", todosCon.deleteTodos)

module.exports = router