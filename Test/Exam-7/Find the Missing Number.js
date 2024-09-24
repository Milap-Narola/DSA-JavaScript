const missingNumber = (nums) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

let nums = [3, 0, 1];
console.log(missingNumber(nums));
