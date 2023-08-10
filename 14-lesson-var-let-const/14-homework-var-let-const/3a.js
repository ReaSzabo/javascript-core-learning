// Írj egy függvényt, ami 2 autó objektumot kap paraméterül és az olcsóbbat adja vissza.
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

function cheaper(car1, car2) {
    if (car1.price > car2.price) {
        return car2;
    }
    return car1;
}

console.log(cheaper(kocsi1, kocsi2))