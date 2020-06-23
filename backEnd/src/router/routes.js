const express = require("express")
let router = express.Router();
const controller = require("../controllers")

router.get("/time", controller.getTime)

module.exports = router