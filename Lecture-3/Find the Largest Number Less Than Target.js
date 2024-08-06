/*Sample Input :
let numbers1 = [1, 2, 3, 4, 5];
let target1 = 4;
Expected Output : 3 */
function findLargest(numbers, target) {
    let left = 0; 
    let largest = null;

    while (left < numbers.length) {
      if (numbers[left] < target) {
        largest = numbers[left]; 
      } else {
        break;
      }
      left++;
    }
  

    return largest;
  }
  

  let numbers1 = [1, 2, 3, 4, 5];
  let target1 = 4;
  
  console.log(findLargest(numbers1, target1)); 
  