// Írj egy function-t, amely a paraméterként kapott string utolsó betűjével tér vissza.


lastCharachter = (x) => {
    return x.charAt(x.length - 1);
}

var word = "galuska";

console.log(lastCharachter(word));