// Írj egy "logVonohorogStatusz" metodust, ami kilogolja, hogy van-e vonohorog az autón.
//   Ha van, logold: "Szabinak van vonóhorga"
//   Ha nincs, logold: "Szabi nem tud elvontatni"

let szabiCar = {
    marka: "Opel",
    modell: "Insignia",
    suly: 1550,
    szin: "fekete",
    vonohorog: false,
    logVonohorogStatusz: function (vonohorog) {
        if (!this.vonohorog) {
            console.log("Szabi nem tud elvontatni");
        } else {
            console.log("Szabinak van vonóhorga");
        }
    }
}

szabiCar.logVonohorogStatusz();
