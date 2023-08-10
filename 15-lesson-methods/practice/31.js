// Fűzzük össze egy tömb elemeit!
var szavak = ["Egy ", "palack ", "jó ", "bor "];

// A szavakat egy "mondat" változóban fogjuk egyesíteni.
var mondat = ""; // Először legyen az értéke üres string.

// 1. Írjuk, ki for ciklus nélkül
// 2. Írjuk, ki for ciklussal

// 1. 
// mondat = szavak[0] + szavak[1] + szavak[2] + szavak[3]

// 2.
for (let i = 0; i < szavak.length; i++) {
    //mondat.push(szavak[i]);
    mondat = mondat + szavak[i];
}

console.log(mondat)
