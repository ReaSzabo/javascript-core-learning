// Írj egy függvényt, ami 2 autó objektumot kap paraméterül és az olcsóbbal tér vissza.
let kocsi1 = {
    brand: "Ford",
    type: "Fiesta",
    price: 1000000,
    isNew: false
}

let kocsi2 = {
    brand: "Honda",
    type: "Jazz",
    price: 1400000,
    isNew: false
}

cheaperCar = (obj1, obj2) => {
    if (obj1.price == obj2.price) {
        return "They have the same price, which is: " + obj1.price
    } else if (obj1.price < obj2.price) {
        return obj1;
    }
    return obj2;
}

console.log(cheaperCar(kocsi1, kocsi2));

