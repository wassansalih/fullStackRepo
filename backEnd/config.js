
const env = process.env.NODE_ENV || 'development';

const environments = {
    development: {
        env: 'development',
        port: 3000
    },
    production: {
        env: 'production',
        port: 3000
    },
    test: {
        env: 'test',
        port: 3000
    }

};

const config = environments[env];

module.exports = config;