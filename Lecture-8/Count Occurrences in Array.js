const countOccurrences = (arr, element, index = 0) => {

    if (index === arr.length) {
        return 0;
    }
    let count = arr[index] === element ? 1 : 0;

    return count + countOccurrences(arr, element, index + 1);
}


console.log(countOccurrences([1, 2, 2, 3, 2], 2)); 