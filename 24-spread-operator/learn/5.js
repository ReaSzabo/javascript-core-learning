const person = {
    name: "Andi",
    age: 18,
}

const employee = {
    salary: 500000,
    position: "boss",
}

const newObject = {
    ...person,
    ...employee
}

console.log(newObject);