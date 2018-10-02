'use strict'
const url = 'http://localhost:3030';


window.onload = () => {
  const button = document.querySelector('button');
  const parentElement = document.querySelector('div')



  button.addEventListener('click', () => {

    fetch(`${url}/api/joke`)
      .then((resp) => (resp.json()))
      .then((resp) => {
        let para = document.createElement('p')
        parentElement.appendChild(para)
        para.innerHTML = resp.value.joke
      });
  })


}
