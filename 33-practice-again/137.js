// Write a JavaScript program to count the number of vowels in a given string.  

let word1 = "significant";
let word2 = "champagne";

countingVowels = (s) => {
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            counter++;
        }
    }

    return counter;

}

console.log(countingVowels(word1));
console.log(countingVowels(word2));