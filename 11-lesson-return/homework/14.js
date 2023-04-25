console.log("Exercise 10");
// Írj egy függvényt, ami egy számot kap paraméterként!
// Ez a hét egy napja.
// A függvény adja vissza, hogy milyen nap tartozik a számhoz!
// Pl. 1 - hétfő, 5 péntek, stb.
// Teszteld console.log-gal! 

function dayOfWeek(n) {
    if (n == 1) {
        return "Hétfő";
    } else if (n == 2) {
        return "Kedd";
    } else if (n == 3) {
        return "Szerda";
    } else if (n == 4) {
        return "Csüt";
    } else if (n == 5) {
        return "Péntek";
    } else if (n == 6) {
        return "Szombat";
    } else if (n == 7) {
        return "Vas";
    }

    return "Nem jó";
}
console.log(dayOfWeek(1))
console.log(dayOfWeek(2))
console.log(dayOfWeek(7))
console.log(dayOfWeek(8))