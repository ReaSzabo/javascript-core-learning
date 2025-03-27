// What will be logged? - A, C, D

try {
    console.log("A");
    throw new Error("Error happenned!");
    console.log("B");
} catch (error) {
    console.log("C");
}
console.log("D");