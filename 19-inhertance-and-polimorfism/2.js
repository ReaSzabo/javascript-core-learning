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
