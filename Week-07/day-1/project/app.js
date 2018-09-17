const express = require('express');
const app = express();
const PORT = 8080;

const path = require('path');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let numberBase = req.query.input;
  if (req.query.input !== undefined) {
    res.json({
      received: numberBase,
      result: numberBase * 2
    })
  } else {
    res.json({ error: "Please provide an input!", })
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name !== undefined && title !== undefined) {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
    })()
  } else if (name !== undefined) {
    res.json({
      error: "Please provide a title!",
    });
  } else {
    res.json({
      error: "Please provide a name!",
    })
  }
});

app.get('/appenda/:word', (req, res) => {
  if (req.params.word) {
    appendaWord = req.params.word
    // let appendaWord = req.params.word + `a`; // `${req.params.word}a`
    res.json({
      appended: appendaWord.concat('a'),
    });
  } else {
    res.status(404).json({
      error: `Not Found`,
    });
  }
});

app.post('/dountil/:action', (req, res) => {
  if (req.params.action === 'sum') {

  }
});

app.listen(PORT, () => {
  console.log(`the server is u an running port ${PORT}`)
});