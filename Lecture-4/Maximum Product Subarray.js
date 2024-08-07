/* Sample Input and Output:
 Input: arr = [2, 3, -2, 4]
 Output: 6
Explanation: [2, 3] has the largest product = 6. */
const maxSubArrayProduct =(arr)=> {
    let max = arr[0];
    let currmax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currmax = Math.max(arr[i], currmax * arr[i]);
        max = Math.max(max, currmax);
    }

    return max;
}

let arr = [2, 3, -2, 4]
console.log(maxSubArrayProduct(arr)); 