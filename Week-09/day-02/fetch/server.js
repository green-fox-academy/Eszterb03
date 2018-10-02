const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
PORT = 3030;


app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/api/joke', (req, res) => {
  let url = 'http://api.icndb.com/jokes/random'
  fetch(url)
    .then((resp) => (resp.json()))
    .then(response => {
      res.json(response);
    });
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});