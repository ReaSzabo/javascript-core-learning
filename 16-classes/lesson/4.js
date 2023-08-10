class House {
    area = 0;
    floor = 0;
    price = 0;

    constructor(area, floor) {
        this.area = area;
        this.floor = floor;
    }

    getPrice = function () {
        this.floor * this.area * 10000 + "Ft";
    }
}

const house1 = new House();
house1.setArea(100);
house1.setFloor(3);
console.log(house1.getPrice())