const expect = require('expect');
const request = require('supertest');

const { app } = require('../../server');
const categories = require('../../seeds/categories');
const {populateCategories} = require('../_seed');

beforeEach(populateCategories);

describe('GET /api/categories', () => {
  it('should get all product categories', done => {
    request(app)
      .get('/api/categories')
      .expect(200)
      .expect(res => {
        expect(res.body.categories.length).toBe(categories.length);
      })
      .end(done);
  });
});
