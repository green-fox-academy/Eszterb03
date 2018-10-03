'use strict'

const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3030;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'quiz',
  multipleStatements: true,
});

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/game', (req, res) => {
  let randomNumber = Math.floor(Math.random() * 10)
  conn.query(`SELECT * FROM answers JOIN questions
  ON questions.id = answers.question_id
  Where question_id=${randomNumber};`, (err, quiz) => {
      if (err) {
        res.json({
          err: err.message,
        });
      } else {
        let quizElement = [];
        quiz.forEach(element => {
          quizElement.push(element)
        });
        console.log(quiz)

        res.status(200).json({
          question: quiz[0].question,
          id: quiz[0].id,
          answer: quizElement,
          is_correct: quiz[0].is_correct,
        });
      }
      // id: quiz[0].id,
      // question: quiz[0].question_id,
      // answers: quiz[0].answer,
    });
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});