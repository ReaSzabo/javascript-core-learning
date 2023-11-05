// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

check = (text) => {

    var pCounter = 0;

    var tCounter = 0;

    for (var i = 0; i < text.length; i++) {

        if (text[i].toLowerCase() == "p") {

            pCounter++;

        } else if (text[i].toLowerCase() == "t") {

            tCounter++;
        }
    }

    return pCounter == tCounter ? true : false;
}


console.log(check("paPaTata"));
console.log(check("peppermint"));