// Write a JavaScript program to find the largest of three given integers.

biggest = (x, y, z) => {
    if (x >= y && x >= z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}

biggest = (x, y, z) => {
    return Math.max(x, y, z);
}

console.log(biggest(1, 2, 3));
console.log(biggest(4, 2, 3));
console.log(biggest(4, 6, 3));
console.log(biggest(4, 4, 3));
console.log(biggest(4, 3, 4));
console.log(biggest(0, 4, 4));
console.log(biggest(0, 4, 4));