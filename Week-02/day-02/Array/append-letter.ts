'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

// function appendA(input: string[]) {
//     // let newfar = input.map(elem => 
//     //     elem += 'a'
//     // )
//     // return newfar;
//     let newarray: string[] = [];
//     input.forEach(input =>
//         newarray.push(input + 'a'));
//         return newarray;
// }
// console.log(appendA(far));

    // The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
    //export = appendA;

function appendA1( input:any){
    let newarray: string[] = []
    input.forEach(function(input){
        newarray.push(input+"a")
    })
    return newarray
}
console.log(appendA1(far))
