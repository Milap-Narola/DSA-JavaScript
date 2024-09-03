const longestSubarraySum = (arr) => {
    let maxLen = 0, start = 0, sum = 0;
    const sumMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sumMap.has(sum)) {
            sumMap.delete(sum - arr[start]);
            sum -= arr[start];
            start++;
        }

        sumMap.set(sum, i);
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
}
console.log(longestSubarraySum([1, 2, 3, 1, 2, 3]));