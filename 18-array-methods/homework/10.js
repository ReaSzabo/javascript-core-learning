// Vizsgáld meg, hogy a tömb elemei közül mind 3-mal osztható-e!

var testArray = [3, 33, 6, 66, 999, 369, 9612];


if (testArray.every((element) => element % 3 == 0)) {

    console.log("A tömb minden eleme osztható hárommal.")
} else {

    console.log("A tömb nem minden eleme osztható hárommal.")
}