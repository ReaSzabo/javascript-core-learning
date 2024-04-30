var szamok = [10, 200, 30, 422, 52, 6, 7, 8000, 9];
var novenyek = ["csipkebokor", "tuja", "almafa", "nád"];

// Rendezd a számokat egyszerű módszerrel növekvő sorrendbe a növényeket pedig alfabetikus sorrendbe.
novenyek = novenyek.sort()
console.log(novenyek)


szamok = szamok.sort((szam1, szam2) => szam1 - szam2)
console.log(szamok)