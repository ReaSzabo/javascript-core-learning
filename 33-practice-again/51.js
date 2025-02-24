// If we list all the natural numbers below 20 that are multiples of 5, we get 5, 10 and 15.
// Find the sum of all the multiples of 5 below 100.
// multiple = többszörös

let result = 0;

for (let i = 0; i < 101; i = i + 5) {
    result = result + i;
}

console.log(result);