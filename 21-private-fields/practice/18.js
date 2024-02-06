// Implement a function to calculate the factorial of a non-negative integer.


function factorial(x) {

    if (x == 0) {

        return 0;
    }

    let result = 1;

    for (let i = 2; i <= x; i++) {

        result = result * i;
    }

    return result;
}


function factorial2(n) {

    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {

        return n * factorial2(n - 1);
    }
}

console.log(factorial(5));
console.log(factorial(1));
console.log(factorial2(5));
console.log(factorial2(1));