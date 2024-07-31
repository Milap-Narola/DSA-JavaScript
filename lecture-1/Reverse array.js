const reverseArray =(arr)=>{
   let reverseArr =[];
   for (let i=arr.length-1; i>=0; i--){
     reverseArr.push(arr[i]);
   }
   return reverseArr;
}

let arr1 =[1,2,3,4,5];
let arr2 =[10,20,30];


console.log(reverseArray(arr1));
console.log(reverseArray(arr2));