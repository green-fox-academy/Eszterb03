'use strict'

let elements: any[] = [{ name: 'Mark' },
{ name: 'Jozsef' },
{ name: 'Mappabá' }]

let elementsWithLetterA: any[] = elements.filter((value, index, array) => {
  return value.name.indexOf('a') >= 0;
})

//ugyanaz mint az elso csak fügvénybe ágyazva
const withLetter = (filterby: string): any[] => {
  return elements.filter((value, index, array) => {
    return value.name.indexOf(filterby) >= 0;
  });
}

//filter csak kiválogat belőle


//map kigyűjti, csinál vele valamit

const lowerCase = (param: any[]) => {
  return param.map((value, index, array) => {
    return { name: value.name.toLowerCase() }
  });
}

console.log(lowerCase(elements))