// #3
// Write a arrow function that returns the minus version of a number.
// E.g parameter is 2, return value is -2.
// E.g parameter is 12, return value is -12.

var getMinus = (number) => {
    // return "-" + number;
    // return 0 - number;
    // return -1 * number;
    if (number < 0) {
        return number;
    }
    return number * -1;
}

console.log(getMinus(3))
console.log(getMinus(-3))