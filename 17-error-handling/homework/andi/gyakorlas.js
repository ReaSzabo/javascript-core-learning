var N = 500;

function returnSmallestNumber(numero) {

    var counter = numero.toString().length;

    if (counter == 1) {

        return 0;

    } else {

        var number = "1";

        for (i = 0; i < counter - 1; i++) {

            number = number + "0";
        }

        number = parseInt(number);

        return number;

    }
}

console.log(returnSmallestNumber(N));
