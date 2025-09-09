// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  


checkIncreasingMode = (x, y, z) => {
    if (z > y && y > x) {
        console.log("The given numbers are increasing in strict mode.");
    } else if (z >= y && y >= x) {
        console.log("The given numbers are increasing in soft mode.");
    } else {
        console.log("The given number are not increasing.")
    }
}

checkIncreasingMode(4, 6, 9);
checkIncreasingMode(3, 3, 8);
checkIncreasingMode(9, 3, 8);
