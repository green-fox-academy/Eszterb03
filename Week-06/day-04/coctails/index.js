'use strict'

const express = require('express');
const app = express();
const PORT = 3030;

const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let cocktailsFiltered = cocktails.slice(0);
  let alcohol = req.query.alcohol;
  if (alcohol !== 'all') {
    cocktailsFiltered = cocktailsFiltered.filter(elem => {
      return elem.contains.indexOf(alcohol) > -1
    });
  }
  let newList = alcoholList.slice(0)
  newList.unshift('all');
  res.render('index', {
    cocktailsFiltered,
    newList,

  });
});


app.listen(PORT, () => {
  console.log(`the server is u an running port ${PORT}`)
});