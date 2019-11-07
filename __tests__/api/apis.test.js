import axios from 'axios';

describe('Test the sanity api', () => {
  test('It should response the GET method', async () => {
    var scFetch = await axios.get('http://localhost:3000/api/sanity');
    expect(scFetch.status).toBe(200);
  })
});