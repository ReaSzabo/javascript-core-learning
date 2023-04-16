
/////////////// SPLIT /////////////////
console.log("SPLIT")

// A split() metódussal feldarabolhatunk egy stringet egy tömbbé.
// Ehhez csak az kell, hogy a stringben legyen valamilyen ún. határoló karakter (separator).
// Vegyünk egy példát.

// Van egy string-ünk, amiben az elemek fel vannak sorolva vesszővel.
var kajaLista = "sajt,tej,kolbász,kenyér,rágó,narancs";
// Daraboljuk fel a vesszők mentén.
var kajaTomb = kajaLista.split(",");
console.log(kajaTomb) // [sajt, tej, kolbász, kenyér, rágó, narancs]

// Így már for ciklussal bejárható:
for (var i = 0; i < kajaTomb.length; i++) {
  console.log(kajaTomb[i]);
}

