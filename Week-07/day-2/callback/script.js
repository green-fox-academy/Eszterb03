'use strict';

const mapWith = (array, callback) => {
  let output = [];
  array.map(elem => {
    let newElem = callback(elem)
    output.push(newElem)
  });
  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
}//expected result: [2, 3, 4]


const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
  let sliced = word.slice(0, 1) + word.slice(2, word.length)
  return sliced
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']