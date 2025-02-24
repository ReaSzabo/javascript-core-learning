
console.log("Exercise #1");
// Írd ki a szavakat egy sorba szóközzel elválasztva!
var szo1 = "This";
var szo2 = "is";
var szo3 = "a";
var szo4 = "good";
var szo5 = "idea!";

console.log(szo1 + " " + szo2 + " " + szo3 + " " + szo4 + " " + szo5);



console.log("Exercise #2");
// Írd ki a tömb elemeit egy sorba összefűzve, szóközzel elválasztva (for ciklussal)!
var szavak = ["Kerek", "erdő", "közepén"];

var mondat = ""

for (let i = 0; i < szavak.length; i++) {
    mondat = mondat + szavak[i] + " ";
}


console.log(mondat.trim());



console.log("Exercise #3");
// Írd ki a mondat első betűjét! (egy string metódus segítségével)
var mondat = "Helló belló";

console.log(mondat.substring(0, 1));




console.log("Exercise #5");
// Írd ki a mondat negyedik betűjét!
var mondat3 = "Kóborló";

console.log(mondat.charAt(3));




console.log("Exercise #6");
// Ha a mondat első karaktere t, írd ki: "Ez egy t betűs mondat"!
var mondat4 = "tej kenyér herzszalámi";

if (mondat4.charAt(0) == "t") {
    console.log("Ez egy t betűs mondat");
}





console.log("Exercise #7");
// Ha a mondat utolsó karaktere i, írd ki: "i-re végződik"!
var mondat4 = "tej kenyér herzszalámi";

if (mondat4.charAt(mondat4.length - 1) == "i") {
    console.log("i-re végződik");
}



console.log("Exercise #8");
// Írd ki a mondat első három karakterét a substring metódussal!
var mondat5 = "kiskutya füle";

console.log(mondat5.substring(0, 3));







console.log("Exercise #9");
// Írd ki a mondat első szavát a substring metódussal! (neked kell kiszámolni, hol végződik az első szó)
var mondat6 = "kelemen kabátban";

console.log(mondat6.substring(0, 7));







console.log("Exercise #10");
// Írd ki a szavak első három karakterét a substring metódussal!
var szavak = ["szalámi", "virsli", "kolbász", "szafaládé", "hot dog", "gengszter kolbászkák"];

for (let i = 0; i < szavak.length; i++) {
    console.log(szavak[i].substring(0, 3));
}






console.log("Exercise #11");
// Ha a bútor első két betűje "fa", írd ki: "Fából van."
var butor = "faszék";

if (butor.substring(0, 2) == "fa") {
    console.log("Fából van.");
}







console.log("Exercise #12");
// Ha a tömb elemének első két betűje "fa", írd ki: 
//  "butorok[i] - fából van.", egyébként "butorok[i] - nem fából van."!
var butorok = ["faszék", "vaságy", "bádogsámli", "faágy", "márvány konyhabútor"];

for (let i = 0; i < butorok.length; i++) {
    if (butorok[i].substring(0, 2) == "fa") {
        console.log("butorok[i] - fából van.");
    } else {
        console.log("butorok[i] - nem fából van.");
    }
}
