
/* let arr = [[11, 2, 4], [3, 8, 9], [2, 6, 15]];

let diag1 = 0;

let diag2 = 0;


for (let i = 0; i < arr.length; i++) {

    diag1 = diag1 + arr[i][i];

    diag2 = diag2 + arr[i][arr[i].length - (i + 1)];
}


console.log(Math.abs(diag1 - diag2)); */


/* let n = 6;

let row = "";

for (let i = 0; i < n; i++) {

    row = "";

    for (let j = 0; j < n - (i + 1); j++) {


        row = row + " ";
    }

    for (let k = 0; k < i + 1; k++) {

        row = row + "#";
    }


    console.log(row);

} */


function timeConversion(s) {

    if (s.substr(0, 2) == "12" && s.substr(8, 10) == "AM") {

        return "00:00:00";

    } else if (s.substr(0, 2) == "12" && s.substr(8, 10) == "PM") {

        return s.substr(0, 8);

    } else if (s.substr(8, 10) == "AM") {

        return s.substr(0, 8);


    } else if (s.substr(8, 10) == "PM") {

        let n = parseInt(s.substr(0, 2)) + 12;
        n = n.toString() + s.substr(2, 8); // substring()

        return n;
    }
}

console.log(timeConversion("10:00:00PM"));


