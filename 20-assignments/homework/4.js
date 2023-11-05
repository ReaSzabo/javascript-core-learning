// Write a JavaScript program to find the closest value to 100 from two numerical values.

function closest(x, y) {
    if (Math.abs(x) >= 0 && Math.abs(x) < 100 && Math.abs(x) >= Math.abs(y)) {

        return x;

    } else if (Math.abs(y) >= 0 && Math.abs(y) < 100 && Math.abs(y) >= Math.abs(x)) {

        return y;

    } else if (Math.abs(x) > 100 && Math.abs(x) <= Math.abs(y)) {

        return x;

    } else if (Math.abs(y) > 100 && Math.abs(y) <= Math.abs(x)) {

        return y;
    } else {

        return 100;
    }
}


console.log(closest(66, 77));
console.log(closest(88, 77));
console.log(closest(77, 77));
console.log(closest(-104, -106));