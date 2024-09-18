const findMin = (arr) => {

    if (arr.length === 1) {
        return arr[0];
    }
    let minOfRest = findMin(arr.slice(1));
    return Math.min(arr[0], minOfRest);
}

console.log(findMin([3, 1, 4, 1, 5, 9])); 