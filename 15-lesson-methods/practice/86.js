// Write a JavaScript function to create a new string adding "Py" to
// the beginning of a given string parameter.
// If the given string begins with "Py" then return the original string.

function addPy(string) {
    /*
    if (string.charAt(0) === "P" && string.charAt(1) === "y") {
        return string;
    }
    string = "Py" + string;
    return string;
    */

    // return string.charAt(0) === "P" && string.charAt(1) === "y" ? string : "Py" + string;

    //return string[0] === "P" && string[1] === "y" ? string : "Py" + string;

    return string.substring(0, 2) === "Py" ? string : "Py" + string;
}

console.log(addPy("Erkély"));
console.log(addPy("Python"));