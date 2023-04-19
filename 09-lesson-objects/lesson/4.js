/*****************************************/
/************* Objektumok ****************/
/*****************************************/

// Ezek összetett adattípusok, szóval különválasztjuk a primitív adattípusoktól.

// Egy "valamiről" van szó, ennek vannak tulajdonságai.
// Egy objektumban ezeket gyűjtjük össze.
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

// Vegyük észre: az objektumon belül nem egyenlőség jellel adunk értéket, hanem kettősponttal.

// Irassuk ki őket:
console.log(topanka);
// Object { size: 38, color: "black", material: "leather", style: "sport", isNew: "true", price: 399.99 }

console.log(doggy);
// Object { age: 2, hasClothes: true, isDangerous: false, name: "Ulászló", owner: "Andika", weight: 3.2 }

console.log(city);
// Object { name: "Madrid", country: "Spain", population: 3223334, isCapital: true, area: 604.31, isCatalan: false }
