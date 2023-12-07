// Oldjuk meg, hogy hozzáférjünk a privát adattaghoz. Készítjünk setter és getter metódusokat.

class Kocsika {
    // Ez privát.
    #speed = null;

    constructor(speed) {
        this.#speed = speed;
    }

    setSpeed(speed) {
        this.#speed = speed;
    }

    getSpeed() {
        return this.speed;
    }
}

// Példányosítunk
var car1 = new Kocsika(100);

// A privát mezőket nem tudjuk módosítani.
car1.setSpeed(200);

// A privát mezőkhöz nem férünk hozzá.
console.log(car1.getSpeed());