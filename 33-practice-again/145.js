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
        try {
            if (speed < 0) {
                this.hibaKezeles();
            }

            this.#speed = speed;
        }
        catch (error) {
            console.log(error);
        }
    }

    getSpeed() {
        return this.speed;
    }

    hibaKezeles() {
        throw "This number cannot be accepted as speed.";
    }
}

let car1 = new Kocsika(0);

car1.setSpeed(100);
car1.setSpeed(-1);