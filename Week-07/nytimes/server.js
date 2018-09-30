
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
PORT = 3030;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/api/moon', (req, res) => {
  let url =
    [
      'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      `?api-key=80977b16d5e7472786b8c2d3d4068a9b`,
      `&q=apollo11`,
    ].join('');
  fetch(url)
    .then((resp) => (resp.json()))
    .then(response => {
      res.json(response);
    });
});

app.listen(PORT, (res, req) => {
  console.log(`the port is running ${PORT}`)
})