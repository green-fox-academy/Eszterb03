// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
//%-kal kiiratod, /-kor meg a levágja a a 6-ot

// for (let i: number = 0; 10 > i %; i++)

// console.logot a return elott kiírja a lépéseknél,
// így működik a függvényen bemegy a 126 nagyobb mint 10, aztán bemegy a newN és elostódik /10-el vagyis 12 lesz a mathfloor miatt
// majd a 126%10-ből megmarad a 6 és mivel meg van hívja megint a függvényt a 12-re amibol lesz 1 és a maradékos osztásból pedig 2, mivel ez kevesebb,mint 1
//belemegy az elsebe ahol visszadja önmagának az összegét

function digitSum(n: number): number {
    if (n > 10) {
        let newN: number = Math.floor((n / 10));
        return (n % 10) + digitSum(newN);

    } else {
        return n;
    }
}
console.log(digitSum(126))