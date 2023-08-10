// Írj egy function-t, amely a paraméterként kapott string utolsó betűjével tér vissza.
// string.charAt(0)
// string[0]

function lastChar(string) {
    console.log(string.charAt(string.length - 1));
    console.log(string[string.length - 1]);
    console.log(string.substring(string.length - 1));
}

lastChar("Bazi");