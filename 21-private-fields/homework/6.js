// Itt látsz egy osztályt.
// Egészítsd ki a setSpeed metódust úgy, hogy hibát dobjon (hívja meg a hibakezelés metódust), 
// ha negatív számot akarnak beállítani a speed property-nek.

class Kocsika {
    // Ez privát.
    #speed = 0;

    constructor(speed) {
        this.#speed = speed;
    }

    setSpeed(speed) {
        this.#speed = speed;
    }

    getSpeed() {
        return this.speed;
    }

    hibaKezeles() {
        throw new Error("Nem megfelelő sebesség")
    }
}

let car1 = new Kocsika(0);

car1.setSpeed(-1);