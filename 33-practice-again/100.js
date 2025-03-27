// Írj egy függvényt, amely kap egy tömböt és egy indexet. 
// Visszaadja az adott indexű elemet, vagy ha az index érvénytelen
//  (negatív vagy túl nagy), dobjon hibát és kezelje azt!

// Alapvetően ezt a hibát alapból észrevenné a javascript motor is, de mi most kezeljük ezt a problémát egyénileg.

invalidInd = (arr, ind) => {

    try {
        if (ind >= 0 && ind <= arr.length) {
            console.log(arr[ind]);
        } else {
            throw "Érvénytelen index!";
        }
    }
    catch (error) {
        console.log(error);
    }
}

const tombi = ["alma", "körte", "szilva"];

invalidInd(tombi, 2);
invalidInd(tombi, -3);