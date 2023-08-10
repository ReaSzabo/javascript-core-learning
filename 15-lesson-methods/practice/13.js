// Egy hallgató egy igaz-hamis feladatsort oldott meg.
// A feladatsorban 3 kérdés volt, erre 3 igaz/hamis választ adott.
// A válaszokat tömbben tároltuk el.
// A helyes megoldások: 1. true, 2. false, 3. true.
// Vizsgáld meg egy programmal, hogy a hallgató által megadott válaszok helyes-e, ha mind helyes, 
// akkor írd ki: "Ügyes", egyébként írd ki: "Süsü" !

var hallgatoValaszai = [true, true, true];

if (hallgatoValaszai[0] == true && hallgatoValaszai[1] == false && hallgatoValaszai[2] == true) {
    console.log("Ügyes");
} else {
    console.log("Süsü")
}