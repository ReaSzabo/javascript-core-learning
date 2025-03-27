// egysoros arrow function rövidítése

function osszead(num1, num2) {
    return num1 + num2;
}

osszead = (num1, num2) => {
    return num1 + num2;
}

osszead = (num1, num2) => num1 + num2;

// Működne az alábbi függvény deklaráció is? - igen

//osszead = num1, num2 => num1 + num2;

console.log(osszead(1, 2))