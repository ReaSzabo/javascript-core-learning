/*
Egy mondatban szereplő árakat cserélj ki olyan árakra, amiken 20% kedvezményt hajtottak végre.
Inputs:
    The new price of the TV is $20.
    The new price of the TV is $40
    I have $300, what about you?
    Ke$ha.
*/


let sentence1 = "The new price of the TV is $20.";
let sentence2 = "The new price of the TV is $40";
let sentence3 = "I have $300, what about you?";
let sentence4 = "Ke$ha.";


changeThePrice = (s) => {
    let wholeS = s.split("$");
    let priceNum = wholeS[1].match(/\d+/g);
    let updatedPrice = priceNum * 0.8;

    wholeS[1] = wholeS[1].replaceAll(priceNum, updatedPrice);

    s = wholeS.join("$");

    console.log(s);
}


changeThePrice = (s) => {
    let wholeS = s.split("$");
    let price = wholeS[1];
    let priceNum = wholeS[1].match(/\d+/g);
    let updatedPrice = priceNum * 0.8;

    wholeS[1] = wholeS[1].replaceAll(priceNum, updatedPrice);

    s = wholeS.join("$");

    console.log(s);
}


changeThePrice(sentence1);
changeThePrice(sentence2);
changeThePrice(sentence3);
changeThePrice(sentence4);