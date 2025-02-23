// #2
// Create a switch statement from the following if statement
var isRaining = true;

if (isRaining == true) {
    console.log("It is raining.");
} else if (isRaining == false) {
    console.log("It is not raining.");
}

switch (isRaining) {
    case true: console.log("It is raining."); break;
    default: console.log("It is not raining.");
}