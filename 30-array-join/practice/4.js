// Emeld a tömb elemeit a négyzetükre és helyezd el őlet egy új tömbben.

const nums = [1, 2, 3, 4, 5];

const squareNums = nums.map(function sqa(num) {
    return num * num
});

console.log(squareNums)