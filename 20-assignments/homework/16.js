// Write a JavaScript program to divide two positive numbers and 
// return the result as string with properly formatted commas.



remainderToString = (x, y) => {

    var remainder = x / y;

    return remainder.toString();
}

console.log(remainderToString(5, 6));