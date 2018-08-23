'use strict'
// Create different tests where you
// test your method with an empyt list
// with a list with one element in it
// with multiple elements in it
// with a null
// with a string
// Run them
// Fix your code if needed

import * as test from "tape";
import{ListInteger} from './sum'

test('add the array numbers',test =>{
  let integNum : ListInteger = new ListInteger([])
  test.equal(integNum.sum(),0)
  test.end()
});

test('add the array numbers',test =>{
  let integNum : ListInteger = new ListInteger([3])
  test.equal(integNum.sum(),3)
  test.end()
});

test('add the array numbers',test =>{
  let integNum : ListInteger = new ListInteger([3,4])
  test.equal(integNum.sum(),7)
  test.end()
});

test('add the array numbers',test =>{
  let integNum : ListInteger = new ListInteger([0])
  test.equal(integNum.sum(),0)
  test.end()
});

test('add the array numbers',test =>{
  let integNum : ListInteger = new ListInteger(['0Iamastring'])
  test.equal(integNum.sum(),'0Iamastring')
  test.end()
});