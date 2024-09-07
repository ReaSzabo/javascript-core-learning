const virslikutya = {
    meret: "hosszu",
    szin: "harlekin",
    fules: true,
    gazda: {
        name: "Koku"
    },
    suly: 12,
    ugat: function () {
        console.log("UGATOK")
    },
    megmondMeret() {
        console.log(this.meret)
    }
}

virslikutya.megmondMeret();




class Kutyu {
    cuki = null;
    harap(x) {
        //console.log("Megharaptam " + x + "-t.")
        console.log(`Megharaptam ${x}-t.`)
    }
}

let logyuli = new Kutyu();
logyuli.cuki = true;

logyuli.harap("Koncz");
