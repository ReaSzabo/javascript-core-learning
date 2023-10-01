// Írj egy "logVonohorogStatusz" metodust, ami kilogolja, hogy van-e vonohorog az autón.
//   Ha van, logold: "Szabinak van vonóhorga"
//   Ha nincs, logold: "Szabi nem tud elvontatni"

var szabiCar = {
    marka: "Opel",
    modell: "Insignia",
    suly: 1550,
    szin: "fekete",
    vonohorog: false,
    logVonohorogStatusz: function () {
        console.log(this.vonohorog ? "Szabinak van vonóhorga" : "Szabi nem tud elvontatni")
    }
}

szabiCar.logVonohorogStatusz();