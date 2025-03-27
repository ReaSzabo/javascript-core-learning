/*
Egy mondatban szereplő árakat cserélj ki olyan árakra, amiken 20% kedvezményt hajtottak végre.
Inputs:
    The new price of the TV is $20.
    The new price of the TV is $40.
    Ke$ha.
*/


let sentence1 = "The new price of the TV is $20.";
let sentence2 = "The new price of the TV is $40.";
let sentence3 = "Ke$ha.";

discount = (s) => {

    let containsNumber = /\d/.test(s);

    if (containsNumber) {
        let arr = s.split(" ");
        arr[arr.length - 1] = "$" + arr[arr.length - 1].substring(1, 3) * 0.8 + ".";
        s = arr.join(" ");

        console.log(s);
    } else {
        console.log("The sentence doesn't contain a price.");
    }
}

discount(sentence1);
discount(sentence2);
discount(sentence3);