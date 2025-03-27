// Így írjuk ki egy tomb legkisebb elemét.

const szamok = [4, 3, 6, 8, 12, 13];

let minNumber = 9999999999;

for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] < minNumber) {
        minNumber = szamok[i];
    }
}

console.log(minNumber);