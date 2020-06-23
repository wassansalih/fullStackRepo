const express = require("express")
let router = express.Router();
const controller = require("../controllers")

router.get("/time", controller.getTime)
router.get("/metrics", controller.getMetrics)

module.exports = router