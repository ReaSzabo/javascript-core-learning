// Mi történik, ha nem kapjuk el a dobott hibát? - error

function fail() {
    console.log("Előtte");
    throw new Error("Hoppá!");
    console.log("Utána");
}

console.log("Kezdés");
fail();
console.log("Befejezés");