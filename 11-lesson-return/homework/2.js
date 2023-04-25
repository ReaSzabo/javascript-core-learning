console.log("Exercise 11");
// Írj egy function-t, amely a paraméterként kapott string utolsó betűjével tér vissza.

function last(string) {
  //return string[string.length - 1]
  return string.charAt(string.length - 1)
}

console.log(last("Anyád picsája"))