const minSumArray = (arr, k) => {
    let minSum = 0;
    let currSum = 0;

    for (let i = 0; i < k; i++) {
        currSum += arr[i];
    }
    minSum = currSum

    for (let i = k; i < arr.length; i++) {
        currSum += arr[i];
        currSum -= arr[i - k];
        minSum = Math.min(minSum, currSum);
    }
    return minSum;
}
const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const k = 3;

console.log(minSlider(arr, k)); 