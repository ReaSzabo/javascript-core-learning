// Mit ír ki? - mindkét propertyt (az age 22 lesz)

const person = {
    name: "Andi",
    age: 18,
}

const newObject = {
    ...person,
    age: 22
}

console.log(newObject);