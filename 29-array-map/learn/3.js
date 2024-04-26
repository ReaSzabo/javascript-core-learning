var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// írjuk át páratlanra
var paratlanSzamok = szamok.filter(function (szam) {
    return szam % 2 === 1;
})

console.log(paratlanSzamok)
