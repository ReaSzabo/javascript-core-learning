// Írjuk ki a string utolsó karakterét.
var mondat = "Shrek, a Zöldöklű öldöklő";
let lastChar;

for (let i = 0; i < mondat.length; i++) {
    lastChar = mondat[i];
}

console.log(lastChar);

// -------------------------

console.log(mondat[mondat.length - 1]);