// Write a JavaScript function to compute the sum of the two given numbers.
// If the two values are the same, then return 0. 

function sum(n1, n2) {
    if (n1 == n2) {
        return 0;
    }
    return n1 + n2;
}
console.log(sum(3, 4))