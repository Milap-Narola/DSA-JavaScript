const findSmall = (arr) => {
    let small = arr [0];

    for (let i = 1; i < arr.length; i++) {
       
        if (arr[i] < small) {
          
            small = arr[i];
        }
    }
    return small;
}
let arr = [3, 7, 1, 9, 2];
let arr2 = [10, 20, 5];

console.log(findSmall(arr));
console.log(findSmall(arr2));