// A feladatban szerepel a "valami", "mate" és "tomb" változók, amik részei az "ertekek" tömbnek. Ezekkel nincs teendőd. 
// Írd ki a konzolra egyesével az "ertekek" tömb minden elemének típusát.
let valami;
const mate = { kor: 29 };
const tomb = [1, 2, 3];

const ertekek = [2, "szasz", 4.3, `szivasz`, 0, mate, NaN, tomb, Infinity, 'szevasz', true, valami, false, undefined, null];

for (let i = 0; i < ertekek.length; i++) {
    console.log(typeof (ertekek[i]));
}

