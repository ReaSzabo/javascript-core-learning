// Write a JavaScript program to compute the sum of the two given integers.
// If the sum is in the range 50..80 return 65 otherwise return 80.  

sum = (a, b) => {
    let c = a + b;
    return c >= 50 && c <= 80 ? 65 : 80;
}


console.log(sum(25, 25));
console.log(sum(215, 25));