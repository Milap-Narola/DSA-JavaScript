const maxSumSubarray = (arr, k) => {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    maxSum = currentSum;
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}


let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let k = 3;

console.log(maxSumSubarray(arr, k)); 