'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function matchmaking(x: string[], y: string[]) {
    let array1: string[] = [];

    for (let i: number = 0; i < (x.length - 1); i++) {
        array1.push(x[i], y[i]);
    };

    array1.push(y[y.length - 1]);
    return array1
};

console.log(matchmaking(girls, boys));

/*function makingMatches(outPut: string){
    let NewValue = outPut.split ("")

}
*/