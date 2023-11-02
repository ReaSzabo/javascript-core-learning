// Write a JavaScript program to check a set of three numbers; 
// if the three numbers are the same return 30; otherwise return 20; 
// and if two numbers are the same return 40.

function check(a, b, c) {
    if (a == b && b == c) {
        return 30;
    } else if (a == b && b != c || b == c && a != b || a == c && c != b) {
        return 40;
    } else {
        return 20;
    }
}

console.log(check(5, 6, 7));
console.log(check(6, 6, 6));
console.log(check(6, 3, 6));