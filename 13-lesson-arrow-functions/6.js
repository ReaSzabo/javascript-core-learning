var getAdditionResult = (number1, number2) => {
    return number1 + number2;
}

console.log(getAdditionResult(100, 200));
console.log(getAdditionResult(2, 3));
console.log(getAdditionResult(20, 5));

if (getAdditionResult(100, 100) == 200) {
    console.log("The result of addition is 200.");
}
