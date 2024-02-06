const person = {
    name: "Andi",
    age: 18,
}

const newObject = {
    ...person,
    eyeColor: "brown"
}

console.log(newObject);