const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const PORT = 8080;

app.post('/sith', jsonParser, (req, res) => {
})

app.listen(PORT, () => {
  console.log(`the server is u an running port ${PORT}`)
  console.log(changeEverySecond('This is my example sentence. Just for fun.'))
});

function changeEverySecond(text) {
  let splittedText = text.split('. ');
  let newText = [];
  splittedText.forEach(elem => {
    newText.push(elem.split(' '));
  });
  for (let firstIndex = 0; firstIndex < newText.length; firstIndex++) {
    for (let secondIndex = 0; secondIndex < newText[firstIndex].length; secondIndex++) {
      if (secondIndex % 2 == 1) {
        let tempElem = '';
        tempElem = newText[firstIndex][secondIndex - 1];
        newText[firstIndex][secondIndex - 1] = newText[firstIndex][secondIndex];
        newText[firstIndex][secondIndex] = tempElem;
      }
    }
  } return newText
};

