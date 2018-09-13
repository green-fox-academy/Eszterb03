'use strict'

const express = require('express');
const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  if (req.query.kiscica !== undefined) {
    res.render('home', {
      title: 'Home Page',
      name: req.query.kiscica,
    });
  } else {
    res.render('home', {
      title: 'Home Page',
      name: 'Guest'
    });
  }
});

app.listen(PORT, () => {
  console.log(`the server is u an running port ${PORT}`)
});