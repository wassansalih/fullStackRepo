
// import environment from '../env-config';

// eslint-disable-next-line no-unused-vars
const fetchData = ({ route, method, body }) => {
   return Promise.resolve({
        timeData: {
            properties:{
                epoch: {
                    timeInSeconds: 123456
                }
            }
        }
   });
};

export {
    fetchData
}