// Írd ki a tömb legnagyobb elemét
var szamok2 = [41, 3, 6, 8, 12, 13];

var maxi = 0;

for (i = 0; i < szamok2.length; i++) {
    if (maxi < szamok2[i]) {
        maxi = szamok2[i];
    }
}

console.log(maxi)