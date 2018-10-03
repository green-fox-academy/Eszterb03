
window.onload = () => {
  const url = 'http://localhost:3030/questions'
  let question = document.querySelector('h3');

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      question.innerText = res.quiz[0].question
      let i = 1;
      setInterval(() => {
        question.innerText = res.quiz[i].question,
          i++
      }, 3000)
    })
}
