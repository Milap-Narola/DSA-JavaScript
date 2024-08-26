const maxProductSubarray = (arr, k) => {
    let maxProduct = 0;
    let currentProduct = 1;

    for (let i = 0; i < k; i++) {
        currentProduct *= arr[i];
    }
    maxProduct = currentProduct;

    for (let i = k; i < arr.length; i++) {
        maxProduct = Math.max(maxProduct, currentProduct);
        currentProduct = (currentProduct / arr[i - k]) * arr[i];
    }
    maxProduct = Math.max(maxProduct, currentProduct);
    return maxProduct;
}
let arr = [2, 5, 3, 1, 8, 9, 2];
let k = 2;
console.log(maxProductSubarray(arr, k));