var favoriteDay = "Monday";

if (favoriteDay == "Monday") {
    console.log("Their favorite day is Monday.");
} else if (favoriteDay == "Tuesday") {
    console.log("Their favorite day is Tuesday.");
} else if (favoriteDay == "Wednesday") {
    console.log("Their favorite day is Wednesday.");
} else if (favoriteDay == "Thursday") {
    console.log("Their favorite day is Tuesday.");
} else if (favoriteDay == "Friday") {
    console.log("Their favorite day is Friday.");
} else {
    console.log("Their favorite day is on the weekend.");
}

switch (favoriteDay) {
    case "Monday": console.log("Their favorite day is Monday."); break;
    case "Tuesday": console.log("Their favorite day is Tuesday."); break;
    default: console.log("Their favorite day is on the weekend.");
}