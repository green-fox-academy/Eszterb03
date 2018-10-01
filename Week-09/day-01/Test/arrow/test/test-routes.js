'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../yondu');


test('yondu endpoint', (t) => {
  const distance = 200
  request(app.app)
    .get('/yondu?distance=' + distance)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.body, { distance: distance });
      t.end()
    });
});