const firstDuplicate = (nums) => {
    let n = nums.length;

    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (nums[i] === nums[j]) {
                return [i];
            }
        }
    }

    return [-1];
}


console.log(firstDuplicate([1, 2, 3, 2, 1]));
console.log(firstDuplicate([4, 5, 6, 7, 8])); 