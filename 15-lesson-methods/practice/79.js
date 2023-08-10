// Írj egy függvényt, ami egy számot kap paraméterként!
// Ez a tanuló jegye.
// A függvény adja vissza (azaz térjen vissza azzal),
// hogy milyen szöveges érték tartozik a számhoz!
// Pl. 1 - elégtelen, 5 jeles, stb.
// Teszteld console.log-gal!  

function erdemjegy(num) {
    switch (num) {
        case 1: return "Elégtelen";
        case 2: return "Elégséges";
    }
}

console.log(erdemjegy(1));
console.log(erdemjegy(2));