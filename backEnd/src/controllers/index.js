const data = require("../data").data

// eslint-disable-next-line no-unused-vars
exports.getTime = (req, res, next) => {

	res.setHeader("Content-Type", "application/json")
	res.status(200).json({
		timeData: data.timeData
	})
}

exports.getMetrics= (req, res, next) => {
	res.setHeader("Content-Type", "application/json")
	res.status(200).json({
		"AAA":"XXXXXXXXXXXXXXXXXXX"
	})
}
