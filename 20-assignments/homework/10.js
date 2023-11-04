// Write a JavaScript program to reverse a given string. 


stringReverse = (text) => {

    var reversedText = "";

    for (var i = text.length - 1; i >= 0; i--) {

        reversedText = reversedText + text[i];
    }

    return reversedText;

}


console.log(stringReverse("hápi"));



