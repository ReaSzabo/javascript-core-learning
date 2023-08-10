// A feladatban szerepel a "valami", "mate" és "tomb" változók, amik részei az "ertekek" tömbnek. 
// Ezekkel nincs teendőd. 
// Írd ki a konzolra egyesével az "ertekek" tömb minden elemének típusát.
var valami;
var mate = { kor: 29 };
var tomb = [1, 2, 3];

var ertekek = [2, "szasz", 4.3, `szivasz`, 0, mate, NaN, tomb, Infinity, 'szevasz', true, valami, false];

// typeof

for (let i = 0; i < ertekek.length; i++) {
    console.log(ertekek[i] + " - " + typeof ertekek[i])
}