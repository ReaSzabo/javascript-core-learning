// Write an arrow function that returns the largest number of the input array.
// E.g parameter is [3, 4, 5], return value is 5.
// E.g parameter is [7, 1, 2], return value is 7.


largestNumber = (arr) => {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

const arr1 = [3, 4, 5];
const arr2 = [7, 1, 2];

console.log(largestNumber(arr1));
console.log(largestNumber(arr2));