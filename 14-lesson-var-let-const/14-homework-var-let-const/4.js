// Írj egy programot, ami 1 autó objektumot kap paraméterül és kiírja a console-ra,
// hogy új-e.

let kocsi1 = {
    brand: "Ford",
    type: "Fiesta",
    price: 1000000,
    isNew: false
}

let kocsi2 = {
    brand: "Honda",
    type: "Jazz",
    price: 5400000,
    isNew: true
}

function isNew(car) {
    if (car.isNew == true) {
        return "is new";
    }
    return "is used";
}
console.log(isNew(kocsi1))
console.log(isNew(kocsi2))