// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function countBunnyEars(n: number) {
    if (n > 1) {
        return n*2;
    }
    else{
        return n;
    }
}

console.log(countBunnyEars(5))