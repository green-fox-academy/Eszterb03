// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let givenNumber = 6

function sum(givenNumber: number) {
    let total = 0
    for (let i = 0; i <= givenNumber; i++) {
        total = total + i;
    }
    return total;
}

console.log(sum(givenNumber))