console.log("Exercise 9");
// Írj egy függvényt, ami egy számot kap paraméterként!
// Ez a tanuló jegye.
// A függvény adja vissza (azaz térjen vissza azzal),
// hogy milyen szöveges érték tartozik a számhoz!
// Pl. 1 - elégtelen, 5 jeles, stb.
// Teszteld console.log-gal!  

function grade(n) {
    if (n == 1) {
        return "Elégtelen"
    } else if (n == 2) {
        return "Elégséges"
    } else if (n == 3) {
        return "Közepes"
    } else if (n == 4) {
        return "Jó"
    } else if (n == 5) {
        return "Jeles"
    } else {
        return "Nem értelmezhető érdemjegy"
    }
}

console.log(grade(1))
console.log(grade(2))
console.log(grade(3))
console.log(grade(4))
console.log(grade(5))
console.log(grade(26))