// synchron
console.log("Szia");

// asynchron
setTimeout(() => {
    console.log("Csá");
}, 1000);

setTimeout(() => {
    console.log("Szevasz");
}, 5000);

setTimeout(() => {
    console.log("Bye");
}, 1);

setTimeout(() => {
    console.log("Szerbusz");
}, 0);

console.log("Hi");
