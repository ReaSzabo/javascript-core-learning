console.log("Exercise 2");
// A feladatban szerepel a "valami", "mate" és "tomb" változók, amik részei az "ertekek" tömbnek. Ezekkel nincs teendőd. 
// Írd ki a konzolra egyesével az "ertekek" tömb minden elemének típusát.
// Még nem tanultuk, hogy lehet kiírni valaminek a típusát, nézz utána! :)
// Megjelenik egy olyan típus, amit még nem tanultunk. Van tipped mit takarhat ez a típus?
var valami;
var mate = { kor: 29 };
var tomb = [1, 2, 3];

var ertekek = [2, "szasz", 4.3, `szivasz`, 0, mate, NaN, tomb, Infinity, 'szevasz', true, valami, false];

console.log(typeof 44)

for (let i = 0; i < ertekek.length; i++) {
    console.log(ertekek[i] + ": " + typeof ertekek[i])
}