const labbeli = {
    size: 39,
    color: "black"
}

const eskuvoiCipo = {
    size: 35,
    color: "white"
}

const barnaCipo = {
    size: 43,
    color: "brown"
}

let tomb = [labbeli, eskuvoiCipo, barnaCipo];

// order the shoes by their size

tomb.sort((a, b) => a.size - b.size)
console.log(tomb);

tomb.sort((a, b) => b.size - a.size);
console.log(tomb);


// order the shoes by their size in reverse