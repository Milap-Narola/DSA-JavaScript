/*Sample Input :
let nums1_1 = [1, 2, 3, 0, 0, 0];
let nums2_1 = [2, 5, 6];
let m1 = 3;
let n1 = 3;
Expected Output :
[1, 2, 2, 3, 5, 6] */


function mergeInPlace(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, arr = m + n - 1;

    // Merge arrays from the end
    while (j >= 0) {
        nums1[arr--] = (i >= 0 && nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
    }
}

let nums1_1 = [1, 2, 3, 0, 0, 0];
let nums2_1 = [2, 5, 6];
let m1 = 3;
let n1 = 3;

mergeInPlace(nums1_1, m1, nums2_1, n1);
console.log(nums1_1); // [1, 2, 2, 3, 5, 6]
