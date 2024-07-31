const rotateArray = (arr, positions) => {
    let n = arr.length;
    let effectivePositions = positions % n;

    let first = arr.slice(-effectivePositions);

    let second = arr.slice(0, -effectivePositions);

    const rotatedArray = first.concat(second);

    return rotatedArray;
}


console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([10, 20, 30], 1));