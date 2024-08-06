/*Sample Input 1:
let numbers1 = [1, 2, 3, 4, 5];
let target1 = 6;
Expected Output 1:
[[1, 5], [1, 4], [1, 3], [1, 2], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5]] */
function findPairs(numbers, target) {
    numbers.sort((a, b) => a - b);
    let pairs = [];
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {

        let sum = numbers[left] + numbers[right];

        if (sum <= target) {

            for (let i = right; i > left; i--) {

                pairs.push([numbers[left], numbers[i]]);
            }

            left++;
        }
        else {

            right--;
        }
    }

    return pairs;
}

let numbers1 = [1, 2, 3, 4, 5];
let target1 = 6;

console.log(findPairs(numbers1, target1));

