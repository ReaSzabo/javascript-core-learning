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
