/* 
Multi-Level Inheritance
Create a Vehicle class with brand and speed properties.
Extend it with a Car class that adds fuelType.
Extend Car further into ElectricCar, adding a batteryLife property.
Instantiate an ElectricCar and log all details.
*/

class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
}

class Car extends Vehicle {
    constructor(brand, speed, fuelType) {
        super(brand, speed);
        this.fuelType = fuelType;
    }
}

class ElectricCar extends Car {
    constructor(brand, speed, fuelType, batteryLife) {
        super(brand, speed, fuelType);
        this.batteryLife = batteryLife;
    }
}

const myElectricCar = new ElectricCar("BYD", 250, "electricity", "400000");

console.log(myElectricCar);