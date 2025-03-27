// Írj egy "getAutoNev" metodust, ami az autó teljes nevével tér vissza
//   az alábbi formában "Opel - Insignia"

let szabiCar = {
    marka: "Opel",
    modell: "Insignia",
    suly: 1550,
    szin: "fekete",
    vonohorog: false,
    getAutoNev: function () {
        return this.marka + " - " + this.modell;
    }
}

console.log(szabiCar.getAutoNev());
