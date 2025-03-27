// Write an arrow function that returns the minus version of a number.
// E.g parameter is 2, return value is -2.
// E.g parameter is 12, return value is -12.


/*minusVersion = (x) => {
    if (x < 0) {
        return x;
    }
    return 0 - x;
}*/

minusVersion = (x) =>
    x < 0 ? x : 0 - x;


console.log(minusVersion(12));
console.log(minusVersion(-11));
