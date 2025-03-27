// Hiba keresés/találat nem csak a javascript motor által történhet.
// Mi is "dobhatunk" saját hibát, a throw kulcsszóval.

try {
    var number1 = 1;
    var number2 = "asztal";
    if (isNaN(number1 / number2)) {
        throw "Nem igazi szám";
    }
}
catch (errorka) {
    console.log("Ez volt az error: " + errorka)
}
