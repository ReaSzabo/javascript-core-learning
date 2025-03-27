// Írj egy függvényt, amely kap egy JSON formátumú szöveget és megpróbálja azt objektummá alakítani. 
// Ha a JSON érvénytelen, a catch blokkban jelezze a hibát!

function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log("A fájl nem található: " + error);
    }
}

console.log(parseJson('{"name": "John", "age": 30}')); // { name: 'John', age: 30 }


parseJson("hibás formátum");