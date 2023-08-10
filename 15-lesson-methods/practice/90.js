// Create a switch statement from the following if statement
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

if (numberArray.length == 10) {
    console.log("We have 10 numbers.");
} else if (numberArray.length != 10) {
    console.log("We do not have 10 numbers.");
}

switch (numberArray.length) {
    case 10: return "We have 10 numbers.";
    default: return "We do not have 10 numbers."
}