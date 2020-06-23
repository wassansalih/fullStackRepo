
// eslint-disable-next-line no-unused-vars
exports.getTime = (req, res, next) => {

	const data = {
		"properties": {
			"epoch": {
				"description": "The current server time, in epoch seconds, at time of processing the request.",
				"type": "number"
			}
		},
		"required": ["epoch"],
		"type": "object"
	}
	res.setHeader("Content-Type", "application/json")
	res.status(200).json({
		data
	})
}

exports.getMetrics= (req, res, next) => {
	res.setHeader("Content-Type", "application/json")
	res.status(200).json({
		"AAA":"XXXXXXXXXXXXXXXXXXX"
	})
}
