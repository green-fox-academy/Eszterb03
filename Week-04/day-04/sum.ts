// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class -példányosítsd a classot
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it


export class ListInteger {
  private intArray: number[] = [];

  constructor(intArray: any[]=[1,2,3]) {
    this.intArray = intArray
  }
  sum(): any {
    let intArrayValue = 0;
    for (let i: number = 0; i < this.intArray.length; i++) {
      intArrayValue += this.intArray[i]
    }
    return intArrayValue
  }
}

let mytest: ListInteger = new ListInteger([2,4])

console.log(mytest.sum())