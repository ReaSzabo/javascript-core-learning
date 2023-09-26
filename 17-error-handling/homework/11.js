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

// Indítsd el az autót.
andiCar.indit();
// Ellenőrizd az utonVan property-t.
console.log(andiCar.utonVan)
// Állítsd le az autót.
andiCar.leallit();
// Ellenőrizd az utonVan property-t.
console.log(andiCar.utonVan)