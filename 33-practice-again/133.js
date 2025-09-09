// Write a JavaScript program to reverse a given string. 

let word1 = "dinnye";
let word2 = "karalábé";

stringReverse = (s) => {
    let reversedWord = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversedWord = reversedWord + s[i];
    }

    return reversedWord;
}

console.log(stringReverse(word1));
console.log(stringReverse(word2));
