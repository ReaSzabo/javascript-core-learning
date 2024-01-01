class Kocsika {

    color = null;
    speed = null;

    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    logColor() {
        console.log("Ez a kocsi " + this.color);
    }

}

let andikaKocsi = new Kocsika();
andikaKocsi.color = "blue";
andikaKocsi.speed = 100;

let mateKocsi = new Kocsika("red", 101);

andikaKocsi.logColor();
