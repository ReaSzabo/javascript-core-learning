
console.log("Exercise #1");
// Írd ki a szavakat egy sorba szóközzel elválasztva!
var szo1 = "This";
var szo2 = "is";
var szo3 = "a";
var szo4 = "good";
var szo5 = "idea!";




console.log("Exercise #2");
// Írd ki a tömb elemeit egy sorba összefűzve, szóközzel elválasztva (for ciklussal)!
var szavak = ["Kerek", "erdő", "közepén"];

var mondat = ""

for (let i = 0; i < szavak.length; i++) {
    mondat = mondat + szavak[i] + " ";
}

console.log(mondat);



console.log("Exercise #3");
// Írd ki a mondat első betűjét! (egy string metódus segítségével)
var mondat = "Helló belló";

console.log(mondat.charAt(0));

// Csináld meg ugyanezt a string tömbként való kezelésével (index)

console.log(mondat[0]);

console.log("Exercise #4");
// Írd ki a mondat utolsó betűjét!
var mondat2 = "Zöldöklű öldöklő";

console.log(mondat.charAt(mondat.length - 1));






console.log("Exercise #5");
// Írd ki a mondat negyedik betűjét!
var mondat3 = "Kóborló";

console.log(mondat.charAt(3));




console.log("Exercise #6");
// Ha a mondat első karaktere t, írd ki: "Ez egy t betűs mondat"!
var mondat4 = "tej kenyér herzszalámi";


mondat4.startsWith("t");



console.log("Exercise #7");
// Ha a mondat utolsó karaktere i, írd ki: "i-re végződik"!
var mondat4 = "tej kenyér herzszalámi";







console.log("Exercise #8");
// Írd ki a mondat első három karakterét a substring metódussal!
var mondat5 = "kiskutya füle";


console.log(mondat5.substring(0, 3));





console.log("Exercise #9");
// Írd ki a mondat első szavát a substring metódussal! (neked kell kiszámolni, hol végződik az első szó)
var mondat6 = "kelemen kabátban";



console.log(mondat6.substring(0, 8));




console.log("Exercise #10");
// Írd ki a szavak első három karakterét a substring metódussal!
var szavak = ["szalámi", "virsli", "kolbász", "szafaládé", "hot dog", "gengszter kolbászkák"];






console.log("Exercise #11");
// Ha a bútor első két betűje "fa", írd ki: "Fából van."
var butor = "faszék";







console.log("Exercise #12");
// Ha a tömb elemének első két betűje "fa", írd ki: 
//  "butorok[i] - fából van.", egyébként "butorok[i] - nem fából van."!
var butorok = ["faszék", "vaságy", "bádogsámli", "faágy", "márvány konyhabútor"];
