// Hozz létre 3 változót! A nevük legyen: szin1, szin2, szin3! Adj nekik értékeket! 
// (Három szín legyen string-ként)
// Vizsgáld meg, legalább egy szín fekete-e!
// Ha igen, írd ki: "Feketét is hord"!
// Egyébként írd ki: "Nem hord fekete ruhát"!

var szin1 = "kek";
var szin2 = "zold";
var szin3 = "piros";

if (szin1 == "fekete" || szin2 == "fekete" || szin3 == "fekete") {
    console.log("Feketét is hord");
} else {
    console.log("Nem hord fekete ruhát");
}