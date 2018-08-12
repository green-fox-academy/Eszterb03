'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;

function containsSeven1(inputNumber: number[]) {
    if (inputNumber.indexOf(7) > 0) {
        return `Hoorray`;
    } else {
        return `Nooooooooooo`;
    }
}
console.log(containsSeven(numbers))


function containsSeven(inputNumber: number[]) {
    let endingNumber = inputNumber.includes((7));
    if (endingNumber == false) {
        return ("Nooooo")
    }
    else {
        return ("Hoooray")
    }
};

console.log(containsSeven(numbers))