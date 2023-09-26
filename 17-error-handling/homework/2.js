// Write an arrow function that returns the smallest number of the input array.
// E.g parameter is [3, 4, 5], return value is 3.
// E.g parameter is [7, 1, 2], return value is 1.

let exampleArray2 = [-3, 4, 5, -7, -1, 2];

let minimum = () => {
    let min = 100;
    for (i = 0; i < exampleArray2.length; i++) {
        if (exampleArray2[i] < min) {
            min = exampleArray2[i];
        }
    }
    return min;
}

console.log(minimum(exampleArray2));