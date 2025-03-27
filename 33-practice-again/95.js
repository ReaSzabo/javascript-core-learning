// Leggyakrabban fájl megnyitáskor kell ilyet használnunk.
// Mikor látunk rá esélyt, hogy mégsincs ott valamilyen okból a fájl, amire szükség van.

try {
    File.open("./data.json");
} catch (errorka) {
    console.error("A keresett file nem található. Ez a pontos hibaüzenet: " + errorka);
}

console.log("Try-catch block utáni kód futás folytatódik");


