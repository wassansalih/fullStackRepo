import axios from 'axios';
// import environment from '../env-config';

const fetchData = async({ route, method, body }) => {
    const baseURL = 'http://localhost:5000' // environment.dev.backEndUrl;
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

export { fetchData }