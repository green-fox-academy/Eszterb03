// <!-- You can work in the html or in a separate js file. Like:
// <script>
//   fill every paragraph with the last one's content.
//   fill every paragraph with the last one's content keeping the cat strong.
// </script>
// OR
// <script src="content-1.js"></script> -->

let apple = document.getElementsByClassName("apple");
console.log(apple.textContent);
let appleBallon = document.getElementsByClassName("apple");
console.log(appleBallon.textContent);
let catBallon = document.getElementsByClassName("balloon");
console.log(catBallon.textContent);
let animalsCat = document.getElementsByClassName("cat");
console.log(animalsCat.textContent);
let animals = document.getElementsByClassName("animals");

console.log(animals.innerHTML);
