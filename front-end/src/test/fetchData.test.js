import axios from 'axios';
 
jest.mock('axios');
describe.only("fetch data", () => {
    beforeEach(() => {
     
    })
    test('fetches successfully data from backend server', async() => {
      const data = {}
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
    });
    test('fetches erroneously data from an API', async () => {
      const errorMessage = 'Network Error';
      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
      );
    });
});