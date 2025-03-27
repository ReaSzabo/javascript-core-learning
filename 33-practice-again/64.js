// What would we see on the console? - 3

let favoriteFoods = ["cheeseburger", "chilaquiles", "pasta"];
if (favoriteFoods.length == 3) {
    favoriteFoods.push("fish");
}
if (favoriteFoods.includes("fish")) {
    favoriteFoods.push("chips");
}
let counter = 0;
for (let i = 0; i < favoriteFoods.length; i += 1) {
    if (favoriteFoods[i].charAt(0) == "c") {
        counter++;
    }
}
switch (counter) {
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;
    case 5:
        console.log("5");
        break;
}
