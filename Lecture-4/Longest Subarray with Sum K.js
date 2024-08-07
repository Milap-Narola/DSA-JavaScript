/*Sample Input and Output:
 Input: arr = [1, -1, 5, -2, 3], K = 3
 Output: 4
 Explanation: [1, -1, 5, -2] sums to 3 and is the longest subarray */
let arr = [1, -1, 5, -2, 3];
let K = 3;

const findSum = (subArr) => {
    let sum = 0;
    for (let i = 0; i < subArr.length; i++) {
        sum += subArr[i];
    }
    return sum;
}

let maxLength = 0;

for (let i = 0; i < arr.length; i++) {
    let subArr = [];
    for (let j = i; j < arr.length; j++) {
        subArr.push(arr[j]);
        let sum = findSum(subArr);
        if (sum === K) {
            let currLength = subArr.length;
            maxLength = Math.max(currLength, maxLength);
        }
    }
}

console.log(maxLength); 