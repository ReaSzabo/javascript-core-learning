// 1. 

var text1 = "The new price of the TV is $20";

var text2 = "The new price of the TV is $40";

var text3 = "Ke$ha";


function discount(string) {

    var textArray = string.split(" ");

    for (i = 0; i < textArray.length; i++) {

        if (textArray[i].includes("$")) {

            var price = textArray[i];

            var number = price.split("$");

            number = parseInt(number[1]);

            if (typeof number == "number") {

                textArray[i] = "$" + (number * 0.8);
            }
        }
    }

    console.log(textArray.join(" "));
}

discount(text1);




// 2.
/* 
var string1 = "Szedd ki a maganhangzokat.";

function removeVowels(string) {

    string = string.replaceAll("a", " ");

    console.log(string);
}

removeVowels(string1);
*/


/* 
var stringi = "Banana";

function newWord(parameter) {

    var stringiArray = parameter.split("");

    var newStringiArray = [];

    for (i = 0; i < stringiArray.length; i++) {

        console.log(stringiArray[i]);

        if (!newStringiArray.includes(stringiArray[i])) {

            newStringiArray.push(stringiArray[i]);
        }

    }

    return newStringiArray;
}

console.log(newWord(stringi));
*/