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

isNew = (obj) => {
  if (obj.isNew == true) {
    console.log("The " + obj.brand + " " + obj.type + " is new.")
  } else {
    console.log("The " + obj.brand + " " + obj.type + " is not new.")
  }
}

// a function-t, ne tedd bele a függvény nevébe (de ez csak apróság)

isNew(kocsi1);
isNew(kocsi2);