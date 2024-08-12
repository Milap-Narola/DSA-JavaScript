
const findPairOfSum = (arr, targetSum) => {
    const pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
  
    return pairs;
  }
  
  
  const arr = [1,2,3,4,5,6 ];
  const targetSum = 7;
  const result = findPairOfSum(arr, targetSum);
  console.log(result);
  