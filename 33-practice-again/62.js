// What would we see on the console? Disco, Party, Disco, Party, Disco

const codes = ["D", "P", "D", "P", "D", "Party"];

for (var i = 0; i < codes.length; i++) {
    switch (codes[i]) {
        case "D":
            console.log("Disco");
            break;
        case "P":
            console.log("Party");
            break;
    }
}