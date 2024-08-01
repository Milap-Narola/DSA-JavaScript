

const countOccurrences =(arr,target)=>
{
    let count = 0;
    for (let i=0; i<arr.length; i++)
    {
        if (arr[i]===target)
        {
            count++;
        }
    }
    return count;

}


const arr1 = [1, 2, 2, 3, 2, 4, 5];
const target1 = 2;

const arr2 = [10, 20, 20, 10, 10];
const target2 = 10;

let count1 =countOccurrences(arr1, target1);
let count2=countOccurrences(arr2, target2);

console.log(count1);
console.log(count2);

