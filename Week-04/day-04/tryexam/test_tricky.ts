
import * as test from "tape";
import getTrickyAvg from "./tricky-average";

test('not shoul be equal with zero', test => {
  let testArray = [1, 4]
  test.notEqual(getTrickyAvg(testArray), 0)
  test.end()
})



test('is it the right avarage number?', test => {
  let testArray = [1, 4,-1];
  test.equal(getTrickyAvg(testArray), 1.5)
  test.end()
})