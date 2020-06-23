
const app = require("express")()
const config = require("./config")
const PORT = process.env.PORT || config.port
const router = require("./src/router/routes")
const jsonParser = require("body-parser").json
const cors = require("cors")
const promMid = require('express-prometheus-middleware');

const { token } = require("./src/data/mySecretData")

app.use(jsonParser())
app.use(cors())
app.use(router)

app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`)
})

app.use(promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    authenticate: req => req.headers.authorization === token
}))

app.use((err, req, res, next) => {
	if (err.status) {
		return res.status(err.status).json({ message: err.message })
	}
	next(err)
})
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	res.status(500).json({ message: "SERVER ERROR" })
})

module.exports = app