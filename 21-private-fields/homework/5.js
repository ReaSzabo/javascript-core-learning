// Készíts egy osztályt. Legyen legalább egy privát mezője. Ez legyen elrejtve a külvilág elöl.
// Oldd meg, hogy kívülről is hozzá tudjanak férni, de csak egy metódus segítségével.
// Illetve biztosítsd, hogy csak egy metódus segítségével lehessen felülírni.

// Ezzel megvalósítod az "Egységbe zárást".


class Plants {

    #isGreen = null;

    getIsGreen() {
        return this.setIsGreen;
    }

    setIsGreen(isGreen) {
        this.isGreen = isGreen;
    }
}