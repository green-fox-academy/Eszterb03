
window.onload = () => {
  const url = 'http://localhost:3030/game'
  let question = document.querySelector('h3');
  let answer1 = document.querySelector('#answer1');
  let answer2 = document.querySelector('#answer2');
  let answer3 = document.querySelector('#answer3');
  let answer4 = document.querySelector('#answer4');

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      question.innerText = res.question;
      answer1.innerText = res.answer[0].answer;
      answer2.innerText = res.answer[1].answer;
      answer3.innerText = res.answer[2].answer;
      answer4.innerText = res.answer[3].answer;
    })

  setInterval(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        question.innerText = res.question;
        answer1.innerText = res.answer[0].answer;
        answer2.innerText = res.answer[1].answer;
        answer3.innerText = res.answer[2].answer;
        answer4.innerText = res.answer[3].answer;
      })
  }, 3000)
}
