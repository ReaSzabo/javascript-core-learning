// Írjunk egy function-t, amely a paraméreként kapott string első betűjével tér vissza.
function elsoBetu(szo) {
  return szo.charAt(0);
}

var betu = elsoBetu("Aladár");
console.log(betu);

// A visszatérési érték nem csak a változóba kerülhet
console.log(elsoBetu("Baba"));
console.log(elsoBetu("Kapa"));
console.log(elsoBetu("Papa"));
console.log(elsoBetu("Kalap"));
