// Készíts egy osztályt. Legyen legalább egy mezője és egy metódusa.
// Készíts egy második osztályt. Ez legyen az előző osztály gyermek osztálya.
// A második osztálynak is adj saját mezőket és metódusokat.

// Ezzel megvalósítod az öröklődést.


class Food {

    type = null;

    setType(type) {
        this.type = type;
    }

    constructor(type) {
        this.type = type;
    }
}

class Pizza extends Food {

    isJunkFood = true;
    numberOfIngredients = 8;

    constructor(isJunkFood, numberOfIngredients) {

        this.isJunkFood = isJunkFood;
        this.numberOfIngredients = numberOfIngredients;

    }
}


let Croissant = new Food("Pastry");

let HawaiiPizza = new Pizza(true, 9);