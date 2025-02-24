// Írj egy függvényt, ami 2 szám paramétert kap és a nagyobb számmal tér vissza!
// Teszteld legalább egy console.log-gal!


biggerNumber = (x, y) => {
    if (x > y) {
        return x;
    }

    return y;
}

console.log(biggerNumber(15, 20));