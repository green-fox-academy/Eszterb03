// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
//3+2+1

//for (let i:number=1; i<n; i++){
// let sum=0
// sum + i

function addNums(n: number): number {
    if (n === 1) {
        return 1;
    } else {
    return n + addNums(n - 1);
    }
}
console.log(addNums(3));

