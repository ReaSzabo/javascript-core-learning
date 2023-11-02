// Írd ki a tömb legnagyobb elemét!
// Használj forEach-et!

var szamok2 = [41, 3, 6, 8, 12, 13];



var max = 0;

szamok2.forEach(

    (element) => {

        if (element > max) {

            max = element;
        }
    }
)

console.log(max);