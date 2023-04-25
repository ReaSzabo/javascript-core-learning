// If we list all the natural numbers below 20 that are multiples of 5, we get 5, 10 and 15.
// Find the sum of all the multiples of 5 below 100.
// multiple = többszörös

function multipleSum(number) {
    var sum = 0;
    for (i = 0; i < number; i++) {
        if (i % 5 == 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}

multipleSum(20)