// Írj egy függvényt, ami 1 autó objektumot kap paraméterül és kiírja a console-ra,
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


var ujE = (car) => {
    if (car.isNew) {
        console.log("UJ ye");
    }
}

ujE(kocsi1);
ujE(kocsi2);