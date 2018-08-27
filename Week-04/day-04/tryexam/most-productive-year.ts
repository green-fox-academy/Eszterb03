import { readFileSync } from "fs";

/** 
 * Write a function called `findMostProductiveYear` that helps you find the most productive year for a film studio.
 * The function should take one argument, which is the name of the film studio.
 * The function should try to open the related data file named `studioname`.csv,
 * which is a comma separated file with 3 columns: name of the movie, release year, director
 * 
 *  - If we do not have any data about the studio, the function should return an error message.
 *  - If we have found data, the function should return an information message about the most productive year for studio.
 * 
 * Examples:
 *  - If we call the function with 'marvel'
 *  - should return 'marvel has made the most movies in 2017.'
 * 
 *  - If we call the method with 'ghibli':
 *  - should print, 'Cannot find studio, please try again later.'.
 * 
 * Hint: 
 *  - You can find some example files in this folder. (marvel.csv, paramount.csv)
 *  - Most productive year: The year in which the studio has made the most movies.
 */
'use strict';
const fs = require('fs');




function findMostProductiveYear(studioName: string) {
  if (studioName !== 'marvel' && studioName !== 'paramount') {
    throw new Error('Cannot fins studio, please try again later.');
  } else {
    let movies = fs.readFileSync(`${studioName}.csv`, 'utf-8');
    let movieYears = movies.match(/[0-9]{4}/g);
    let yearCounter: object = {}
    for (let i: number = 0; i < movieYears.length; i++) {
      if (yearCounter[movieYears[i]] === undefined) {
        yearCounter[movieYears[i]] = 1
      } else {
        yearCounter[movieYears[i]]++
      } console.log(yearCounter)
    }
    let mostProdYear = [0, 0]
    for (const key in yearCounter) {
      if (yearCounter.hasOwnProperty(key)) {
        let currentCount = yearCounter[key];
        if (mostProdYear[1] < currentCount) {
          mostProdYear = [key, currentCount];
        }
      }
    }
    return mostProdYear[0]
  }
}

console.log(findMostProductiveYear('marvel'))


/********************************
 * Do not modify the code below *
 ********************************/
export default findMostProductiveYear;