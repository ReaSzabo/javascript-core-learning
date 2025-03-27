// Írd ki a tömb legnagyobb elemét
let maxNumber = 0;
const szamok2 = [41, 3, 6, 8, 12, 13];

for (let i = 0; i < szamok2.length; i++) {
    if (szamok2[i] > maxNumber) {
        maxNumber = szamok2[i];
    }
}

console.log(maxNumber);