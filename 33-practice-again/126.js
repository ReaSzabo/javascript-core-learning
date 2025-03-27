// What will be on the console? 


class Building {
    owner = null;
    area = null;
    getPrice = function () {
        return this.area * 500000;
    }
}

class House {
    owner = null;
    area = null;
    floors = null;
}

let smallHouse = new House();
smallHouse.owner = "Zsoltika";
smallHouse.area = 100;
smallHouse.floors = 2;
var price = smallHouse.getPrice();

console.log(price)