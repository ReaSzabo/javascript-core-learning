// Így írjuk ki egy tomb legkisebb elemét.

var szamok = [4, 3, 6, 8, 12, 13];

var minNumber = 9999999999; // Ide írunk egy jó nagy számot, ami tuti, hogy nagyobb minden elemnél.

for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] < minNumber) {
        minNumber = szamok[i];
    }
}

console.log(minNumber);