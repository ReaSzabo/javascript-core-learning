console.log("Exercise 3");
// Készíts egy tetszőleges objektumot.
// Legyen az objektumnak egy tetszőleges boolean, egy number, egy string és egy objektum property-je.
// Objektumnak lehet akár egy másik objektum a propertyje. Nem tanultuk, de megpróbálhatod kitalálni, hogy csináljuk.

var csomag = {
    nev: "Csomag"
}

var car = {
    szin: "ződ",
    tipus: "Moszkvics",
    turbo: true,
    vegsebesseg: 999999,
    isJoska: true,
    tulajdonos: csomag
}

console.log(car)