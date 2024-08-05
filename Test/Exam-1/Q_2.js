/*Merge Two Sorted Arrays
1. Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
Output: [1, 2, 3, 4, 5, 6]

2. Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6]
Output: [1, 2, 3, 4, 5, 6]

3. Input: arr1 = [0, 9], arr2 = [1, 8]
Output: [0, 1, 8, 9]*/


function mergeSortedArrays(arr1, arr2) {
    let result = new Array(arr1.length + arr2.length); 
    let i = 0; 
    let j = 0; 
    let k = 0;


    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result[k] = arr1[i];
            i++;
        } else {
            result[k] = arr2[j];
            j++;
        }
        k++;
    }
    while (i < arr1.length) {
        result[k] = arr1[i];
        i++;
        k++;
    }
    while (j < arr2.length) {
        result[k] = arr2[j];
        j++;
        k++;
    }

    return result;
}

// Example usage:
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
