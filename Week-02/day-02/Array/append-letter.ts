'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(input: string[]) {
    // let newfar = input.map(elem => 
    //     elem += 'a'
    // )
    // return newfar;
    let newfar: string[] = [];
    input.forEach(input =>
        newfar.push(input + 'a'));
        return newfar;
}
console.log(appendA(far));

    // The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
    //export = appendA;

