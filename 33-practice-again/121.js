// Vizsgáld meg, hogy a tömb elemei között van-e 7-tel osztható!

let testArray = [55, 66, 33, 22, 11, 77];

let isDivBySeven = testArray.some(element => element % 7 == 0);

console.log(isDivBySeven);

