// Write a JavaScript program to capitalize the first letter of each word in a given string.  


capitalize = (text) => {

    text.charAt(0).toUpperCase()

    return text.charAt(0).toUpperCase() + text.slice(1);


}


console.log(capitalize("hideg"));