
window.onload = () => {
  const url = 'http://localhost:3030/questions'

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      let question = document.querySelector('h3');
      question.innerHTML = res.quiz[0].question
    })
}
