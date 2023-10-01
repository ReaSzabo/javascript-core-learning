class House {
    area = 0;
    floor = 0;
    price = 0;

    constructor(area, floor) {
        this.area = area;
        this.floor = floor;
    }

    setArea = function (area) {
        this.area = area;
    }

    setFloor = function (floor) {
        this.floor = floor;
    }

    getPrice = function () {
        return this.floor * this.area * 10000 + "Ft";
    }
}

var house1 = new House(15, 1);
house1.setArea(100);
house1.setFloor(3);
console.log(house1.getPrice());