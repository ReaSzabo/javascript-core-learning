// Write a JavaScript program to find the closest value to 100 from two numerical values.

function closest(x, y) {
    if (Math.abs(100 - x) > Math.abs(100 - y)) {
        return y;
    } else {
        return x;
    }
}


console.log(closest(66, 77));
console.log(closest(88, 77));
console.log(closest(77, 77));
console.log(closest(104, 106));