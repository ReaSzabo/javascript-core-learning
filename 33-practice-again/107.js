// Írj egy függvényt, ami a stringet kap paraméterül.
// A string betűit tedd bele egy tömbbe. Ez legyen a visszatérési érték.
// Figyelj rá, hogy ne legyenek duplikációk a tömbben.
// Pl "Ford" -> ["F", "o", "r", "d"]
// Tipp: ["a", "b"].includes("a")

let word = "alma";

strToArr = (s) => {
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        if (!arr.includes(s[i])) {
            arr.push(s[i]);
        }
    }

    return arr;
}

console.log(strToArr(word));
