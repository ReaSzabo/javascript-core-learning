// Write a JavaScript function to find the largest of three given integer parameters.

function largestNumber(x, y, z) {

    let max = 0;

    if (x > max) {
        max = x;

        if (y > max) {
            max = y;
        }

        if (z > max) {
            max = z;
        }
    }


    return max;

}

console.log(largestNumber(2, 3, 1));
