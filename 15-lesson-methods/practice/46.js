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


for (i = 0; i < csajok.length; i++) {
  if (csajok[i].single == true) {
    csajok[i].single = false;
  }
}
