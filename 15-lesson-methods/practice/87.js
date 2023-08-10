// Write a JavaScript function to remove the first character
//    of a given string and return the new string.
// The string length must be greater than or equal to 1. 

// str.substring(1, 3)

function removeFirstElement(string) {
    return string.substring(1);
    //return string.substring(1, string.length);
}

console.log(removeFirstElement("Poh"))