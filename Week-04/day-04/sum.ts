// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class -példányosítsd a classot
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you
// test your method with an empyt list
// with a list with one element in it
// with multiple elements in it
// with a null
// with a string
// Run them
// Fix your code if needed


class ListInteger {
  private intArray: number[] = [];

  constructor(intArray: number[]=[1,2,3]) {
    this.intArray = intArray
  }
  sum(): number {
    let intArrayValue = 0;
    for (let i: number = 0; i < this.intArray.length; i++) {
      intArrayValue += this.intArray[i]
    }
    return intArrayValue
  }
}

let mytest: ListInteger = new ListInteger()

console.log(mytest.sum())