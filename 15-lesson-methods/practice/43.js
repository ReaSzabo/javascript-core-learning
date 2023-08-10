// Írd ki a tömb legnagyobb elemét
var szamok2 = [41, 3, 6, 8, 12, 13];

var max = 1;

for (let i = 0; i < szamok2.length; i++) {
    if (szamok2[i] > max) {
        max = szamok2[i];
    }
}

console.log(max)