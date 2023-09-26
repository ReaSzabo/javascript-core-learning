// Írd át "lefest" metódust arrow function-re.

var andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,
    lefest: function (szin) {
        this.szin = szin;
    }
}

andiCar.lefest("kék");
console.log(andiCar.szin)
