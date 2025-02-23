console.log("Exercise 3");
// Készíts egy tetszőleges objektumot.
// Legyen az objektumnak egy tetszőleges boolean, egy number, egy string és egy objektum property-je.
// Objektumnak lehet akár egy másik objektum a propertyje. Nem tanultuk, de megpróbálhatod kitalálni, hogy csináljuk.

var paprika = {
    nev: "kaliforniai",
    szin: "piros"
}

var szendvics = {
    isSajtos: true,
    súly: 2000,
    felvagott: "turista",
    zoldseg: paprika,
    evoember: { nev: "Bence", kor: 33 }
}