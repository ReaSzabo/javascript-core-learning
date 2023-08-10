// Write an arrow function that returns the cube of a number. (cube = köb)
// E.g parameter is 2, return value is 8 (2*2*2).
// E.g parameter is 3, return value is 27 (3*3*3).

getCube = (number) => {
    return number * number * number;
    //return number ** 3;
    //return Math.pow(number, 3); // power
}

console.log(getCube(2));
