// Készíts egy osztályt. Legyen legalább egy privát mezője. Ez legyen elrejtve a külvilág elöl.
// Oldd meg, hogy kívülről is hozzá tudjanak férni, de csak egy metódus segítségével. (getter és setter)
// Illetve biztosítsd, hogy csak egy metódus segítségével lehessen felülírni.

// Ezzel megvalósítod az "Egységbe zárást" vagy másnéven adatelrejtést.  

// Hogy hívjuk ezt angolul? - encapsulation

class Plants {

    #isGreen = null;

    getIsGreen() {
        return this.#isGreen;
    }

    setIsGreen() {
        this.#isGreen = !this.#isGreen;
    }

    // TODO getter és setter
}