const data = require('../data').data;
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
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            timeData: data.timeData
        });
    }
};

