// What would we see on the console?

var sentenceString = "this is a nice day";

var sencenceArray = sentenceString.split(" ");

sencenceArray[4] = sencenceArray[4].replaceAll("y", "te");

var word = "   date    ";

if (word.trim() == sencenceArray[4]) {
    console.log("1")
} else {
    console.log("2")
}