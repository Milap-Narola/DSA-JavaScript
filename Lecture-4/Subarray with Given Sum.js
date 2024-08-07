/*Sample Input and Output:
// Input: arr = [1, 4, 20, 3, 10, 5], sum = 33
// Output: true
// Explanation: [20, 3, 10] sums to 33. */

let arr = [1, 4, 20, 3, 10, 5];
let sum = 33;

const findSum = (subArray) => {
    let sum = 0;
    for (let i = 0; i < subArray.length; i++) {
        sum += subArray[i];
    }
    return sum;
}

const subarraytoGivensum = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        let subArray = [];
        for (let j = i; j < arr.length; j++) {
            subArray.push(arr[j]);
            let currentSum = findSum(subArray);
            if (currentSum === sum) {
                return true;
            }
        }
    }
    return false;
}

console.log(subarraytoGivensum(arr, sum)); 