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

benceKocsi.logBrand(); // Mit ír ki? - A márka: Ford

var feriKocsi = new Kocsi("szürke", "Suzuki", false);

benceKocsi.color = feriKocsi.color;

feriKocsi.changeColor("fekete");

console.log(feriKocsi.getColor()); // Mit ír ki? - fekete
