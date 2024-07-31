const removeDuplicate = (arr) => {
    const sureArr = [];

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        let duplicate = false;

        for (let j = 0; j < sureArr.length; j++) {
            if (sureArr[j] == ele) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate) {
            sureArr.push(ele);
        }
    }
    return sureArr;
}


let arr1 = [1, 2, 2, 3, 4, 4, 5];
let result = removeDuplicate(arr1);

console.log(result);


