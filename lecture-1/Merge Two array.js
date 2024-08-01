// const mergeArray = (arr1, arr2) => {
//     return arr1.concat(arr2);
// }

// console.log(mergeArray([1, 2, 3], [4, 5, 6]));
// console.log(mergeArray([10, 20], [30, 40])); 

const mergeArrays = (arr1, arr2) => {
    const mergedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }

    for (let j = 0; j < arr2.length; j++) {
        mergedArray.push(arr2[j]);
    }

    return mergedArray;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([10, 20], [30, 40]));