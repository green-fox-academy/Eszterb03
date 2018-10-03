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

app.get('/questions', (req, res) => {
  conn.query(`SELECT * FROM questions;`, (err, quiz) => {
    if (err) {
      console.log(err.toString());
      re.status(500).send('Database error');
      return;
    } res.status(400).json({
      quiz
    })
  })
});

app.post('/questions', (req, res) => {
  if (req.body.question) {
    conn.query('INSERT INTO questions(question) VALUES(?);', [req.body.question], (err, quiz) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      const idAnswer = quiz.insertId
      console.log(idAnswer)
      conn.query(`INSERT INTO answers(question_id, answer, is_correct) VALUES(${idAnswer},'${req.body.answer1}', 0),(${idAnswer},'${req.body.answer2}', 0),(${idAnswer},'${req.body.answer3}', 0),(${idAnswer},'${req.body.answer4}', 0);`, (err, quiz) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        } conn.query(`SELECT * FROM answers WHERE question_id = ${idAnswer};`, (err, result) => {
          if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
          }
          console.log(result)
          res.redirect('/');
        })
      })
    })
  }
})

app.delete('/question/:id', (req, res) => {
  let id = req.params.id;
  if (id) {
    conn.query(`DELETE FROM posts WHERE posts.id = ${id}`, (err, posts) => {
      if (err) {
        res.status(500).json({
          err: err.message,
        });
      };
      res.status(404).json({
        err: "This post doesn't exist",
      });
    });
  } else {
    res.json({
      err: "Please provide an ID",
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});