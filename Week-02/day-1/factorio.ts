// -  Create a function called `factorio`
//    that returns it's input's factorial
export {}

let factorial: number = 3

function factorio( inputNumber: number){
    let factorial = 1
    for (let i = 1; i<= inputNumber; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log(factorio(factorial))