// Írj egy függvényt, ami a paramérül kapott stringből kivesz minden magánhangzót.
// Ezt adja vissza.
// Tipp: használd a replaceAll metódust. Pl. string.replaceAll("a", "b")
// a, e, i

newString = (string) => {
    return string.replaceAll("a", "").replaceAll("e", "").replaceAll("i", "");
}

console.log(newString("asztali tenisz"));