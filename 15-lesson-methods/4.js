var andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,
    logFogyasztas: function () {
        console.log(this.suly / 100 + "L/100km");
    },
}

andiCar.logFogyasztas();

