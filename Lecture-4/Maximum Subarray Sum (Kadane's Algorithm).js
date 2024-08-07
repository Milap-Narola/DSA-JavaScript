/*Sample Input and Output:
Input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: [4, -1, 2, 1] has the largest sum = 6. */
function maxSubArraySum(arr) {
    let currentMax = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        globalMax = Math.max(max, currentMax);
    }

    return max;
}

let arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4]; 
console.log(maxSubArraySum(arr));
