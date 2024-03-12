class Kocsi {
    color = null;
    brand = null;
    isElectric = null;

    constructor(color, brand, isElectric) {
        this.color = color;
        this.brand = brand;
        this.isElectric = isElectric;
    }

    logBrand() {
        console.log("A márka: " + this.brand);
    }

    changeColor(colour) {
        this.color = colour;

    }

    getColor() {

        return this.color;
    }
}

var benceKocsi = new Kocsi("piros", "Ford", false);

benceKocsi.color = "libafos";

benceKocsi.logBrand();

var feriKocsi = new Kocsi("szürke", "Suzuki", false);

benceKocsi.color = feriKocsi.color;

feriKocsi.changeColor("fekete");

console.log(feriKocsi.getColor());


var babakocsi = {
    model: "1.0",
    name: "babyBorn",
    hasBaby: false,
}




