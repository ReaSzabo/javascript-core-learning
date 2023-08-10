// Írj egy függvényt, ami egy számot kap paraméterként és kiírja,
// hogy pozitív szám, negatív szám vagy nulla!

function positiveOrNegative(x) {
    return x === 0 ? "A szám nulla" : (x > 0 ? "A szám pozitiv" : "A szám negatív")
}

console.log(positiveOrNegative(0));
console.log(positiveOrNegative(44));
console.log(positiveOrNegative(-3));