// Filter the words that are longer than 6 letters

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

filterWords = (ar) => {
    ar = ar.filter(element => element.length > 5)

    return ar;
}

console.log(filterWords(words));
