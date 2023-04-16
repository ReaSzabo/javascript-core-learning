console.log("Exercise 10");
// Adott egy mondat, amit egy tömb szavaiból állított össze valaki.
var szavak = ["Ez", "egy", "fa"];
var mondat = "";
for (var i = 0; i < szavak.length; i++) {
    mondat = mondat + szavak[i] + " ";
}
// A probléma, hogy a mondat string így néz ki: "Ez egy fa "
// A végén maradt egy space.
// Írd ki a programot felesleges mondatvégi space nélkül!
