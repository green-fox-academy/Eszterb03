// <!-- You can work in the html or in a separate js file. Like:
// <script>
//   fill every paragraph with the last one's content.
//   fill every paragraph with the last one's content keeping the cat strong.
// </script>


let animals = document.querySelectorAll('p');
for (let i = 0; i < animals.length; i++) {
  animals[i].textContent = animals[animals.length - 1].textContent;
};

let animals = document.querySelectorAll('p');
for (let i = 0; i < animals.length; i++) {
  animals[i].innerHTML = animals[animals.length - 1].innerHTML;
};