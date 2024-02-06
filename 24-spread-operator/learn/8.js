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