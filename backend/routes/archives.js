const express = require("express")
const router = express.Router()
const archiveCon = require("../controllers/archives")

router.get("/all", archiveCon.all)

router.post("/add", archiveCon.createOne)

module.exports = router