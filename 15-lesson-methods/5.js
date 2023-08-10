var andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,
    getFogyasztas: function () {
        return this.suly / 100;
    },
    setSzin: function (szin) {
        this.szin = szin;
    }
}

andiCar.getFogyasztas();

