const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

PORT = 3030;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'bookstore',
});

app.use(cors());

app.use('/assets', express.static('assets'));


app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/api/booknames', (req, res) => {
  conn.query(`SELECT book_name,aut_name,cate_descrip,pub_name,book_price
  FROM book_mast
  JOIN category
  On category.cate_id = book_mast.cate_id
  JOIN author
  ON author.aut_id = book_mast.aut_id
  JOIN publisher
  ON publisher.pub_id = book_mast.pub_id`, (err, result) => {
      if (err) {
        res.json({
          error: err.message
        });
      }
      res.json({
        result,
      });
    });
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});









