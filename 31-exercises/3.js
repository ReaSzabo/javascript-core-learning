// 1. feladat
// "vagy" használata - ||
// Ha a magyarJegy vagy nyelvtanJegy vagy a matekJegy 5-ös, írd ki "Legalább egy jegy ötös", egyébként "Egyik sem 5-ös" !

var magyarJegy = 1;
var nyelvtanJegy = 4;
var matekJegy = 2;




// 2. feladat
// Ha Andi és Máté is éhes, akkor írd ki: "Elmegyünk enni.", egyébként "Még nem eszünk." !

var andiEhes = true;
var mateEhes = true;





// 3. feladat 
// Ha a kutya éhes és 11 óra van, akkor írd ki: "Még nem adok a kutyának enni."!
// Ha a kutya éhes és 12 óra van, akkor írd ki "Adok enni a kutyának."!
// Egyébként írd ki: "Nem csinálok semmit."!

var kutyaEhes = false;
var ora = 12;





// 4. feladat
// Adott egy "szamlalo" nevű változó.
// Ha a számláló értéke nagyobb, mint 10, akkor legyen a számláló értéke eggyel megnövelve.
// Ha a számláló értéke kisebb, vagy egyenlő 10-zel, akkor az értéke legyen 5!

var szamlalo = 10;





// 5. feladat
// Adott egy "konzervSuly" nevű változó.
// A kezdeti értéke 500 gramm.
// A konzerv tulajdonosának van egy macskája és egy kutyája.
// Ha a kutya éhes, ad neki 200g húst a konzervből. (Így a konzerv súlya 300g lesz.)
// Ha a macska éhes, ad neki 100g húst a konzervből. (Így a konzerv súlya 400g lesz.)
// Ha mind a két állat éhes, mindkettőt megeteti 300g-mal. (Így a konzerv súlya 200g lesz.)
// A feladatod az, hogy a "konzervSuly" változónak új értéket adj, ami a konzerv etetés utáni súlyát jelöli. (pl. konzerSuly = 300;)
// Használd szabadon az if, else if, else feltételes utasításokat.

var konzervSuly = 500;
var logyuliEhes = true;
var cicaEhes = true;





// 6. feladat
// Adott egy uzenet nevű string változó.
// Írd ki a konzolra a hosszát.

var uzenet = "Szia Andika, ügyesen oldd meg a feladatokat."



// 7. feladat (nem kódolós)
// Mi az alábbi üres string hossza?
// var uresString = "";
// Szerintem a hossza ennyi: 




// 8. feladat (nem kódolós)
// Mi az alábbi tömb hossza?
// var tomb = [1,2,3,4];
// Szerintem a hossza ennyi: 




// 9. feladat
// Írd ki a konzolra a "matekJegyek" tömb hosszát!

var matekJegyek = [1, 3, 4, 2, 5, 3, 1, 5];








// 10. feladat
// Egy tanuló 2 rajzjegyet kapott a hónapban, ezeket egy tömbben tároltuk el.
// Vizsgáld meg, hogy az első kapott jegy 5-ös volt-e.
// Ha igen, akkor írd ki: "Jó kezdés"!


var rajzJegyek = [5, 3];




// 11. feladat
// Egy hallgató egy igaz-hamis feladatsort oldott meg.
// A feladatsorban 3 kérdés volt, erre 3 igaz/hamis választ adott.
// A válaszokat tömbben tároltuk el.
// A helyes megoldások: 1. true, 2. false, 3. true.
// Vizsgáld meg egy programmal, hogy a hallgató által megadott válaszok helyes-e, ha mind helyes, akkor írd ki: "Ügyes", egyébként írd ki: "Süsü" !

var hallgatoValaszai = [true, true, true];







// 12. feladat 
// Ez egy gondolkodós feladat.
// Egy hallgatónak 2 tárgya volt a félévben.
// Vizsgáld meg, hogy megbukott-e mind a kettő tárgyból!
// Feladat: töltsd ki az if statement felételét a zárójelek között!
// Trükk: nem használhatsz && jelet.
// Nem baj, ha nem tudod, ez egy buzi feladat. :D

var polgarJogJegy = 1;
var romaiJogJegy = 1;

if (true) {
    console.log("Mindkettőből megbukott.");
}
