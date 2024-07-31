const arr1 = [3, 7, 1, 9, 2];
const arr2 = [10, 20, 5];


const findLarge = (arr) => {
    let large = arr[0];

    for (let i = 1; i < arr.length; i++) {
       
        if (arr[i] > large) {
        
            large = arr[i];
        }
    }
    return large;
}

console.log(findLarge(arr1));
console.log(findLarge(arr2));