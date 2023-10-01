// Írj egy "lefest" metódust, ami kap egy "szín" paramétert és átállítja az autó szín paraméterét.

var andiCar = {
    marka: "Fiat",
    modell: "500",
    suly: 850,
    szin: "fehér",
    utonVan: false,
    lefest: function (color) {
        this.szin = color;
    }
}

andiCar.lefest("kék");
console.log(andiCar.szin)
