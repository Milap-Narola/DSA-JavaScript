/*Reverse an Array Without Using Built-in Functions
1. Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

2. Input: [10, 20, 30, 40]
Output: [40, 30, 20, 10]

3. Input: [7, 8, 9]
Output: [9, 8, 7]*/



// Solution 1: Using a loop 
function reverseArray(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5,];
let arr2 = [10, 20, 30, 40 ]
let arr3 = [7,8,9]
console.log(reverseArray(arr));
console.log(reverseArray(arr2));
console.log(reverseArray(arr3));
