const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
let array1 = [1, 2, 3, 4, 5]
let array2 = [10, 20, 30];
console.log(sumArray (array1));
console.log(sumArray (array2));