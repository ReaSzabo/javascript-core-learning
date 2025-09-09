// Write a JavaScript program to convert letters of a given string alphabetically.  

let word1 = "significant";
let word2 = "champagne";

alphabeticalOrder = (s) => {
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }

    arr = arr.sort();

    s = arr.join("");

    return s;
}


console.log(alphabeticalOrder(word1));
console.log(alphabeticalOrder(word2));