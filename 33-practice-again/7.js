
console.log("Exercise #1");
// Írd ki a szavakat egy sorba szóközzel elválasztva!
let szo1 = "This";
let szo2 = "is";
let szo3 = "a";
let szo4 = "good";
let szo5 = "idea!";

console.log(szo1 + " " + szo2 + " " + szo3 + " " + szo4 + " " + szo5);




console.log("Exercise #2");
// Írd ki a tömb elemeit egy sorba összefűzve, szóközzel elválasztva (for ciklussal)!
const szavak1 = ["Kerek", "erdő", "közepén"];

let mondat1 = ""

for (let i = 0; i < szavak1.length; i++) {
    mondat1 = mondat1 + szavak1[i] + " ";
}

console.log(mondat1.trim());

let mondat2 = "";

szavak1.forEach(element => {
    mondat2 = mondat2 + element + " ";
});

console.log(mondat2.trim());


console.log("Exercise #3");
// Írd ki a mondat első betűjét! (egy string metódus segítségével)
const mondat3 = "Helló belló";

console.log(mondat3.substring(0, 1));




console.log("Exercise #5");
// Írd ki a mondat negyedik betűjét!
const mondat4 = "Kóborló";

console.log(mondat4.charAt(3));




console.log("Exercise #6");
// Ha a mondat első karaktere t, írd ki: "Ez egy t betűs mondat"!
const mondat5 = "tej kenyér herzszalámi";

if (mondat5.charAt(0) == "t") {
    console.log("Ez egy t betűs mondat");
}





console.log("Exercise #7");
// Ha a mondat utolsó karaktere i, írd ki: "i-re végződik"!
const mondat6 = "tej kenyér herzszalámi";

if (mondat6.charAt(mondat6.length - 1) == "i") {
    console.log("i-re végződik");
}


console.log("Exercise #8");
// Írd ki a mondat első három karakterét a substring metódussal!
const mondat7 = "kiskutya füle";

console.log(mondat7.substring(0, 3));







console.log("Exercise #9");
// Írd ki a mondat első szavát a substring metódussal! (neked kell kiszámolni, hol végződik az első szó)
const mondat8 = "kelemen kabátban";

console.log(mondat8.substring(0, 7));







console.log("Exercise #10");
// Írd ki a szavak első három karakterét a substring metódussal!
const szavak = ["szalámi", "virsli", "kolbász", "szafaládé", "hot dog", "gengszter kolbászkák"];

for (let i = 0; i < szavak.length; i++) {
    console.log(szavak[i].substring(0, 3));
}

szavak.forEach(element => {
    console.log(element.substring(0, 3));
});



console.log("Exercise #11");
// Ha a bútor első két betűje "fa", írd ki: "Fából van."
const butor = "faszék";

if (butor.substring(0, 2) == "fa") {
    console.log("Fából van.");
}







console.log("Exercise #12");
// Ha a tömb elemének első két betűje "fa", írd ki: 
//  "butorok[i] - fából van.", egyébként "butorok[i] - nem fából van."!
const butorok = ["faszék", "vaságy", "bádogsámli", "faágy", "márvány konyhabútor"];

for (let i = 0; i < butorok.length; i++) {
    if (butorok[i].substring(0, 2) == "fa") {
        console.log(`${butorok[i]} - fából van.`);
    } else {
        console.log(`${butorok[i]} - nem fából van.`);
    }
}

