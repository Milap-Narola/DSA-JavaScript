let arr =[1,2,3,4,5];
let arr1=[5,4,3,2,1];

const arrSorted =(arr)=>{
    for (let i=0; i<arr.length-1; i++)
    {
        if (arr[i] >arr[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(arrSorted(arr));
console.log(arrSorted(arr1));