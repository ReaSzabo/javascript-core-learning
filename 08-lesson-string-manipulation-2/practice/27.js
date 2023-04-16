// Írd ki a tömb olyan elemeit, amelyek pozitív egész számok vagy 0!
var szamok5 = [0, -10, 230, 13, -40, -5, 16, 7, 0, 1.5];

for (let i = 0; i < szamok5.length; i++) {
    if (szamok5[i] >= 0 && szamok5[i] % 1 == 0) {
        console.log(szamok5[i])
    }
}