// Írd át "lefest" metódust arrow function-re.

// akkor nem fog működni a this!!!

var andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,
    lefest: (szin) => {
        this.szin = szin;
    }
}

andiCar.lefest("kék");
console.log(andiCar.szin);
