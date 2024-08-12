const maxSubArray = (arr) => {
    let maxSum = arr[0];
    let currSum = arr[0];
    let start = 0
    let end = 0
    let temp = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currSum + arr[i]) {
            currSum = arr[i];
            temp= i;
        } else {
            currSum += arr[i];
        }

        if (currSum > maxSum) {
            maxSum = currSum;
            start = temp;
            end = i;
        }
    }

    console.log(`Max Sum: ${maxSum}, Start Index: ${start}, End Index: ${end}`);
}


maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


maxSubArray([1, 2, 3, 4, -10, 4, 6]);
