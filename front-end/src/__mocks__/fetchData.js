
const fetchData = async({ route, method, body }) => {
  if(route === '/time' && method === 'GET') {
    return Promise.resolve({
        data: {
            timeData: {
              properties: {
                epoch: {
                  timeInSeconds: 55555
                }
              }
            }
          }
    });
  } else {
    return Promise.resolve({data: 'Metrics text'})
  }
};

export { fetchData }