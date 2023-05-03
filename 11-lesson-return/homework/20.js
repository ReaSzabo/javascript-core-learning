console.log("Exercise 4");
// Write a JavaScript function to check two given numbers and return true
//   if one of the number is 50 or if their sum is 50.
// Else return false.

function get50(n1, n2) {
    if (n1 == 50 || n2 == 50 || n1 + n2 == 50) {
        return true;
    }
    return false;
}

console.log(get50(20, 30));
console.log(get50(30, 20));
console.log(get50(50, 20));
console.log(get50(20, 50));
console.log(get50(50, 50));
console.log(get50(20, 20));