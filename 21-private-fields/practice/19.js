// Write a program to find the sum of all elements in an array.


let tombi = [2, -3, 5, 9];

function sum(arr) {

    let result = 0;

    for (let i = 0; i < arr.length; i++) {


        result = result + arr[i];
    }

    return result;
}

console.log(sum(tombi));