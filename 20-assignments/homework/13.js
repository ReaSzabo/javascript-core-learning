// Write a JavaScript program to convert letters of a given string alphabetically.  


abcSorting = (text) => {

    var textArray = [];

    for (var i = 0; i < text.length; i++) {

        textArray = textArray + text[i];

    }


    var newText = textArray.sort();

    var result = "";

    for (var j = 0; j < newText.length; j++) {

        result = result + newText[j];
    }

    return result;

}


console.log(abcSorting("alma"));


