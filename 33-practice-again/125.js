// parent class and child classes
// inherit members/fields


class Building {
    owner = null;
    area = null;
    getPrice() {
        return area * 1000000;
    }
}

class House extends Building {
    floors = null;
}

class Castle extends Building {
    numberOfServants = null;
}

class Flat extends Building {
    isGroundFloor = null;
}

// Create a class for dresses. Add properties and methods for it.
// Create 2 child classes for Dress. They should have their own properties and methods.

class Dresses {
    constructor(brand, type, color, size, price) {
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.size = size;
        this.price = price;
    }
    displayInfos() {
        console.log(`${this.brand} ${this.type} - Size: ${this.size}, Color: ${this.color}, Price: $${this.price}`)
    }
}

class SummerDresses extends Dresses {
    constructor(brand, type, color, size, price, length) {
        super(brand, type, color, size, price);
        this.lenght = length;
    }
    getLength() {
        return this.length;
    }

}

class EveningDresses extends Dresses {
    constructor(brand, type, color, size, price, material) {
        super(brand, type, color, size, price);
        this.material = material;
    }
    getMaterial() {
        return this.material;
    }
}