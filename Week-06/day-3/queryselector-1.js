// You can work in the html or in a separate js file. Like:
//     <script>
//       1. store the element that says 'The King' in the 'king' variable.
//       console.log it.
//       2. store 'The Businessman' and 'The Lamplighter'
//       in the 'businessLamp' variable.
//       console.log each of them.
//       3. store 'The King' and 'The Conceited Man'
//       in the 'conceitedKing' variable.
//       alert them one by one.
//       4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//       in the 'noBusiness' variable.
//       console.log each of them.
//     </script>

let king = document.getElementById('b325');
// console.log(king.className);
console.log('king', king);

let businessLamp = document.getElementsByClassName('asteroid big');
console.log('businessLamp', businessLamp);

let theconceitedMan = document.getElementsByClassName('asteroid b326')

let container = document.getElementsByClassName('container')
let conceitedKing = container[0].querySelectorAll('section.container > div')
console.log(conceitedKing);
alert(conceitedKing[0].textContent);
alert(conceitedKing[1].textContent);


let noBusiness = document.querySelectorAll("div")
// console.log(noBusiness[0], noBusiness[1], noBusiness[2]);
console.log(noBusiness)