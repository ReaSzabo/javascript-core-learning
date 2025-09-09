var arr = [12, 1, 45, 93, 56, 38, 91, 32, 44];

var a = 0;
var b = 0;
var dif = 9999999999999;


for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (Math.abs(arr[i] - arr[j]) < dif) {
            a = arr[i];
            b = arr[j];
            dif = Math.abs(a - b);
        }
    }
}

console.log("a = " + a + ", b = " + b + ", a minimum difference = " + dif);
