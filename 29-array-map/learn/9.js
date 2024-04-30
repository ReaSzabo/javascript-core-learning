// Create a new array with with getting the name of objects

const people = [
    {
        name: "Bobi",
        weight: 110,
        height: 160,
        job: "policeman"
    },
    {
        name: "Aladár",
        weight: 110,
        height: 160,
        job: "földműves"
    }
];

const names = people.map(person => person.name);

console.log(names);