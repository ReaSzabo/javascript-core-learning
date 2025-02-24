// What would we see on the console? 4

var foods = ["hamburger", "pizza", "pasta"];
foods.push("fish");

switch (foods[foods.length - 1]) {
    case "hamburger":
        console.log("1");
        break;
    case "pizza":
        console.log("2");
        break;
    case "pasta":
        console.log("3");
        break;
    case "fish":
        console.log("4");
        break;
    default:
        console.log("5")
}