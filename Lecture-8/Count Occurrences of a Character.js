const countOccurrences = (str, char, index = 0) => {

    if (index >= str.length) {
        return 0;
    }
    let count = str[index] === char ? 1 : 0;


    return count + countOccurrences(str, char, index + 1);
}

console.log(countOccurrences("hello", 'l')); 