'use strict';

import * as test from "tape";
import indexOf from './indexOf';

test("is it 4? ", test => {
  let numberOfarray = [2, 3, 4, 5];
  let number = 4
  let result = indexOf(numberOfarray, number)

  test.equal(result, 1)
  test.end()
});



test("should throw", test => {
  let numberOfarray = null;
  let number = 4
  test.throws(() => {
    let result = indexOf(numberOfarray, number);
  }, "Array was null");
  test.end()
});
