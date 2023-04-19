var topanka = {
    size: 38,
    color: "black",
    material: "leather",
    style: "sport",
    isNew: true,
    price: 399.99
}

var doggy = {
    age: 2,
    hasClothes: true,
    isDangerous: false,
    name: "Ulászló",
    owner: "Andika",
    weight: 3.2
}

var city = {
    name: "Madrid",
    country: "Spain",
    population: 3223334,
    isCapital: true,
    area: 604.31,
    isCatalan: false
}

// Láthatjuk, hogy az objectumokban kulcs-érték párok jelennek meg.
// A "topanka" esetén a "size" egy kulcs és a "38" egy érték.
// A "doggy" esetén a "hasClothes" egy kulcs és a "true" egy érték.
// A "city" esetén a "country" egy kulcs és a "Spain" egy érték.

// Az objectum a JavaScript nyelvben egy Map, azaz kulcs-érték párok gyűjteménye.
// Ezeket a kulcs-érték párokat property-nek (tulajdon) nevezzük.

// A kulcs-érték párok gyűjteményének különböző neveit használjuk különböző programozási nyelvekben.
// Dictionary
// Map
// Associative array
// Asszociatív tömb

// Hogy nyerjük ki egy objektum egy property-jét.
// A kulcsra hivatkozunk és így megkaptjuk az értéket.
// Erre 2 lehetőség van.

// 1. lehetőség
// Az objektum (object) után teszünk egy pontot és megadjuk a kulcsot.
console.log("A város neve: " + city.name); // A város neve: Madrid
console.log("A topánka ára: $" + topanka.price); // A topánka ára: $399.99


// 2. lehetőség
// Az objektumot kulcsok tömbjének tekintjük és stringként hivatkozunk a kívánt kulcsra.
console.log("A kutya kora: " + doggy["age"]); // A kutya kora: 2
console.log("A város népessége: " + city["population"]); // A város népessége: 3223334
