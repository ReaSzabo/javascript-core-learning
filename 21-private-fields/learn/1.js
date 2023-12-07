// Így tudunk privát mezőket létrehozni javascriptben.

class Kocsika {
    // Ez privát.
    #speed = null;

    // Ez publikus.
    color = null;

    constructor(speed, color) {
        this.#speed = speed;
        this.color = color;
    }

}

// Példányosítunk
var car1 = new Kocsika(100, "red",);

// A publikus mezőket tudjuk módosítani.
car1.color = "brown";

// A publikus mezőkhöz hozzáférünk.
console.log(car1.color);

// A privát mezőket nem tudjuk módosítani.
car1.#speed = 200;

// A privát mezőkhöz nem férünk hozzá.
console.log(car1.#speed);