
const env = process.env.NODE_ENV || 'development';

const environments = {
    development: {
        env: 'development',
        port: 5000
    },
    production: {
        env: 'production',
        port: 5000
    },
    test: {
        env: 'test',
        port: 5000
    }

};

const config = environments[env];

module.exports = config;