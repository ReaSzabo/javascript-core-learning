
var tombi = [12, 1, 45, 93, 56, 38, 91, 32, 44];
var szam = 125;

closestNumber = (arr, n) => {

    arr.push(n);
    arr = arr.sort(function (a, b) {
        return a - b;
        // pozitiv szám: a kerül előre
        // ha negativ: a b kerül előre
    });

    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        // közepén
        if (arr[i] == n && i != 0 && i != arr.length - 1) {
            console.log("közep")

            if (n - arr[i - 1] < Math.abs(n - arr[i + 1])) {
                return arr[i - 1];
            } else if (Math.abs(n - arr[i + 1]) < n - arr[i - 1]) {
                return arr[i + 1];
            }

            return arr[i + 1];

            // első
        } else if (arr[i] == n && i == 0) {
            console.log("első")

            return arr[i + 1];
        }
        // utolsó
        console.log("utolsó")
        return arr[i - 1];
    }
}


console.log(closestNumber(tombi, szam));


