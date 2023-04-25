console.log("Exercise 1");
// Írj egy függvényt, ami 2 szám paramétert kap és a nagyobb számmal tér vissza!
// Teszteld legalább egy console.log-gal!

function bigger(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(bigger(5, 5))