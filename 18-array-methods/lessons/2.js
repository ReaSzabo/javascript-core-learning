// egysoros arrow function rövidítése

function osszead(num1, num2) {
    return num1 + num2;
}

osszead = (num1, num2) => {
    return num1 + num2;
}

osszead = (num1, num2) => num1 + num2;

// nem működik
//osszead = num1, num2 => num1 + num2;
console.log(osszead(1, 2))