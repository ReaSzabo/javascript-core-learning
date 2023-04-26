// We want to set the text on a button on a website.
// The only way to set it is to return it in a function.
// The website uses 3 hanguages.
function getButtonText(language) {
    if (language == "hu") {
        return "Kilépés";
    } else if (language == "de") {
        return "Abmelden";
    } else if (language == "en") {
        return "Log out";
    }
}

var button = getButtonText("hu");