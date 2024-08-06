/*Sample Input 1:
let numbers1 = [1, 2, 3, 4, 5];
let target1 = 6;
Expected Output 10 */


function countPairs(numbers, target) {
    numbers.sort((a, b) => a - b); 
    let left = 0
    let right = numbers.length - 1
    let count = 0;

    while (left < right) {
        if (numbers[left] + numbers[right] < target) {

            count += (right - left);
            left++;
        } else {
            right--;
        }
    }

    return count;
}

let numbers1 = [1, 2, 3, 4, 5];
let target1 = 6;
console.log(countPairs(numbers1, target1));

