console.log("Exercise 5");
// Write a JavaScript function to create a new string adding "Py" to
// the beginning of a given string parameter.
// If the given string begins with "Py" then return the original string.

function add(string) {
    if (string[0] == 'P' && string[1] == 'y') {
        return string;
    }
    return "Py" + string;
}

console.log(add("Python"));
console.log(add("Andika"));
console.log(add("Kóku"));