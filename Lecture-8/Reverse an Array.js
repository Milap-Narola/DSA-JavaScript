const reverseArray = (arr) => {

    if (arr.length <= 1) {
        return arr;
    }

    return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, -1)));
}


console.log(reverseArray([1, 2, 3, 4])); 
