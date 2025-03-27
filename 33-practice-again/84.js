// Írj egy "addUtanfuto" metodust, ami megnöveli a sulyt 200-zal.

let andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,
    addUtanfuto: function (suly) {
        this.suly = this.suly + 200;
    }
}

andiCar.addUtanfuto();
console.log(andiCar.suly)