// Írj egy "kulcsElfordit" metodust, ami ha uton van az auto, akkor megall.
//   Ha pedig nincs uton elindul.
//   (Ellenkezőjére kell állítani az utonVan property-t.)

var andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,
    kulcsElfordit: function () {
        this.utonVan = this.utonVan ? false : true;
        //this.utonVan = !this.utonVan;
    }
}

andiCar.kulcsElfordit();
console.log(andiCar.utonVan);
andiCar.kulcsElfordit();
console.log(andiCar.utonVan);