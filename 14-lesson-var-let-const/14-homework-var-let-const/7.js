// Írj egy függvényt, ami a paramérül kapott stringből kivesz minden magánhangzót.
// Ezt adja vissza.
// Tipp: használd a replaceAll metódust. Pl. string.replaceAll("régi", "új")
// á, é ,i

function stringer(string) {
    return string.replaceAll("á", "").replaceAll("é", "").replaceAll("i", "");
}

console.log(stringer("tányér"));