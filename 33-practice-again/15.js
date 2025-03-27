// Használd a replaceAll metódust, hogy a tömb minden elemében kicseréld a "tűz" szót "jég"-re!
let tuzesSzavak = ["tűzvarázsló", "tűzmágia", "tűzhalál", "tűz dala", "tűzgyűrű", "pusztító tűz", "tűz"];

let jegesSzavak = [];

for (let i = 0; i < tuzesSzavak.length; i++) {
    jegesSzavak.push(tuzesSzavak[i].replaceAll("tűz", "jég"));
}

console.log(jegesSzavak);

let jegesSzavak2 = [];

tuzesSzavak.forEach(element => {
    jegesSzavak2.push(element.replaceAll("tűz", "jég"));
});

console.log(jegesSzavak2);