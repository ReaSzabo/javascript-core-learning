// Honnan tudhatjuk, hogy milyen property-jei vannak egy objektumnak?
var car = {
  name: "Fiat",
  model: "500",
  weight: "850kg",
  color: "white",
  driver: "Andika"
}

// Az Object.keys() metódust használjuk, hogy megkapjuk a kulcsokat tömbként.
// (Csak a kulcsokat, az értékek nélkül)
// A zárójelek közé kell írni az objektumot magát.

console.log(Object.keys(car)); // a kulcsok egy tömbben: ["name", "model", "weight", "color", "driver"]
