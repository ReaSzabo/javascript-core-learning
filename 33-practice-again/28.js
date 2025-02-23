// Láthatjuk, hogy az objektumokban kulcs-érték párok jelennek meg.
// A "topanka" esetén a "size" egy kulcs és a "38" egy érték.
// A "doggy" esetén a "hasClothes" egy kulcs és a "true" egy érték.
// A "city" esetén a "country" egy kulcs és a "Spain" egy érték.

// Az objectum a JavaScript nyelvben egy Map, azaz kulcs-érték párok gyűjteménye.
// Ezeket a kulcs-érték párokat property-nek (tulajdon) nevezzük.

var doggy = {
    age: 2,
    hasClothes: true,
    isDangerous: false,
    name: "Ulászló",
    owner: "Andika",
    weight: 3.2
}

// 1. lehetőség
// Az objektum (object) után teszünk egy pontot és megadjuk a kulcsot.
console.log("A kutya kora: " + doggy.age); // A kutya kora: 2


// 2. lehetőség
// stringként hivatkozunk a kívánt kulcsra.
console.log("A kutya kora: " + doggy["age"]); // A kutya kora: 2
