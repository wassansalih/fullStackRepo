
// eslint-disable-next-line no-unused-vars
const fetchData = ({ route, method, body }) => {
    console.log("ssssssssssssssssssssssssss")
    if(route === '/time' &&  method === 'GET') {
        return Promise.resolve({
            data: {
                timeData: { properties: {epoch: {timeInSeconds: 555555555555}}, type: 'object' }
              },
              status: 200,
              statusText: 'OK',
        });
    }
    else {
        return Promise.resolve({
            data: {}
        });
    };
};

export { fetchData };