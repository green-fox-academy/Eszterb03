const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('/assets/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

// app.get('/', (req, res) => {
// res.send('pong');
//   res.json({
//     message: 'ping'
//   });
// });

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong'
  });
});


app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`)
});