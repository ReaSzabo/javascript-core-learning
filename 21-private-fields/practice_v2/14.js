// Write a JavaScript program to convert letters of a given string alphabetically.  

abc = (s) => {
    let arr = [];
    let result = "";

    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }

    arr = arr.sort();

    for (let j = 0; j < arr.length; j++) {
        result = result + arr[j];
    }

    return result;
}



console.log(abc("Andika"));
console.log(abc("gfdhbsjfugelugf"));