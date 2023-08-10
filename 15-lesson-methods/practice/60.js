// If we list all the natural numbers below 20 that are multiples of 5, we get 5, 10 and 15.
// Find the sum of all the multiples of 5 below 100.
// multiple = többszörös


function multipleN(n) {
    let sum = 0;
    for (i = 5; i < n; i = i + 5) {
        sum = sum + i;
    }
    console.log(sum);
}

multipleN(20);
multipleN(20);