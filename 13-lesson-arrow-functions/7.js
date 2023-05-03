// We want to set the text on a button on a website.
// The only way to set it is to return it in a function.
// The website uses 3 languages.
var getButtonText = (language) => {
    if (language == "hu") {
        return "Kijelentkezés";
    } else if (language == "de") {
        return "Abmelden";
    } else if (language == "en") {
        return "Log out";
    }
}

var button = getButtonText("hu");
console.log(button);