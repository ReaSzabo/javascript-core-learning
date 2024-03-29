/////////////// REPLACE ALL /////////////////
console.log("REPLACE ALL")

// A replaceAll() metódust, akkor használjuk, ha szeretnénk kicserélni egy substringet egy stringben.
// Két paramétere van:
// 1. Milyen substringet cseréljünk ki.
// 2. Mire cseréljük ki.

var originalString = "sörös";

var replacedString = originalString.replaceAll("ö", "o"); // Minden "ö" karaktert kicserél "o karakterra."
console.log(replacedString); // "soros"

// Vegyük észre, hogy a replaceAll metódussal módosított eredeti változó nem változik meg.
// Értékül kell adnunk egy másik stringnek vagy akár önmagának.

// Nem elég:
var greetings = "Szevasz";
greetings.replaceAll("e", "i");
console.log(greetings); // Szevasz

// Helyesen:
var greetings2 = "Szevasz";
greetings2 = greetings2.replaceAll("e", "i");
console.log(greetings2); // Szivasz

// Nem csak egy betűt cserélhetünk ki, hanem hosszabb substringet is.
var longGreetings = "Jó reggelt, Máté!";
longGreetings = longGreetings.replaceAll("Máté", "Andi");
console.log(longGreetings); // Jó reggelt, Andi!

// Egy tömb összes elemén használhatjuk a replaceAll funkciót.
// Minden "alma" string részletet kicserélünk "meggy"-re.
var tombocske = ["almafa", "almamoly", "almalekvár", "almapálinka", "vadalma"];
for (var i = 0; i < tombocske.length; i = i + 1) {
  tombocske[i] = tombocske[i].replaceAll("alma", "meggy");
  console.log(tombocske[i]);
}

// Egy stringen természetesen többször is végre tudjuk hajtani a replaceAll metódust.
var hamika = "Minden reggel eszek egy szelet kenyeret.";
hamika = hamika.replaceAll("reggel", "este"); // Minden este eszek egy szelet kenyeret.
hamika = hamika.replaceAll("egy", "három"); // Minden este eszek három szelet kenyeret.
console.log(hamika);


/////////////// TRIM /////////////////
console.log("TRIM")

// A trim() (lenyír) metódust, akkor használjuk, ha szeretnénk kitörölni minden spacet a string elejéről és végéről.
// Gondoljunk arra, hogy a felhasználó egy weblap formjába beírja az email címét és a végén hagy egy spacet, akkor az így kerül elmentésre.
// pl "szaboandreaannaa@gmail.com "
// Mikor később a programunk szeretné megvizsgálni a stringet, akkor az if helytelenül azt fogja hinni, hogy ez nem a felhasználó email címe.

var megadottEmail = "szaboandreaannaa@gmail.com ";
var megadottJelszo = "123456";

if (megadottEmail == "szaboandreaannaa@gmail.com" && megadottJelszo == "123456") {
  console.log("Sikeres belépés");
} else {
  console.log("Nincs ilyen email és jelszó páros az adatbázisban.");
}

// Mivel azt feltételezzük, hogy a felhasználó nem figyelmes, ezért az alábbi módon egészítjük ki a kódot.
if (megadottEmail.trim() == "szaboandreaannaa@gmail.com" && megadottJelszo.trim() == "123456") {
  console.log("Sikeres belépés");
} else {
  console.log("Nincs ilyen email és jelszó páros az adatbázisban.");
}

// Ezzel törlünk minden whitespace-t a string elejéről és végéről.
// De mi a tök az a whitespace?
// A whitespace character is an empty space (without any visual representation) on screen. 
// Én hármat ismerek: enter, space és ... 
// Kitalálod mi a harmadik?



/////////////// SPLIT /////////////////
console.log("SPLIT")

// A split() metódussal feldarabolhatunk egy stringet egy tömbbé.
// Hogy miii?
// Igen, ehhez csak az kell, hogy a stringben legyen valamilyen ún. határoló karakter (separator).
// Vegyünk egy példát.

// Van egy string-ünk, amiben az elemek fel vannak sorolva vesszővel.
var kajaLista = "sajt,tej,kolbász,kenyér,rágó,narancs";
// Daraboljuk fel a vesszők mentén.
var kajaTomb = kajaLista.split(",");
console.log(kajaTomb) // [sajt, tej, kolbász, kenyér, rágó, narancs]

// Így már for ciklussal bejárható:
for (var i = 0; i < kajaTomb.length; i++) {
  console.log(kajaTomb[i]);
}


// Bármilyen karakter mentén darabolhatunk:
var string1 = "Itt space mentén fogunk darabolni";
var array1 = string1.split(" ");
console.log(array1); // [Itt, space, mentén, fogunk, darabolni]

var string2 = "Itt,vessző,mentén,fogunk,darabolni";
var array2 = string2.split(",");
console.log(array2); // [Itt, vessző, mentén, fogunk, darabolni]

var string3 = "Itt;pontosvessző;mentén;fogunk;darabolni";
var array3 = string3.split(";");
console.log(array3); // [Itt, pontosvessző, mentén, fogunk, darabolni]

var string4 = "Itt:kettőspont:mentén:fogunk:darabolni";
var array4 = string4.split(":");
console.log(array4); // [Itt, kettőspont, mentén, fogunk, darabolni]

