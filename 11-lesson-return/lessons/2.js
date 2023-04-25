// ugyanúgy adhatunk meg paramétereket is
function felez(szam) {
  return szam / 2;
}

var eredetiSzam = 10;
var ujSzam = felez(eredetiSzam);
console.log(ujSzam); // 5


// felülírhatjuk az eredeti értéket is
var szotyiSzam = 100;
szotyiSzam = felez(szotyiSzam);
console.log(szotyiSzam); // 50
