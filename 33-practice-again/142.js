// Write a JavaScript program to check two given integers whether one is positive and another one is negative.

checkNegativeOrPositive = (x, y) => {
    (x < 0 && y >= 0) || (y < 0 && x >= 0) ?
        console.log("One of the given numbers is positive and the other one is negative.") : console.log("The given numbers signs are the same.");
}

checkNegativeOrPositive(13, 9);
checkNegativeOrPositive(-7, 8);
checkNegativeOrPositive(1, -2);
checkNegativeOrPositive(-11, -3);