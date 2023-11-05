// Write a JavaScript program to create a new string without the first and last characters of a given string.


/*newString = (text) => {

    var newText = text.shift();

    newText = text.pop();

    return newText;
}*/

newString = (text) => {

    var newText = "";

    for (var i = 1; i < text.length - 1; i++) {

        newText = newText + text[i];
    }

    return newText;

}


console.log(newString("körte"));