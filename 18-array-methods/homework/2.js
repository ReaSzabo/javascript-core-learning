// Írd ki a tömb azon elemeit, amelyek nagyobbak, mint 50!
// Használj forEach-et!
var nagySzamok = [100, 49, 10, 55, 200];

nagySzamok.forEach(
    function (elem) {
        if (elem > 50) {
            console.log(elem);
        }
    }
)