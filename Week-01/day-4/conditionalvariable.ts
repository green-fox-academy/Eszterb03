

let a: number = 24;
let out: number = 0;

if (a % 2 === 0) {
    console.log(out + 1)
} else {
    console.log(out)
};
// if a is even increment out by one

let b: number = 13;
let out2: string = '';

if (10 < b) {
    console.log(out2, 'Sweet')
} else if (b < 20) {
    console.log(out2, 'Less!')
} else { console.log(out2, 'More!') };

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;


if (credits >= 50 && !isBonus) {
    console.log(c - 2);
}
else if (credits < 50 && !isBonus) {
    console.log(c - 1);
}
else if (isBonus) {
    console.log(c);
}    //  The Boolean works only that case if the AND is true true, thats why we have to use ! 

let d: number = 8;
let time: number = 120;
let out3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

if (d % 4 === 0 && time < 200) {
    console.log('Check');
} else if (time > 200) {
    console.log('Time out');
} else {
    console.log('Run Forest Run!')
};