// Vizsgáld meg, hogy a tömb elemei között van-e 7-tel osztható!

var testArray = [55, 66, 33, 22, 11, 77];


if (testArray.some((element) => element % 7 == 0)) {

    console.log("Van héttel osztható eleme a tömbnek.")
}