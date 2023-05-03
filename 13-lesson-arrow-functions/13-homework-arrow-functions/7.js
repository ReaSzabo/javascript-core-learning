// #7
// Write an arrow function that returns the largest number of the input array.
// E.g parameter is [3, 4, 5], return value is 5.
// E.g parameter is [7, 1, 2], return value is 7.

var exampleArray = [3, 4, 5, 7, 1, 2];

var getMaxi = (array) => {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

console.log(getMaxi(exampleArray));