/*
Készíts egy Car osztályt!
Definiálj egy mezőt a sebességnek! A kezdő értéke legyen: 0.
Készíts egy metódust, ami a kap egy paramétert!
Nőveld meg a sebesség property-t ezzel az értékkel!
*/

class Car {
    speed = null;
    increaseSpeed(x) {
        this.speed = this.speed + x;
    }
}

const redCar = new Car();
redCar.increaseSpeed(15);
console.log(redCar.speed);



