'use strict'

const express = require('express');
const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page',
    header: 'Green Fox Academy',
  });
});

app.get('/products/:id', (req, res) => {
  console.log(req.query);
  console.log(req.query.fox); // ?fox=green & class= coffee,
  res.render('home', {
    title: 'Product page',
    header: req.params.id, //param: query?
    withGoodBye: req.query.withGoodBye == 'true',
  });
});

app.listen(PORT, () => {
  console.log(`the server is u an running port ${PORT}`)
});
