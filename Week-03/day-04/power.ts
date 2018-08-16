// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

//power(3,2)-> 3*3

function powerN(base: number, exponent: number): number {
    let result = 1;
    for (let i: number = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(powerRecursive(3, 2))

//power(3,2)-> 3*3
//power(4,3)-> 4* power(4,2)
//power(4,2)-> 4* power(4,1)
//power(4,1)-> 4

function powerRecursive(base: number, exponent: number): number {
    if (exponent == 1) {
        return base
    } else {
        return base * powerRecursive(base, exponent - 1);
    }
}

console.log(powerRecursive(2, 9))