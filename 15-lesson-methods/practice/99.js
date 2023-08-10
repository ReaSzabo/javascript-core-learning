// Write a arrow function that returns the minus version of a number.
// E.g parameter is 2, return value is -2.
// E.g parameter is 12, return value is -12.
// E.g parameter is -8, return value is -8.

var getMinus = (number) => {
    return number > 0 ? number * -1 : number;
}

console.log(getMinus(3))
console.log(getMinus(-3))
console.log(getMinus(0))