// What would we see on the console? 1

var sentenceString = "this is a nice day";

var sentenceArray = sentenceString.split(" ");

sentenceArray[4] = sentenceArray[4].replaceAll("y", "te");

var word = "   date    ";

if (word.trim() == sentenceArray[4]) {
    console.log("1")
} else {
    console.log("2")
}

