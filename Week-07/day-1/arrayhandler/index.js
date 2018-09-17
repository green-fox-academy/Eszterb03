const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const PORT = 8080;

app.post('/arrays', jsonParser, (req, res) => {
  if (req.body.what === 'sum') {
    res.json({
      result: sum(req.body.numbers)
    });
  } else if (req.body.what === 'multiply') {
    res.json({
      result: multiply(req.body.numbers)
    });
  } else if (req.body.what === 'double') {
    res.json({
      result: double(req.body.numbers)
    });
  } else {
    res.status(404).json({
      error: 'Please provide what to do with the numbers!'
    })
  }
});

app.listen(PORT, () => {
  console.log(`the server is u an running port ${PORT}`)
});

function multiply(myArray) {
  return myArray.reduce((a, b) => a * b);
}

function sum(myArray) {
  return myArray.reduce((a, b) => a + b);
}

function double(myArray) {
  return myArray.map(a => a * 2);
}