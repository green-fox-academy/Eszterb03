'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600 (a* b+ a*c+ b*c)*2 
// Volume: 1000 (abc)
// a téglatest három él
let myHeightcuboid : number = 20.2
let myLenghtcuboid : number = 35.2
let myWidthcuboid : number = 40.2

console.log((myHeightcuboid*myLenghtcuboid+myHeightcuboid*myWidthcuboid+myLenghtcuboid*myWidthcuboid)*2)
console.log (myHeightcuboid*myLenghtcuboid*myWidthcuboid)