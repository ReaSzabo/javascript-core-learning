// Írj egy függvényt, amely kap egy számot, 
// és visszaadja annak reciprokát (1/x). 
// Ha a bemenet 0, dobjon hibát, és a catch blokkban kezelje ezt a hibát egy megfelelő üzenettel!


reciprok = (n) => {

    try {
        if (n != 0) {
            console.log("A(z) " + n + " reciproka: 1/" + n);
        } else {
            throw "Nullának nem értelmezhető a reciproka!";
        }
    }
    catch (error) {
        console.log(error);
    }

}


reciprok(0);


