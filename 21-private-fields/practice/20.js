// Reverse a string without using built-in reverse functions.


function reverseString(word) {

    let reverseArr = "";

    for (i = word.length - 1; i >= 0; i--) {

        reverseArr = reverseArr + word[i];
    }

    return reverseArr;
}


console.log(reverseString("Mátéka"));