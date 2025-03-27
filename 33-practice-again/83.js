// Írj egy függvényt, ami a lefest metódus meghívása nélkül átírja a színt.

let andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,
    lefest: function (szin) {
        console.log(this.szin)
        this.szin = szin;
    }
}

/*andiCar.lefest("kék");
console.log(andiCar.szin)*/

lefestFunction = (obj, color) => {
    obj.szin = color;

    return obj;
}

console.log(lefestFunction(andiCar, "kék"));
