// add properties and create getPrice method

class House {
    area = 50;
    city = "Debrecen";
    price = 59;
    getPrice() {
        return this.price;
    }
}

const haz = new House()
haz.price = 1000;
console.log(haz.getPrice())
