console.log("Exercise 12");
// A társaság tegnap este kocsmázás közben egy fiú társaságba futott.
// Mindenki bepasizott, ezért állítsd át a szingli státuszokat hamisra.
// (Egy for ciklussal járd be a "csajok" tömböt. A tömb minden eleme egy-egy objektum.)
var csajok = [
  {
    name: "Ványa",
    single: true
  },
  {
    name: "Szvetlana",
    single: true
  },
  {
    name: "Olga",
    single: true
  },
  {
    name: "Nádja",
    single: true
  },
  {
    name: "Tánya",
    single: true
  }
];


for (let i = 0; i < csajok.length; i++) {
  csajok[i].single = false;
}

console.log(csajok);