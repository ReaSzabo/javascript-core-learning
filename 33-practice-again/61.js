// What would we see on the console? - 100, 200, 300, 400, 500

const numbers = [10, 20, 30, 40, 50];

for (var i = 0; i < numbers.length; i = i + 1) {
    console.log(numbers[i] * 10);
}
