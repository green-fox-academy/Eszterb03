let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];


function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

// console.log(filterItems('ap')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']

let years = ['2008', '2008', '2010','2014',
'2014',
'2015',
'2015',
'2015']
let mostProdYear: string = "";
let countNumber: number = 0;
let maxNumberOfYear: number = 1
let number = 0;
console.log

let buz = {
  fog: 'stack'
};

for (let name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' + 
      name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}