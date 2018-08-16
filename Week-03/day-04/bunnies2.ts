// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

//odd bunnies 2 ears 1,3,5,
//even bunnies 3 ears 2,4,6

function countBunnyEars(n: number) {
    if (n > 0 && n % 2 === 0) {
        return (n) * 3 + countBunnyEars(n - 1);
    }
    if ((n > 0 && n % 2 === 1)) {
        return (n) * 2 + countBunnyEars(n - 1);
    }
    else {
        return n;
    }

}


console.log(countBunnyEars(4))