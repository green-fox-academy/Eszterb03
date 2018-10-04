const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3030;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'spaceship',
  multipleStatements: true,
});

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/planets', (req, res) => {
  conn.query(`SELECT * FROM planet;`, (err, planets) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    } res.status(200).json({
      planets
    })
  })
});

app.post('/movehere/:planetid', (req, res) => {
  conn.query(`SELECT name FROM planet WHERE id=${req.params.planetid};`, (error, result) => {
    conn.query(`UPDATE spaceship SET planet='${result[0].name}';`, (currentError, currentResult) => {
      res.json({ currentResult });
    });
  });
});



app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});