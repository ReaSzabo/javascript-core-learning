// Készíts egy tetszőleges objektumot.
// Legyen az objektumnak egy tetszőleges boolean, egy number, egy string és egy objektum property-je.
// Objektumnak lehet akár egy másik objektum a propertyje. Nem tanultuk, de megpróbálhatod kitalálni, hogy csináljuk.

kutya = {
    nev: "Marcsi",
    kor: 6
}


feri = {
    kemenyCsavo: true,
    bicepsz: 50,
    foglalkozas: "penztaros",
    barat: {
        kemenyCsavo: true,
        bicepsz: 51,
        foglalkozas: "IT"
    },
    allatka: kutya
}