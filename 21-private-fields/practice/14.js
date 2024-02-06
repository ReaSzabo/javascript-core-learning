// Write a JavaScript program to convert letters of a given string alphabetically.  

function convertAlphabetically(word) {

    let arr = [];

    let result = "";

    for (let i = 0; i < word.length; i++) {

        arr.push(word[i]);
    }

    arr = arr.sort();


    for (let j = 0; j < arr.length; j++) {

        result = result + arr[j];

    }

    console.log(result);
}


convertAlphabetically("Andrea");