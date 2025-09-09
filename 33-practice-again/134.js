// Write a JavaScript program to capitalize the first letter of each word in a given string.  

let sentence1 = "This is the first test sentence.";
let sentence2 = "This is another sentence to test the function.";

capitalize = (s) => {
    let arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }

    s = arr.join(" ");

    return s;

}

console.log(capitalize(sentence1));
console.log(capitalize(sentence2));