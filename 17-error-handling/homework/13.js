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

// Mit csinál a setSzin metódus?
// Próbáld ki!
andiCar.setSzin("piros");
// Ellenőrizd az új szin értéket!
console.log(andiCar.szin);

console.log(andiCar.getFogyasztas());
