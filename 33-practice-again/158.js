const person = {
    name: "Andi",
    height: 167,
    age: 18,
}

const ageObject = {
    age: 22,
}

const newObject = {
    ...person,
    ...ageObject,
}

console.log(newObject);

// Mit ír ki? Sejted miért ez lesz az age értéke? - name, height és és a 22-es age párosokat