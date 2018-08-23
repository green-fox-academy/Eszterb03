'use strict'
import * as test from "tape";
import{checkAnagramm} from './anagram'

test('is it Anagramm?', test => {
  test.equal(checkAnagramm('eszter','retzse'),true);
  test.end()
});