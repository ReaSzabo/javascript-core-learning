var andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,

    indit: function () {
        this.utonVan = true;
    }
}

andiCar.indit();
console.log(andiCar.utonVan);