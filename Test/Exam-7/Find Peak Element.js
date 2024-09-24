const findPeakElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + ((right - left) >> 1);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

let nums = [1, 2, 3, 1];
let peak = findPeakElement(nums);
console.log(peak);
