const minSumSubarray = (nums, k) => {

    let minSum = Infinity;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    minSum = currentSum;


    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        minSum = Math.min(minSum, currentSum);
    }

    return minSum;
}
let k = 2;

// let nums = [2, 1, 5, 1, 3, 2];
let nums =[3, 5, 2, 6, 2, 4];
console.log(minSumSubarray(nums, k));