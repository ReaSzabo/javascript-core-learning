var andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,
    indit: function () {
        this.utonVan = true;
    },
    leallit: function () {
        this.utonVan = false;
    }
}

andiCar.indit();
console.log(andiCar.utonVan);
andiCar.leallit();
console.log(andiCar.utonVan);
