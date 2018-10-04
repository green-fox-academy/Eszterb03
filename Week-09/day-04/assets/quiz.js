window.onload = () => {
  const URL = 'http://localhost:3030/questions'
  const manage = document.querySelector('.manage')

  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      res.quiz.forEach(element => {
        const question = document.createElement('p')
        manage.appendChild(question)
        question.innerText = element.question
      });
    })
  // form.addEventListener('submit', (event) => {
  // event.preventDefault();
  // const { question, answer1, answer2, answer3, answer4, } = event.target.elements;

  // let radioBtnBoolean = [];
  // for (let i = 0; i < event.target.elements.is_correct.length; i++) {
  //   results.push(event.target.elements.is_correct[i].checked);
  // }

  // console.log(results)
  // const bodyToSend = {
  //   tips: results
  // }

  // const body = { name: question.value, answer1: answer1.value, answer2: answer2.value, answer3: answer3.value, answer4: answer4.value gender: selected };

  //   const URL = 'http://localhost:3030/questions';

  //   fetch(URL, {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8'
  //     },
  //     redirect: 'error',
  //     mode: 'cors',
  //     body: JSON.stringify(bodyToSend)
  //   })
  //     .then(resp => resp.json())

  //     .catch(respErr => {
  //       console.log('got no resp', respErr);
  //     })
  //     .then(response => {
  //       document.querySelector('#res').innerHTML = response.answer;
  //     })
  //     .catch(error => {
  //       console.log('hiba', error);
  //     })
  // });
} 