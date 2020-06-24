const axios = require('axios');
import environment from '../env-config';

const htmlFetch = async({ route, method, body }) => {
    const baseURL = environment.dev.backEndUrl;
    const url = `${baseURL}${route}`;
    const headers = { "Content-Type": "application/json", "authorization": "mysecrettoken" };

    return await axios({
        method,
        url,
        headers,
        timeout: 1000,
        data: body
    });
};

export {
    htmlFetch
}