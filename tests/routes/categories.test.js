const axios = require('axios');

const startServer = require('../../server');
const categoriesSeed = require('../../seeds/categories');
const { populateCategories } = require('../_seed');

const api = axios.create({
	baseURL: 'http://localhost:3001/api',
})

let server;

beforeAll(async () => {
  server = await startServer();
});

afterAll(done => {
  server.close(done);
});

beforeEach(populateCategories);

describe('GET /api/categories', () => {
  test('should get all product categories', async () => {
		const categories = await api.get('/categories').then(res => res.data.categories);
		expect(categories).toHaveLength(categoriesSeed.length);
		console.log(categories.length);
  });
});
