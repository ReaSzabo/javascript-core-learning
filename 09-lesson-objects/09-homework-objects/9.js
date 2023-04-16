console.log("Exercise 9");
// Írd ki a tömb legnagyobb elemét
// Ha nem magyaráztam el jól az előzőt, nézzük meg együtt!
var maxNumber = 0;
var szamok2 = [41, 3, 6, 8, 12, 13];

for (let i = 0; i < szamok2.length; i = i + 1) {
  if (szamok2[i] > maxNumber) {
    maxNumber = szamok2[i];
  }
}

console.log(maxNumber);