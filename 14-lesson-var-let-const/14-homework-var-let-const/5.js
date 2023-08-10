// Írj egy programot, ami 1 autó objektumot kap paraméterül és kiírja a consolra,
// hogy az autót megéri-e megvenni.
// Példánkban egy autót akkor érdemes megvenni, ha 2010 előtti és 1 millió ft-nál olcsóbb.
/////// Adj az objektumhoz egy új property-t: isGoodToBuy: true/false

let kocsi1 = {
    brand: "Ford",
    type: "Mondeo",
    price: 15000000,
    year: 2022
}

let kocsi2 = {
    brand: "Suzuki",
    type: "Swift",
    price: 300000,
    year: 2002
}

function getBetter(object) {
    if (object.year < 2010 && object.price < 1000000) {
        console.log("It is good for you.")
        object.isGoodToBuy = true;
    } else {
        console.log("It is not good for you.")
        object.isGoodToBuy = false;
    }
}
getBetter(kocsi1)
getBetter(kocsi2)