// Írj egy programot, ami 1 autó objektumot kap paraméterül és kiírja a console-ra,
// hogy új-e (isNew).

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

isNew = (car) => {
    return car.isNew ? "Az autó új" : "Az autó nem új";
}

console.log(isNew(kocsi1));
console.log(isNew(kocsi2));