// create 3 objects with constructor

class Car {
    name = null;
    year = null;
    color = null;

    constructor(name, year, color) {
        this.name = name;
        this.year = year;
        this.color = color;
    }
}

let firstCar = new Car("Honda Civic", 2003, "fekete");
let secondCar = new Car("Hyundai i20", 2017, "barna");
let thirdar = new Car("Mini Countryman", 2022, "zsálya zöld");
