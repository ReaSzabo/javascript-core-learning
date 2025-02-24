console.log("Exercise 9");
// Használd a replaceAll metódust, hogy a tömb minden elemében kicseréld a "tűz" szót "jég"-re!
var tuzesSzavak = ["tűzvarázsló", "tűzmágia", "tűzhalál", "tűz dala", "tűzgyűrű", "pusztító tűz", "tűz"];

var tuzesSzavak2 = [];

for (let i = 0; i < tuzesSzavak.length; i++) {
    tuzesSzavak2.push(tuzesSzavak[i].replaceAll("tűz", "jég"));
}

console.log(tuzesSzavak2);