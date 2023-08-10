// Így írjuk ki egy tomb legkisebb elemét.

var szamok = [4, 3, 6, 8, 12, 13];

var mini = 100;
for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] < mini) {
        mini = szamok[i];
    }
}

console.log(mini);