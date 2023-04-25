console.log("Exercise 6");
// Írj egy függvényt, ami egy számot kap paraméterként és kiírja,
// hogy pozitív szám, negatív szám vagy nulla!

function hasPositive(n) {
    if (n > 0) {
        console.log("Szám pozitiv");
    } else if (n < 0) {
        console.log("Szám negativ");
    } else {
        console.log("Nullaaaa")
    }
}

hasPositive(5)
hasPositive(-5)
hasPositive(0)
hasPositive(55)