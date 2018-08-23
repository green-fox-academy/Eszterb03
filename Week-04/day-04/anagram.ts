// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

let anagramm1: string = 'orrszarvú'
let anagramm2: string = 'rovarrúzs'


export function checkAnagramm(anagramWord1, anagramWord2): boolean {

  let anagramWord3 = anagramWord2.split("").sort();
  let anagramWord = anagramWord1.split("").sort();


  return anagramWord.join("") === anagramWord3.join("")
}

console.log(checkAnagramm(anagramm1, anagramm2))