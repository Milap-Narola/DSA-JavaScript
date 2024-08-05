/*Maximum Product Subarray
Input: [2, 3, -2, 4]
Output: 6 (The subarray [2, 3] has the largest product 6.)

2. Input: [-2, 0, -1]
Output: 0 (The subarray [0] has the largest product 0.)

3. Input: [-2, 3, -4]
Output: 24 (The subarray [-2, 3, -4] has the largest product 24.)*/

function maxProductSubarray(arr) {
    if (arr.length === 0) return 0;

    let maxProduct = arr[0];
    let Max = arr[0];
    let Min = arr[0];


    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];


        let tempMax = Max;


        Max = Math.max(num, num * Max, num * Min);
        Min = Math.min(num, num * tempMax, num * Min);


        maxProduct = Math.max(maxProduct, Max);
    }

    return maxProduct;
}

// Example usage:
console.log(maxProductSubarray([2, 3, -2, 4]));
console.log(maxProductSubarray([-2, 0, -1]));
console.log(maxProductSubarray([-2, 3, -4]));   
