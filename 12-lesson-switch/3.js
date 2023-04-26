// The default keyword specifies the code to run if there is no case match.

var favoriteToy = "lego";

switch (favoriteToy) {
    case "matchbox":
        console.log("Their favorite toy is matchbox.");
        break;
    case "ball":
        console.log("Their favorite toy is ball.");
        break;
    case "doll":
        console.log("Their favorite toy is doll.");
        break;
    default:
        console.log("The favorite toy is not matchbox, ball or doll.");
}

// This is the same as an if-else if statement

if (favoriteColor == "matchbox") {
    console.log("Their favorite toy is matchbox.");
} else if (favoriteColor == "ball") {
    console.log("Their favorite toy is ball.");
} else if (favoriteColor == "doll") {
    console.log("Their favorite toy is doll.");
} else {
    console.log("The favorite toy is not matchbox, ball or doll.");
}