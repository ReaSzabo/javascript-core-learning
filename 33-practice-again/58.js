// Create a switch statement from the following if statement
let isRaining = true;

if (isRaining == true) {
    console.log("It is raining.");
} else if (isRaining == false) {
    console.log("It is not raining.");
}

switch (isRaining) {
    case true: console.log("It is raining.");
        break;
    case false: console.log("It is raining.");
        break;
}