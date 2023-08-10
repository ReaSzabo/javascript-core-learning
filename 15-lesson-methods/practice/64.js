// Írj egy függvényt, amely kiírja a két paraméterként kapott stringet kötőjellel összefűzve!

function stringConcatenate(s1, s2) {
    console.log(s1 + "-" + s2); // string konkatenáció -> es5
    console.log(`${s1}-${s2}`); // string template -> es6
}

stringConcatenate("plusz", "alkoholisták");