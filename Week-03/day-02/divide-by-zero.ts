// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

declare function require(path: string): any;
export { };
'use string';

function division(a: number):number {
    if(a === 0) {
        throw new TypeError('fail');
    }
    return 10 / a
};
try {
    console.log(division(0));
} catch (err) {
    console.log(err.message);
// } finally {
//     console.log(division)
}