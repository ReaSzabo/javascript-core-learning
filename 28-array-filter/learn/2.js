var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var parosSzamok = szamok.filter(
    function (szam) {
        return szam % 2 === 0;
    }
)

console.log(parosSzamok)
