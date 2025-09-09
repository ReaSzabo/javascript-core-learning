// Write a JavaScript program to create a new string without the first and last characters of a given string.

withoutFirstAndLastChar = (s) => {
    let newS = s.substring(1, s.length - 1);

    return newS;
}

console.log(withoutFirstAndLastChar("charachter"));