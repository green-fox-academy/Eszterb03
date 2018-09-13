'use strict'

const express = require('express');
const app = express();
const PORT = 3030;

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page',
    header: 'Things to do today ',
    todos: todos,
  });
});

app.listen(PORT, () => {
  console.log(`the server is u an running port ${PORT}`)
});