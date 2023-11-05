// Write a JavaScript program to count the number of vowels in a given string.  


vowels = (text) => {

    var counter = 0;

    for (var i = 0; i < text.length; i++) {

        if (text[i].toLowerCase() == "a" || text[i].toLowerCase() == "á" ||
            text[i].toLowerCase() == "e" || text[i].toLowerCase() == "é" ||
            text[i].toLowerCase() == "i" || text[i].toLowerCase() == "í" ||
            text[i].toLowerCase() == "o" || text[i].toLowerCase() == "ó" ||
            text[i].toLowerCase() == "ö" || text[i].toLowerCase() == "ő" ||
            text[i].toLowerCase() == "u" || text[i].toLowerCase() == "ú" ||
            text[i].toLowerCase() == "ü" || text[i].toLowerCase() == "ű") {

            counter++;

        }
    }

    return counter;

}

console.log(vowels("fdstzghfvlodiglbdDOÖÚÚÚÚ"));