// Készíts egy osztályt. Legyen legalább egy mezője és egy metódusa.
// Készíts egy második osztályt. Ez legyen az előző osztály gyermek osztálya.
// A második osztályban írd felül az első osztály egy metódusát.

// Ezzel megvalósítod a polimorfizmust.


class Clothes {

    type = null;

    setType(type) {
        this.type = type;
    }
}

class Coats extends Clothes {

    setType(type) {
        this.type = type;
    }

}