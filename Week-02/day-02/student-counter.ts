'use strict';

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

/*function sumAge (sumage: any){
  let map = sumage.map( five => five.candies <5 );
  console.log(map) */


function candieSUM(candies: any) {
  let candieNumber: number = 0;
  candies.forEach(element => {
    candieNumber += element.candies
  });
  console.log(candieNumber);
};
candieSUM(students);

function fiveSum(candies: any) {
  let fiveStudent: number = 0;
  candies.forEach(elem => {
    if (elem.candies < 5) {
      fiveStudent += elem.age;
    }
  });
  console.log(fiveStudent);
  };
fiveSum(students);
