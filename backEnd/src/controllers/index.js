const { timeData } = require('../data');
const { token } = require('../data/mySecretData');

// eslint-disable-next-line no-unused-vars
exports.getTime = (req, res, next) => {
    const auth = req.headers.authorization;
    if(auth !== token) {
        res.setHeader('Content-Type', 'application/json');
        res.status(403).json({
            error: {
                message: 'UnAuthorized user',
                code:403
            }
        });
    } else {
        timeData.properties.epoch.timeInSeconds = new Date().getTime() / 1000;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            timeData
        });
    }
};

