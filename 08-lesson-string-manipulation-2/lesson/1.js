/////////////// REPLACE ALL /////////////////
console.log("REPLACE ALL")

// A replaceAll() metódust, akkor használjuk, ha szeretnénk kicserélni egy substringet egy stringben.
// Két paramétere van:
// 1. Milyen substringet cseréljünk ki.
// 2. Mire cseréljük ki.

var originalString = "sörös";

var replacedString = originalString.replaceAll("ö", "o"); // Minden "ö" karaktert kicserél "o karakterra."
console.log(replacedString); // "soros"
