// Írj egy függvényt, ami 1 autó objektumot kap paraméterül és kiírja a console-ra,
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

let worthIt = (kocsika) => {
    if (kocsika.year < 2010 && kocsika.price < 1000000) {
        console.log(kocsika.brand + ": az autót megéri megvenni.");
        kocsika.isGoodToBuy = true;
    } else {
        kocsika.isGoodToBuy = false;
    }
    console.log(kocsika)
}

worthIt(kocsi1)
worthIt(kocsi2)