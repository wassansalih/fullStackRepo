const express = require("express")
const app = express()
const data = require("../controllers")

app.get("/time", data.getTime)
app.get("/metrics", data.getMetrics)

module.exports = app