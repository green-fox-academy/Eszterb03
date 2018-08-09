// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`
// 

let firstList = [1, 2, 3];

let secondList = [4, 5]

let firstCount = firstList.length;
let secondCount = secondList.length

if (firstCount < secondCount) {
    console.log("SecondList has more elements " + secondCount)
}
else console.log("FirstList has more elements " + firstCount) 