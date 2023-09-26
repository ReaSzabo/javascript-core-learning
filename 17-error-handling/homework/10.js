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

// Mit csinál az indít metódus?
// Hogyan hívjuk meg?
andiCar.indit();
// Ellenőrízd az utonVan property-t, hogy megváltozott-e.
console.log(andiCar.utonVan);
